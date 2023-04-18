import pandas as pd
data_path = "class-data/dataset-1_central-american-survey"

# Load the survey responses CSV file
mig_ext_cols = [0, 1, 2, *range(21, 55), *range(57, 70), *range(94, 116)]
mig_ext_df = pd.read_csv(f"{data_path}/mig_ext_roster.csv", index_col=0, usecols=mig_ext_cols)

# Load the mapping CSV file
lookup_df = pd.read_excel(f"{data_path}/look-up table.xlsx", sheet_name=["answer_lookup", "main_table", "mig_ext_roster"])
answer_lookup = lookup_df["answer_lookup"]
answer_mapping = dict(zip(answer_lookup['name_mco'], answer_lookup['text_content']))

# Function to map the answer codes to their meanings
def map_answers(answer_str, col):
    answer_codes = answer_str.split() # sometimes there are multiple choices
    
    # Map each code to its meaning using the dictionary, accounting for '/'
    answer_meanings = [answer_mapping.get(f'{col}/{code}', code) for code in answer_codes]
    
    return ','.join(answer_meanings)

for col in ["mig_ext_acompany", "mig_ext_medio", "mig_ext_finance", "mig_ext_country", "mig_ext_llego"]:
    mig_ext_df[col] = mig_ext_df[col].apply(map_answers, args=(col,))

# Display the updated DataFrame
print(mig_ext_df)
