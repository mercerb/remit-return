import pandas as pd
import numpy as np
from class_data_remap import map_answers, calculate_mig_cost, calculate_mig_cost_dist
import matplotlib.pyplot as plt

data_path = "class-data/dataset-1_central-american-survey"

main_df = pd.read_csv(f"{data_path}/main_table.csv", index_col=0)
mig_ext_cols = [0, 1, 2, 21, 32, *range(46, 55), 57, *range(92, 108)]
mig_ext_df = pd.read_csv(
    f"{data_path}/mig_ext_roster.csv", index_col=0, usecols=mig_ext_cols
)

# remap answer codes to real values
mig_ext_df.mig_ext_sex = mig_ext_df.mig_ext_sex.map(
    {1: "Woman", 2: "Man", 3: "No answer"})

for col in [
    "mig_ext_acompany",
    "mig_ext_medio",
    "mig_ext_finance",
    "mig_ext_cost_currency",
    "mig_ext_country",
    "mig_ext_llego",
]:
    mig_ext_df[col] = mig_ext_df[col].apply(map_answers, args=(col,))

mig_ext_df["arrived"] = mig_ext_df[col].apply(map_answers, args=(col,))
mig_ext_df["mig_cost_usd"] = mig_ext_df.apply(
    lambda row: calculate_mig_cost(row), axis=1).astype("Int64")
mig_ext_df["cost_distribution_fraction"] = mig_ext_df.apply(
    lambda row: calculate_mig_cost_dist(row), axis=1)
mig_ext_df["at_destination"] = mig_ext_df['mig_ext_llego'].str.contains("Yes, you reside")

# Get value counts of 'mig_ext_medio' column by 'country' - sanity check plot
mig_methods_by_country = mig_ext_df.groupby(
    'country')['mig_ext_medio'].value_counts().iloc[:5].unstack().T
fig, ax = plt.subplots()
mig_methods_by_country.plot(kind='bar', ax=ax, width=0.8, rot=0)
ax.set_title("Top Migration Methods by Country")
ax.legend(title="Country", bbox_to_anchor=(1, 1))
plt.show()

# cost of migration (USD) histogram
mig_ext_df['mig_cost_usd'].plot.hist(bins=100)
plt.set_title("Cost of migration (USD)")

# cost of migration (USD) histogram, by country
mig_ext_df.pivot(columns="country", values="mig_cost_usd").plot.hist(bins=100)

plt.show()


# result = mig_ext_df.to_json(orient="records")
# { gender, age, cost_of_mig, cost_as_debt (breakdown), occupation, origin, dest, success, method}
