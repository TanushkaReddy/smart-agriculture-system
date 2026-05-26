import joblib
from model_training import model

joblib.dump(model, "../saved_models/yield_model.pkl",compress=3)

print("Model Saved Successfully")