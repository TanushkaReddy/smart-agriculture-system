import joblib
from model_training import model
from preprocessing import scaler

# Save model and scaler inside saved_models folder
joblib.dump(model, "../saved_models/crop_model.pkl")
joblib.dump(scaler, "../saved_models/crop_scaler.pkl")

print("Model and scaler saved successfully")