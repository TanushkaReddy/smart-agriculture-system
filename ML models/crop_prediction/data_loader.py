import pandas as pd

def load_data():

    df = pd.read_csv("../../datasets/crop_recommendation.csv")

    return df