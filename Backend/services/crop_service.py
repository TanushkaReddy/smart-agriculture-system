from models_loader import crop_model, crop_scaler
import numpy as np

def predict_crop(data):
    input_data = np.array([[data.N, data.P, data.K,
                            data.temperature,
                            data.humidity,
                            data.ph,
                            data.rainfall]])
    if crop_scaler is not None:
        input_data = crop_scaler.transform(input_data)
    return crop_model.predict(input_data)[0]