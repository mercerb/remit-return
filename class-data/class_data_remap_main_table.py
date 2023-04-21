"""
Helper functions to parse "main_table.csv" specificially
"""
import pandas as pd
from class_data_lookup_utils import map_answers, currency_convert

data_path = "class-data/dataset-1_central-american-survey"
main_cols = [0, 149, 151, *range(169, 175), *range(176, 179), *range(197, 214), *range(439, 450)]

def prepare_main_dataset() -> pd.DataFrame:
    """ 
    Import data from main_table_roster.csv as dataframe,
    then modify to include the data the way we want it 
    
    :return: updated main_table_df dataframe
    """
    main_df = pd.read_csv(f"{data_path}/main_table.csv", index_col=0, usecols=main_cols)

    # remap answer codes to real values
    yn_map = {1: "Yes", 2: "No", 3: "No answer"}
    main_df.remittances_yn = main_df.remittances_yn.map(yn_map)
    main_df.migrated_yn = main_df.migrated_yn.map(yn_map)

    # use lookup table to get the actual answers
    remesa_cols = [f"remesa_efectivo_uso_pct/{i}" for i in range(1,17)] 
    cols = ["remesa_parentesco", "remesa_remit_ocupacion", "remesa_aware", 'remesa_years', 'remesa_months',
       'remesa_covid', 'remesa_amount_consent', 'remesa_currency', "remesa_freq",
       'remesa_amount', 'note_remesas_parity', *remesa_cols]
    for col in cols:
        main_df[col] = main_df[col].apply(map_answers, args=(col,))

    # get remesa amt as USD
    main_df["remesa_amount_usd"] = main_df.apply(lambda row: calculate_remesa(row), axis=1).astype("Int64")

    main_df.rename(columns={"remesa_parentesco": "relationship_to_sender", "migrated_yn": "family_migrated"})

    # filter out anyone who didn't give remittances info
    main_df = main_df[main_df.remittances_yn == "Yes"]

    return main_df

def calculate_remesa(row) -> int:
    """for given remesa amount and currency,
    convert to USD 

    :param row: row in csv file
    :return: cost converted to USD
    """
    try:
        return currency_convert(row["remesa_amount"], row["remesa_currency"])
    except KeyError:
        return None
