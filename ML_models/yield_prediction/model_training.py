from sklearn.ensemble import RandomForestRegressor
from train_test_split import y_train,X_train

model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

print("Model Training Completed")