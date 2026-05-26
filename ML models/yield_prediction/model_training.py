from sklearn.ensemble import RandomForestRegressor
from preprocessing import X_train_scaled
from train_test_split import y_train

model = RandomForestRegressor()

model.fit(X_train_scaled, y_train)

print("Model Training Completed")