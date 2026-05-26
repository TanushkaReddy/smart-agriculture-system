from models_loader import yield_model
import numpy as np

def predict_yield(data):

    input_data = np.array([[ 
        data.crop,
        data.crop_year,
        data.season,
        data.state,
        data.area,
        data.production,
        data.rainfall,
        data.pesticide,
        data.fertilizer
    ]])

    prediction = yield_model.predict(input_data)

    return prediction[0]