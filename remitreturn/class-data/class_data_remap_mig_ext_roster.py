"""
Helper functions to parse "mig_ext_roster.csv" specificially
"""
import pandas as pd
from class_data_lookup_utils import map_answers, currency_convert
import matplotlib.pyplot as plt

data_root = "remitreturn/class-data"
class_data_path = f"{data_root}/dataset-1_central-american-survey"
mig_ext_cols = [0, 1, 2, 21, 32, *range(46, 55), 57, *range(92, 108)]

def calculate_mig_cost_dist(row):
    """for a given row of the mig_ext_roster dataset,
    wrap the distribution of costs into an object

    :param row: row in csv file
    :return: dictionary of migration cost breakdown
    """
    dist_fraction = "N/A"
    if row["mig_ext_cost_dist_awareness"] == 1:
        dist_fraction = {
            "intermediaries": row["mig_ext_cost_intermediaries"],
            "transportation": row["mig_ext_cost_transportation"],
            "subsistence": row["mig_ext_cost_subsistence"],
            "other": row["mig_ext_cost_other"]}
    return dist_fraction


def calculate_mig_cost(row) -> int:
    """for given migration cost and currency,
    convert to USD 

    :param row: row in csv file
    :return: cost converted to USD
    """
    cost_usd = None
    total = row["mig_ext_cost_total"]
    if row["mig_ext_cost_awareness"] == 1 and not pd.isna(total):
        cost_usd = currency_convert(total, row["mig_ext_cost_currency"])
    return cost_usd

def prepare_mig_ext_dataset() -> pd.DataFrame:
    """ Import data from mig_ext_roster.csv as dataframe,
    then modify to include the data the way we want it 
    
    :return: updated mig_ext_df dataframe
    """
    mig_ext_df = pd.read_csv(f"{class_data_path}/mig_ext_roster.csv", index_col=0, usecols=mig_ext_cols)

    # remap answer codes to real values
    mig_ext_df.mig_ext_sex = mig_ext_df.mig_ext_sex.map(
        {1: "Woman", 2: "Man", 3: "No answer"}
    )

    # use lookup table to get the actual answers
    col_suff = ["acompany", "medio", "finance",
                "cost_currency", "country", "llego"]
    for suff in col_suff:
        col = f"mig_ext_{suff}"
        mig_ext_df[col] = mig_ext_df[col].apply(map_answers, args=(col,))

    # filter out destinations other than the US
    mig_ext_df = mig_ext_df[mig_ext_df.mig_ext_country.str.contains("United States")]

    # if available, convert migration cost to USD, and filter out entries without cost
    mig_ext_df["mig_cost_usd"] = mig_ext_df.apply(lambda row: calculate_mig_cost(row), axis=1).astype("Int64")
    mig_ext_df = mig_ext_df[pd.notna(mig_ext_df["mig_cost_usd"])]

    # remap the distribution cost
    mig_ext_df["cost_distribution_fraction"] = mig_ext_df.apply(
        lambda row: calculate_mig_cost_dist(row), axis=1
    )

    # track if migrant stayed in the destination country
    at_dest = mig_ext_df["mig_ext_llego"].str.contains("Yes, you reside")
    mig_ext_df["at_destination"] = at_dest

    # add likely occupation 
    mig_ext_df = get_likely_occupations(mig_ext_df)

    return mig_ext_df

def plot_cost_distribution(mig_ext_df):
    """plot cost of migration by country in matplotlib

    :param mig_ext_df: mig_ext_roster df
    """
    HND_dist = mig_ext_df[mig_ext_df["country"] == "HND"]["mig_cost_usd"].dropna()
    GT_dist = mig_ext_df[mig_ext_df["country"] == "GT"]["mig_cost_usd"].dropna()
    SLV_dist = mig_ext_df[mig_ext_df["country"] == "SLV"]["mig_cost_usd"].dropna()

    # fig, axs = plt.subplots(1, 3, tight_layout=True)
    plt.hist(HND_dist, alpha=0.5, bins=80, label="Honduras")
    plt.hist(GT_dist, alpha=0.5, bins=80, label="Guatemala")
    plt.hist(SLV_dist, alpha=0.5, bins=80, label="El Salvador")

    # add labels, legend
    plt.title('Cost of Migration Distribution by Country')
    plt.xlabel('Cost of Migration (USD)')
    plt.ylabel('Frequency')
    plt.legend(title='Country')

    plt.show()

def normalize_weights(list):
    """for a list of weights that might not perfectly add up to 1
    (instead add up to 0.9999), smooth that out here

    :param list: input list of weights
    :return: fixed list of weights
    """
    diff = 1 - sum(list) # this is tiny, so add to last element
    list[-1] = list[-1] + diff if diff > 0 else list[-1] - diff
    return list

def get_likely_occupations(df):
    """based on summary statistics for actual occupations of migrants before & after 
    migration, assign migrants in this group to likely post-migration occupations
    such that the distribution of occupations is still the same
    TODO: also give them a monthly salary based on the occupations

    :param df: dataframe of migrants
    :return: updated dataframe with occupations added
    """
    occupations = pd.read_csv(f"{data_root}/migrant_occupation_breakdown.csv")
    salaries = pd.read_csv(f"{data_root}/migrant_occupation_salary.csv")
    salaries = salaries.applymap(str).groupby("Employment")["Salary"].apply(float).to_dict()

    # convert percentages to fractional weights
    occupations["target"] = occupations["target"].str.rstrip("%").astype("float")/100
    occupations["source"] = occupations["source"].str.rstrip("%").astype("float")/100

    values = {"HND": None, "SLV": None, "GT": None}
    weights = {"HND": None, "SLV": None, "GT": None}

    for country in ["HND", "SLV", "GT"]:
        jobs = occupations[occupations.Country == country]
        weights[country] = normalize_weights(list(jobs.target))
        values[country] = list(jobs.Employment)

    def assign_jobs(x):
        """randomly assign jobs based on appropriate per-country weights
        """
        import numpy as np
        np.random.seed(123)
        key = x["country"].iat[0]
        return pd.Series(np.random.choice(values[key], size=len(x), p=weights[key]))
     
    
    grouped_df = df.groupby("country").apply(assign_jobs)\
        .rename("likely_occupation").reset_index().drop(labels="level_1", axis=1)
    
    df = df.sort_values(by="country")
    df = df.assign(likely_occupation=grouped_df["likely_occupation"].values)

    # now assign appropriate salaries
    df["occupation_salary"] = df["likely_occupation"].map(salaries)

    return df
