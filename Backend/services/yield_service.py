import pandas as pd
from models_loader import yield_model

def predict_yield(data):

    # FORCE EXACT ORDER (VERY IMPORTANT)
    columns = [
        "Crop",
        "Crop_Year",
        "Season",
        "State",
        "Area",
        "Production",
        "Annual_Rainfall",
        "Fertilizer",
        "Pesticide"
    ]

    input_df = pd.DataFrame([[ 
        data.crop,
        data.crop_year,
        data.season,
        data.state,
        data.area,
        data.production,
        data.rainfall,
        data.fertilizer,
        data.pesticide
    ]], columns=columns)

    prediction = yield_model.predict(input_df)

    return float(prediction[0])