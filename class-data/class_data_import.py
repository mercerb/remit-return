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

# Sanity check: look at cost (USD) by country
HND_dist = mig_ext_df[mig_ext_df["country"]
                      == "HND"]["mig_cost_usd"].value_counts()
GT_dist = mig_ext_df[mig_ext_df["country"]
                     == "GT"]["mig_cost_usd"].value_counts()
SLV_dist = mig_ext_df[mig_ext_df["country"]
                      == "SLV"]["mig_cost_usd"].value_counts()

fig, axs = plt.subplots(1, 3, tight_layout=True)
axs[0].hist(HND_dist, bins=80)
axs[1].hist(GT_dist, bins=80)
axs[2].hist(SLV_dist, bins=80)
# mig_ext_df.pivot(columns="country", values="mig_cost_usd").plot.hist(bins=100,
#                                                                      title="Cost of Migration in USD Per Origin Country")
# ax.set_title()
# ax.set_ylabel("$ USD")
# plt.show()

# Save to JSON file as a list of JSON objects, each corresponding to a migrator
# who made it to the United States as their destination
# TODO: add likely occupation
# filter for migrants living in the destination country & in the US
in_us = mig_ext_df[
    (mig_ext_df["at_destination"]) == True
    and mig_ext_df["mig_ext_country"] == "United States of America"
]
mig_ext_df.to_json("class-data/migrants_in_US.json", orient="records")
