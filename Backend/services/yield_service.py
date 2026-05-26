import pandas as pd
from models_loader import yield_model

def predict_yield(data):

    input_df = pd.DataFrame([{
        "Crop": data.crop,
        "Crop_Year": data.crop_year,
        "Season": data.season,
        "State": data.state,
        "Area": data.area,
        "Production": data.production,
        "Annual_Rainfall": data.rainfall,
        "Pesticide": data.pesticide,
        "Fertilizer": data.fertilizer
    }])

    prediction = yield_model.predict(input_df)

    return prediction[0]