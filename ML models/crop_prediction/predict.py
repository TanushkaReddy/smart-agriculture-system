import joblib
import numpy as np

# Load model
model = joblib.load("../saved_models/crop_model.pkl")

# Sample Input
sample_data = np.array([[90, 42, 43, 20.8, 82, 6.5, 202]])

# Predict
prediction = model.predict(sample_data)

print("Predicted Crop:", prediction[0])