"""
Helper functions to link survey answer codes
with actual text answers
"""
import pandas as pd
data_path = "class-data/dataset-1_central-american-survey"

# Load the mapping CSV file
lookup_df = pd.read_excel(
    f"{data_path}/look-up table.xlsx",
    sheet_name=["answer_lookup", "main_table", "mig_ext_roster", "hh_roster"],
)
answer_lookup = lookup_df["answer_lookup"]
answer_mapping = dict(
    zip(answer_lookup["name_mco"], answer_lookup["text_content"]))

def map_answers(answer_input, col):
    """
    For any given column, map the numbered answers in the survey data
    to the actual text meaning in the lookup table
    Multiple choice options go from "1 3 5" to "Answer1,Answer3,Answer5"

    :param: answer_input: the number(s) in the respondent's answer
    :param: col: the column/question to remap
    """
    answer_codes = str(answer_input).split()
    answer_meanings = []
    col = "moneda" if col == "mig_ext_cost_currency" else col
    for code in answer_codes:
        try:
            code = int(float(code))
        except:
            code = code
        answer_meanings.append(answer_mapping.get(f"{col}/{code}", str(code)))

    return ",".join(answer_meanings)

def currency_convert(amt, currency):
    """for given amount and currency,
    convert to USD using April 2021 exchange rate
    source: https://www.exchangerates.org.uk

    :param amt: money amount
    :param currency: currency
    """
    exchange_rate = {
        "Dollars": 1.0,
        "Quetzals": 7.7144,  # guatemalan
        "Lempiras": 24.0876  # honduran
    }
    # round final value 
    return int(float(amt) / exchange_rate[currency])
