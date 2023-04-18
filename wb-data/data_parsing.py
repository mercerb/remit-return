import pandas as pd
import json

'''
Parse raw CSV files from the World Bank for each Northern Triangle country.
Generates a JSON file for each country containing the following data of interest
for each year in the range of 1960 to 2021:

SM.POP.NETM -> net migration (negative is people migrating out)
BX.TRF.PWKR.CD.DT -> personal remittances, received (current US$) -> this is the one of interest
BM.TRF.PWKR.CD.DT -> personal remittances, paid (current US$), made out of the country

From the IMF:
"Personal transfers consist of all current transfers in cash or in kind made, or
received, by resident households to or from other non-resident households"
BX: cash received by resident households from non-resident households
resident = in SLV/GTM/HND
'''

csv_SLV = "world_bank_el_salvador.csv"
csv_GTM = "world_bank_guatemala.csv"
csv_HND = "world_bank_honduras.csv"


def get_number(value):
    '''
    Helper function to get actual number values from Pandas series objects.
    '''
    if pd.isnull(value.iat[0]):
        return None
    else:
        return float(value)


def normalize_remits_received(net_migrants, remits_received):
    '''
    "Normalize" remittances received by dividing it by migrations out of the country that year
    It's not perfect, but it's roughly money sent back per migrant
    '''
    if net_migrants is not None and remits_received is not None and net_migrants < 0:
        # negative migrants -> people leaving the country
        return -1*float(remits_received / net_migrants)
    else:
        return None


def get_data_list(country_csv):
    '''
    Parse the World Bank CSV file year by year to pull out 
    information of interest.
    Returns a list of objects, one for each year.
    '''
    filepath = f"remit-return/wb-data/{country_csv}"
    data = pd.read_csv(filepath, skiprows=4)
    country_datalist = []

    for year in range(1960, 2022):
        yr = data[["Indicator Code", str(year)]]
        net_migrants = get_number(yr.loc[yr["Indicator Code"]
                                         == "SM.POP.NETM"][str(year)])
        remits_made = get_number(yr.loc[yr["Indicator Code"] ==
                                        "BM.TRF.PWKR.CD.DT"][str(year)])
        remits_received = get_number(yr.loc[yr["Indicator Code"]
                                            == "BX.TRF.PWKR.CD.DT"][str(year)])
        remits_received_pp = normalize_remits_received(
            net_migrants, remits_received)

        country_datalist.append({
            "Year": year,
            "NetMigration": net_migrants,
            "RemittancesMade": remits_made,
            "RemittancesReceived": remits_received,
            "RemittancesReceivedPerMigrant": remits_received_pp,
        })

    return country_datalist


def filter_non_null(lst):
    '''
    The visualization does not do well with null values. 
    Filter them out with this helper function.
    '''
    return [obj for obj in lst if all(val is not None for val in obj.values())]


def prepare_country_files():
    '''
    For each country, open the raw World Bank csv file,
    parse to get the data we want in the format that we want it in,
    and write the result to a JSON file in the remitreturn/src/data/ location.
    '''
    for country in ["el_salvador", "guatemala", "honduras"]:
        csv_filename = f"world_bank_{country}.csv"
        data_list = get_data_list(csv_filename)
        data_list = filter_non_null(data_list)
        json_object = json.dumps(data_list, indent=4)
        # Writing to sample.json
        output_file = f"remit-return/remitreturn/src/data/{country}_remittances.json"
        with open(output_file, "w") as outfile:
            outfile.write(json_object)


def merge_countries():
    '''
    Merge the 3 country JSON files into one JSON file.
    Save it to the same remitreturn/src/data/ location.
    '''
    all_data = []
    country_name = {"el_salvador": "El Salvador",
                    "guatemala": "Guatemala", "honduras": "Honduras"}
    for country in ["el_salvador", "guatemala", "honduras"]:
        json_file = f"remit-return/remitreturn/src/data/{country}_remittances.json"
        with open(json_file, "r") as infile:
            data = json.load(infile)
            for d in data:
                d.update({"Country": country_name.get(country)})
            all_data.extend(data)

    json_object = json.dumps(all_data, indent=4)
    output_file = f"remit-return/remitreturn/src/data/all_remittances.json"
    with open(output_file, "w") as outfile:
        outfile.write(json_object)


# prepare_country_files()
merge_countries()
