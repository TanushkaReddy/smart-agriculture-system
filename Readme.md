Smart Agriculture System
========================

Project Overview
----------------
This project is a smart agriculture support system that uses machine learning and a modern web interface to help farmers make better decisions.

It has three main prediction features:
- Crop recommendation: suggests the best crop based on soil nutrients, weather, and environmental conditions.
- Fertilizer recommendation: recommends the right fertilizer formula or type based on temperature, humidity, soil moisture, soil type, crop type, and N-P-K levels.
- Yield prediction: estimates expected crop yield using historical and input features such as crop, season, area, rainfall, pesticide use, and fertilizer.

Architecture
------------
The project is split into three main parts:
1. `Backend/` - FastAPI backend that exposes prediction endpoints and loads trained ML models.
2. `Frontend/` - React + Vite user interface for entering farm inputs and displaying predictions.
3. `ML models/` - Machine learning training code, preprocessing, and saved model files for each prediction task.

Backend Details
---------------
- `Backend/app.py` configures the FastAPI app and routes.
- `Backend/routes/` contains route modules for crop, fertilizer, and yield prediction.
- `Backend/services/` contains service logic that builds model inputs and calls the loaded models.
- `Backend/schemas/` defines Pydantic request schemas for validation.
- `Backend/models_loader.py` loads the saved ML models and any necessary scalers.

Machine Learning Details
------------------------
Each ML task has its own folder under `ML models/`:
- `crop_prediction/`
- `fertilizer_prediction/`
- `yield_prediction/`

Inside each folder:
- `data_loader.py` loads the dataset.
- `train_test_split.py` splits the data into training and test sets.
- `encoding.py` encodes categorical features.
- `preprocessing.py` scales numeric features.
- `model_training.py` trains a model.
- `save_model.py` saves the trained model and scaler for deployment.
- `predict.py` contains a simple local prediction example.

Data
----
Datasets used in this project are stored in the `Datasets/` folder:
- `Crop_recommendation.csv`
- `Fertilizer Prediction.csv`
- `crop_yield.csv`

Current Focus
-------------
The current project work is focused on making the fertilizer and yield prediction flows correct and consistent with their training pipelines.
This includes ensuring the backend applies the same preprocessing and scaling as was used during model training.

How it Works
-------------
1. User enters values in the frontend form for crop, soil, and weather inputs.
2. The frontend sends a JSON request to the FastAPI backend.
3. The backend validates the request, applies preprocessing, and passes the values to the loaded ML model.
4. The model returns a prediction, and the backend sends it back to the UI.

Usage
-----
- Run the backend with `uvicorn Backend.app:app --reload`.
- Run the frontend with `npm install` and `npm run dev` inside `Frontend/`.
- Use the web interface to test crop, fertilizer, and yield predictions.
