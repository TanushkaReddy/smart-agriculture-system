import pandas as pd
from models_loader import fertilizer_model, fertilizer_scaler

def predict_fertilizer(data):
    input_df = pd.DataFrame([{
        "Temparature": data.temperature,
        "Humidity": data.humidity,
        "Moisture": data.moisture,
        "Soil Type": data.soil_type,
        "Crop Type": data.crop_type,
        "Nitrogen": data.nitrogen,
        "Potassium": data.potassium,
        "Phosphorous": data.phosphorus,
    }])
    if fertilizer_scaler is not None:
        input_data = fertilizer_scaler.transform(input_df)
    else:
        input_data = input_df.values
    return fertilizer_model.predict(input_data)[0]