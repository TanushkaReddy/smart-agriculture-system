import numpy as np
from models_loader import fertilizer_model

FERTILIZER_LABELS = {
    0: "10-26-26",
    1: "14-35-14",
    2: "17-17-17",
    3: "20-20",
    4: "28-28",
    5: "DAP",
    6: "Urea"
}

def predict_fertilizer(data):
    try:
        input_data = np.array([[
            data.temperature,
            data.humidity,
            data.moisture,
            data.soil_type,
            data.crop_type,
            data.nitrogen,
            data.potassium,
            data.phosphorus
        ]])

        print("INPUT TO MODEL:", input_data)

        prediction = fertilizer_model.predict(input_data)
        fertilizer_name = FERTILIZER_LABELS.get(int(prediction[0]), "Unknown")  # ← only change

        print("PREDICTION:", fertilizer_name)

        return fertilizer_name

    except Exception as e:
        print("FERTILIZER ERROR:", str(e))
        raise e