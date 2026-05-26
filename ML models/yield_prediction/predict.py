import joblib
import numpy as np

# Load model
model = joblib.load("../saved_models/yield_model.pkl")

# Sample Input
sample = np.array([[ 
    1,      # Crop (encoded)
    2020,   # Crop_Year
    0,      # Season (encoded)
    2,      # State (encoded)
    1000,   # Area
    5000,   # Production
    1200,   # Rainfall
    30,     # Pesticide
    40      # Fertilizer
]])

# Predict
prediction = model.predict(sample)

print("Predicted Crop:", prediction[0])





