import pandas as pd

def load_data():

    df = pd.read_csv("cleaned_crop_recommendation.csv")

    return df