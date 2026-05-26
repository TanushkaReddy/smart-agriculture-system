import pandas as pd
from pathlib import Path


def load_data():
    root = Path(__file__).resolve().parent.parent.parent
    csv_path = root / "Datasets" / "Fertilizer Prediction.csv"
    df = pd.read_csv(csv_path)
    df.columns = df.columns.str.strip()
    return df
    