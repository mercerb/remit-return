import pandas as pd
import numpy as np
from class_data_remap import map_answers, calculate_mig_cost, calculate_mig_cost_dist
import matplotlib.pyplot as plt

data_path = "class-data/dataset-1_central-american-survey"

main_df = pd.read_csv(f"{data_path}/main_table.csv", index_col=0)


def prepare_mig_ext_dataset() -> pd.DataFrame:
    """ Read mig_ext_roster.csv
    Returns a pandas dataframe with the data the way we want it
    That can then be written to a JSON file as a list of JSON objects
    """
    mig_ext_cols = [0, 1, 2, 21, 32, *range(46, 55), 57, *range(92, 108)]
    mig_ext_df = pd.read_csv(
        f"{data_path}/mig_ext_roster.csv", index_col=0, usecols=mig_ext_cols
    )

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

    # if available, convert migration cost to USD
    mig_ext_df["mig_cost_usd"] = mig_ext_df.apply(
        lambda row: calculate_mig_cost(row), axis=1
    ).astype("Int64")

    # remap the distribution cost
    mig_ext_df["cost_distribution_fraction"] = mig_ext_df.apply(
        lambda row: calculate_mig_cost_dist(row), axis=1
    )

    # track if migrant stayed in the destination country
    at_dest = mig_ext_df["mig_ext_llego"].str.contains("Yes, you reside")
    mig_ext_df["at_destination"] = at_dest

    return mig_ext_df


mig_ext_df = prepare_mig_ext_dataset()

# Sanity check: plot cost (USD) by country
def plot_cost_distribution(mig_ext_df):
    HND_dist = mig_ext_df[mig_ext_df["country"] == "HND", "mig_cost_usd"]
    GT_dist = mig_ext_df[mig_ext_df["country"] == "GT", "mig_cost_usd"]
    SLV_dist = mig_ext_df[mig_ext_df["country"] == "SLV", "mig_cost_usd"]

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

plot_cost_distribution(mig_ext_df)
# Save to JSON file as a list of JSON objects, each corresponding to a migrator
# who made it to the United States as their destination
# TODO: add likely occupation
# filter for migrants living in the destination country & in the US
in_us = mig_ext_df[
    (mig_ext_df["at_destination"]) == True
    and mig_ext_df["mig_ext_country"] == "United States of America"
]
mig_ext_df.to_json("class-data/migrants_in_US.json", orient="records")
