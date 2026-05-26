import pandas as pd

def load_data():
    df = pd.read_csv("cleaned_yield_data.csv")
    df.columns = df.columns.str.strip()
    return df