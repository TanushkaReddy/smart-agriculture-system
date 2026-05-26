import joblib
import os

# Get absolute backend root (stable on Render)
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# Avoid spaces in runtime paths
MODEL_DIR = os.path.join(BASE_DIR, "ML_models", "saved_models")

print("MODEL DIR:", MODEL_DIR)

crop_model = joblib.load(os.path.join(MODEL_DIR, "crop_model.pkl"))
fertilizer_model = joblib.load(os.path.join(MODEL_DIR, "fertilizer_model.pkl"))
yield_model = joblib.load(os.path.join(MODEL_DIR, "yield_model.pkl"))

# optional scaler
try:
    crop_scaler = joblib.load(os.path.join(MODEL_DIR, "crop_scaler.pkl"))
except:
    crop_scaler = None

print("All models loaded successfully!")