import joblib
import os

# Project root folder
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Correct folder name with SPACE
MODEL_PATH = os.path.join(BASE_DIR, "ML models", "saved_models")

print("MODEL PATH:", MODEL_PATH)

crop_model = joblib.load(os.path.join(MODEL_PATH, "crop_model.pkl"))
try:
    crop_scaler = joblib.load(os.path.join(MODEL_PATH, "crop_scaler.pkl"))
except FileNotFoundError:
    crop_scaler = None
    print("Warning: crop_scaler.pkl not found. Crop prediction will use raw input values.")

fertilizer_model = joblib.load(os.path.join(MODEL_PATH, "fertilizer_model.pkl"))
try:
    fertilizer_scaler = joblib.load(os.path.join(MODEL_PATH, "fertilizer_scaler.pkl"))
except FileNotFoundError:
    fertilizer_scaler = None
    print("Warning: fertilizer_scaler.pkl not found. Fertilizer prediction will use raw input values.")

yield_model = joblib.load(os.path.join(MODEL_PATH, "yield_model.pkl"))

print("All models loaded successfully!")