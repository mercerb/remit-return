import pandas as pd
import numpy as np
from class_data_remap_main_table import prepare_main_dataset
from class_data_remap_mig_ext_roster import prepare_mig_ext_dataset, plot_cost_distribution
import json

mig_ext_df = prepare_mig_ext_dataset()
main_df = prepare_main_dataset()

full_df = pd.merge(mig_ext_df, main_df, on="rsp_id") # 879 records with remittances & migrations
# all together, we have 454 records for which we have a migrator with destination = USA
# who listed the cost to migrate and who matches up wiht a household receiving remittances.
# the dataset includes 105 records for people who listed a cost of migration who are not in the destination country
# 'unsuccessful' migrations with financial risk. 349 reside in the USA as of this survey time (4/2021)

# save to json 
full_df.to_json("class-data/migrants_to_US.json", orient="records")

# narrowing that down to 10 people who represent the summary statistics:
full_df.mig_ext_sex.value_counts() / len(full_df) # 73% men, 27% women -> 3 women + 7 men
full_df.mig_ext_age.describe() # average age is 30, most are in the 21 to 37 range
full_df.at_destination.value_counts() / len(full_df) # 77% in USA, 23% sent back -> 8 there + 2 sent back
full_df.country.value_counts() / len(full_df) # 46% from Guatemala (5), 39% from SLV (4), 15% from HND (1)

# save sample of 10 to json
gender_weights = {"Woman": 3, "Man": 7}
full_df["gender_weights"] = full_df["mig_ext_sex"].apply(lambda row: gender_weights[row])
sample_df = full_df.sample(n=10, weights="gender_weights", random_state=123)
print(sample_df[["mig_ext_sex", "mig_ext_age", "at_destination", "country"]])
sample_df.to_json("class-data/migrants_to_US_sample.json", orient="records")


'''
pseudo code for updating month-to-moth

every month, the migrant is paid $X. every month, they send back $Y remittances.
every month, the cost of migration is repaid by ($X - $Y) until it hits $0.
from there, every month, the amount entering the US is ($X - $Y).

/* for each person,
    values = []
    for i in range(24):
        date = new Date(today + i*months)
        remits_sent = remits_Sent
        mig_paydown = mig_cost - 
        */

def get_amt_to_cost_and_us(migrant, current_month):
    mig_cost = migrant["mig_cost_usd"]
    diff = migrant["occupation_salary"] - migrant["remesa_usd_sent_monthly"]
    months_to_breakeven = mig_cost / diff
    money_to_US = 0
    amt_mig_cost_paid = max(diff*current_month, mig_cost)
    if current_month >= months_to_breakeven:
        # already broke even
        money_to_US = diff*(current_month - months_to_breakeven)
    return amt_mig_cost_paid, money_to_US

'''
migrants = json.loads("class-data/migrants_to_US_sample.json")
for m in migrants:
    from datetime import date
    from dateutil.relativedelta import relativedelta

    today = date.today()
    values = []
    for month in range(24):
        curr_month = date.today() + relativedelta(months=month)
        remaining_cost, money_us, remittances = get_monthly_money_flow(m, curr_month)

def get_monthly_money_flow(migrant, months_elapsed):
    mig_cost = migrant["mig_cost_usd"]
    monthly_diff = migrant["occupation_salary"] - migrant["remesa_usd_sent_monthly"]
    remaining_mig_cost = max(mig_cost - months_elapsed*monthly_diff, 0)
    money_to_us = monthly_diff - remaining_mig_cost
    return remaining_mig_cost, money_to_us, migrant["remesa_usd_sent_monthly"]


# in some cases, there are multiple migrants from the same household
# TODO: identify these and divide the remittance level by the number of migrants from the household
# for now, focus on 1-1 relationships, which is the majority of cases 
# some examples..
# rsp id 2053, 4 people living in US
# rsp id 1358, 5 not living in US - mother and daughter tried together

# plot_cost_distribution(mig_ext_df) # sanity check plot (histogram of migration costs)

