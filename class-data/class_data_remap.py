import pandas as pd

data_path = "class-data/dataset-1_central-american-survey"

# Load the survey responses CSV file
mig_ext_cols = [0, 1, 2, *range(21, 55), *range(57, 70), *range(94, 116)]
mig_ext_df = pd.read_csv(
    f"{data_path}/mig_ext_roster.csv", index_col=0, usecols=mig_ext_cols
)

# Load the mapping CSV file
lookup_df = pd.read_excel(
    f"{data_path}/look-up table.xlsx",
    sheet_name=["answer_lookup", "main_table", "mig_ext_roster"],
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
    answer_meanings = [
        answer_mapping.get(f"{col}/{code}", code) for code in answer_codes
    ]
    if col == "mig_ext_cost_currency":
        code = answer_codes[0]
        answer_meanings = ["nan"] if code == "nan" else [answer_mapping.get(
            f"moneda/{int(float(code))}", code)]
    return ",".join(answer_meanings)


def calculate_mig_cost_dist(row):
    dist_fraction = "N/A"
    if row["mig_ext_cost_dist_awareness"] == 1:
        dist_fraction = {
            "intermediaries": row["mig_ext_cost_intermediaries"],
            "transportation": row["mig_ext_cost_transportation"],
            "subsistence": row["mig_ext_cost_subsistence"],
            "other": row["mig_ext_cost_other"]}
    return dist_fraction


def calculate_mig_cost(row):
    # average from April 2021
    # source: https://www.exchangerates.org.uk
    # divide by the exchange rate to get dollars
    exchange_rate = {
        "Dollars": 1.0,
        "Quetzals": 7.7144,  # guatemalan
        "Lempiras": 24.0876  # honduran
    }
    cost_usd = "N/A"
    if row["mig_ext_cost_awareness"] == 1:
        curr = row["mig_ext_cost_currency"]
        cost_usd = float(row["mig_ext_cost_total"]) / exchange_rate[curr]
    return int(cost_usd) # round
