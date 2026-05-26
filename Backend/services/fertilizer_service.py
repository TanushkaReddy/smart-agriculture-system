import pandas as pd
from models_loader import fertilizer_model

def predict_fertilizer(data):
    # Create input dataframe
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

    # IMPORTANT: RandomForest / DecisionTree DO NOT need transform
    input_data = input_df.values

    # Predict
    prediction = fertilizer_model.predict(input_data)[0]

    return prediction