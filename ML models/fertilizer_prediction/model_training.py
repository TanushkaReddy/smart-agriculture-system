from sklearn.ensemble import RandomForestClassifier
from preprocessing import X_train_scaled
from train_test_split import y_train

model = RandomForestClassifier()

model.fit(X_train_scaled, y_train)

print("Model Training Completed")