import joblib
from pathlib import Path
from model_training import model
from preprocessing import scaler

root = Path(__file__).resolve().parent.parent
save_dir = root / "saved_models"
save_dir.mkdir(parents=True, exist_ok=True)

joblib.dump(model, save_dir / "fertilizer_model.pkl")
joblib.dump(scaler, save_dir / "fertilizer_scaler.pkl")

print("Model and scaler saved successfully")