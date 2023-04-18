import pandas as pd

data_path = "class-data/dataset-1_central-american-survey"

main_df = pd.read_csv(f"{data_path}/main_table.csv", index_col=0)
mig_ext_cols = [0, 1, 2, *range(21, 55), *range(57, 70), *range(94, 116)]
mig_ext_df = pd.read_csv(f"{data_path}/mig_ext_roster.csv", index_col=0, usecols=mig_ext_cols)
lookup_df = pd.read_excel(f"{data_path}/look-up table.xlsx", sheet_name=["answer_lookup", "main_table", "mig_ext_roster"])

def remap_mig_ext_df(mig_ext_df):
    mig_ext_df.mig_ext_sex = mig_ext_df.mig_ext_sex.map({1: 'Woman', 2: 'Man'})
    yn_mapping = {1: 'Yes', 2: 'No'}
    for attribute in mig_ext_df.columns:
        if attribute in lookup_df["mig_ext_roster"]["label"]:
            value = 0

# remap some values
remap_mig_ext_df(mig_ext_df)
result = df.to_json(orient="records")
# { gender, age, cost_of_mig, cost_as_debt (breakdown), occupation, origin, dest, success, method}

ignore_list = ['rsp_id','country','start','end','organizacion','survey_pid','departamento','municipio','neighborhood',
                  'tipo_familia_other','why_int_not_ext','mig_motivo_stay_other','covid_impact','comentarios_finales','saving_months']
for attribute in main_df.columns:
    if not attribute.startswith('_') and not ('/' in attribute) and not ('note' in attribute)and not ('other' in attribute) and not ('exp' in attribute) and not (attribute in ignore_list):
        plot_data(main_df, attribute, split_country = True)