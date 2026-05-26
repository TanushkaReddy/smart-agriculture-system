from sklearn.ensemble import RandomForestRegressor
from preprocessing import X_train_scaled
from train_test_split import y_train

model = RandomForestRegressor(
    n_estimators=20,
    max_depth=6,
    random_state=42,
    n_jobs=-1
)

model.fit(X_train_scaled, y_train)

print("Model Training Completed")