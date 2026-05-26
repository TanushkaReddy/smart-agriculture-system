import pandas as pd

def load_data():
    df = pd.read_csv("../../Datasets/crop_yield.csv")
    df.columns = df.columns.str.strip()
    return df