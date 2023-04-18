import pandas as pd
from class_data_remap import map_answers
import matplotlib.pyplot as plt

data_path = "class-data/dataset-1_central-american-survey"

main_df = pd.read_csv(f"{data_path}/main_table.csv", index_col=0)
mig_ext_cols = [0, 1, 2, 21, 32, *range(46, 55), 57, *range(92, 108)]
mig_ext_df = pd.read_csv(
    f"{data_path}/mig_ext_roster.csv", index_col=0, usecols=mig_ext_cols
)


# remap
def remap_mig_ext_df(mig_ext_df):
    sex_mapping = {1: "Woman", 2: "Man", 3: "No answer"}
    # yn_mapping = {1: "Yes", 2: "No"}
    mig_ext_df.mig_ext_sex = mig_ext_df.mig_ext_sex.map(sex_mapping)


remap_mig_ext_df(mig_ext_df)

# remap answer codes to real values
for col in [
    "mig_ext_acompany",
    "mig_ext_medio",
    "mig_ext_finance",
    "mig_ext_country",
    "mig_ext_llego",
]:
    mig_ext_df[col] = mig_ext_df[col].apply(map_answers, args=(col,))

plt.figure()
mig_ext_df["mig_ext_medio"].value_counts().plot(kind="bar")
plt.show()

# mig_ext_df_grouped = mig_ext_df.groupby("country")
# mig_ext_df_grouped["mig_ext_medio"].groupby("country").agg("sum").unstack(1).plot(
#     kind="bar", subplots=True
# )
# plt.show()

# table = mig_ext_df.pivot_table(columns='country')
# table["mig_ext_medio"].plot(subplots=True, layout=(3, 1))

# result = mig_ext_df.to_json(orient="records")
# { gender, age, cost_of_mig, cost_as_debt (breakdown), occupation, origin, dest, success, method}
