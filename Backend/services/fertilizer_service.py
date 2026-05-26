import pandas as pd
from models_loader import fertilizer_model

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

    prediction = fertilizer_model.predict(input_df)

    # 🔥 convert encoded value → real name
    fertilizer_name = fertilizer_model.inverse_transform([prediction[0]])

    return fertilizer_name[0]