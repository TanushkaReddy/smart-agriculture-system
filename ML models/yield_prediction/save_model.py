import joblib
from model_training import model

joblib.dump(model, "../saved_models/yield_model.pkl")

print("Model Saved Successfully")