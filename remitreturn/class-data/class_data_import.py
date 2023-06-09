import pandas as pd
import numpy as np
from class_data_remap_main_table import prepare_main_dataset
from class_data_remap_mig_ext_roster import prepare_mig_ext_dataset, plot_cost_distribution
import json

mig_ext_df = prepare_mig_ext_dataset()
main_df = prepare_main_dataset()
data_root = "remitreturn/class-data"

full_df = pd.merge(mig_ext_df, main_df, on="rsp_id") # 879 records with remittances & migrations
# all together, we have 454 records for which we have a migrator with destination = USA
# who listed the cost to migrate and who matches up wiht a household receiving remittances.
# the dataset includes 105 records for people who listed a cost of migration who are not in the destination country
# 'unsuccessful' migrations with financial risk. 349 reside in the USA as of this survey time (4/2021)

# explore mig cost
mig_ext_df.mig_cost_usd.describe()
non_zero_costs = mig_ext_df[mig_ext_df.mig_cost_usd >= 1]
non_zero_costs.mig_cost_usd.describe()
                                
# save to json 
full_df.to_json(f"{data_root}/migrants_to_US.json", orient="records")

# narrowing that down to 10 people who represent the summary statistics:
full_df.mig_ext_sex.value_counts() / len(full_df) # 73% men, 27% women -> 3 women + 7 men
full_df.mig_ext_age.describe() # average age is 30, most are in the 21 to 37 range
full_df.at_destination.value_counts() / len(full_df) # 77% in USA, 23% sent back -> 8 there + 2 sent back
full_df.country.value_counts() / len(full_df) # 46% from Guatemala (5), 39% from SLV (4), 15% from HND (1)

# save sample of 10 to json
gender_weights = {"Woman": 3, "Man": 7}
full_df["gender_weights"] = full_df["mig_ext_sex"].apply(lambda row: gender_weights[row])
filtered = full_df.loc[np.where((full_df["mig_cost_usd"] > 1) & (pd.notna(full_df["remesa_usd_sent_monthly"])))]
sample_df = filtered.sample(n=10, weights="gender_weights", random_state=124)
print(sample_df[["mig_ext_sex", "mig_ext_age", "at_destination", "mig_cost_usd", "country"]])
sample_df.to_json(f"{data_root}/migrants_to_US_sample.json", orient="records")

# calculate money flows for each migrant
def get_monthly_money_flow(migrant, months_elapsed):
    if not migrant["at_destination"]:
        return migrant["mig_cost_usd"], 0, 0
    
    multiplier = 0.92 if ("irregular" in migrant["mig_ext_medio"].lower()) else 1.0
    monthly_salary = round(multiplier*(migrant["occupation_salary"]/12))
    mig_cost = migrant["mig_cost_usd"]
    monthly_diff = max(monthly_salary - migrant["remesa_usd_sent_monthly"], 0)
    remaining_mig_cost = max(mig_cost - months_elapsed*monthly_diff, 0)
    money_to_us = max(monthly_diff - remaining_mig_cost, 0)
    return remaining_mig_cost, money_to_us, migrant["remesa_usd_sent_monthly"]


def get_money_time_data(months, sample):
    # load migrants from sample file (n=10)
    file_suffix = "_sample.json" if sample else ".json"
    with open(f"{data_root}/migrants_to_US{file_suffix}", 'r') as data_file:
        json_data = data_file.read()
    migrants = json.loads(json_data)

    data = []
    for m in migrants:
        values = []
        for month in range(months):
            if (m["remesa_usd_sent_monthly"] is None or m["mig_cost_usd"] is None):
                continue
            remaining, money_us, remit = get_monthly_money_flow(m, month)
            vals = {"month": month, "mig_cost_left": remaining, "remit": remit, "money_us": money_us}
            values.append(vals)

        data.append({"migrant_rsp_id": m["rsp_id"], "values": values})
    
    # save to file
    with open(f'{data_root}/money_over_time{file_suffix}', 'w') as f:
        json.dump(data, f)

get_money_time_data(months=16, sample=False)


# NB: in some cases, there are multiple migrants from the same household
# for now, focus on 1-1 relationships, which is the majority of cases 
# some examples..
# rsp id 2053, 4 people living in US
# rsp id 1358, 5 not living in US - mother and daughter tried together

# plot_cost_distribution(mig_ext_df) # sanity check plot (histogram of migration costs)