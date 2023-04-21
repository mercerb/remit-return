import pandas as pd
import numpy as np
from class_data_remap_main_table import prepare_main_dataset
from class_data_remap_mig_ext_roster import prepare_mig_ext_dataset, plot_cost_distribution

mig_ext_df = prepare_mig_ext_dataset()
main_df = prepare_main_dataset()

full_df = pd.merge(mig_ext_df, main_df, on="rsp_id") # 879 records with remittances & migrations
# all together, we have 454 records for which we have a migrator with destination = USA
# who listed the cost to migrate and who matches up wiht a household receiving remittances.
# the dataset includes 105 records for people who listed a cost of migration who are not in the destination country
# 'unsuccessful' migrations with financial risk. 349 reside in the USA as of this survey time (4/2021)

# in some cases, there are multiple migrants from the same household
# TODO: identify these and divide the remittance level by the number of migrants from the household
# for now, focus on 1-1 relationships, which is the majority of cases 
# some examples..
# rsp id 2053, 4 people living in US
# rsp id 1358, 5 not living in US - mother and daughter tried together

# plot_cost_distribution(mig_ext_df) # sanity check plot (histogram of migration costs)

full_df.to_json("class-data/migrants_to_US.json", orient="records")
