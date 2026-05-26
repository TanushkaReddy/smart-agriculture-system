import joblib
import numpy as np

model = joblib.load("../saved_models/fertilizer_model.pkl")

# Temp, Humidity, Moisture, Soil Type, Crop Type, N, K, P
sample = np.array([[ 
    30, 70, 45,
    1, 2,
    40, 20, 10
]])
# Predict
prediction = model.predict(sample)

print("Predicted Crop:", prediction[0])