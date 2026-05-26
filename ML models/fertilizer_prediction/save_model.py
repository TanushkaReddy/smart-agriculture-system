import joblib
from pathlib import Path
from model_training import model

root = Path(__file__).resolve().parent.parent
save_dir = root / "saved_models"
save_dir.mkdir(parents=True, exist_ok=True)

joblib.dump(model, save_dir / "fertilizer_model.pkl")

print("Model saved successfully")