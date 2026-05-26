from sklearn.preprocessing import LabelEncoder
from train_test_split import X_train, X_test

X_train = X_train.copy()
X_test = X_test.copy()

categorical_cols = ["Soil Type", "Crop Type"]

encoders = {}

for col in categorical_cols:
    le = LabelEncoder()
    X_train[col] = le.fit_transform(X_train[col])
    X_test[col] = le.transform(X_test[col])
    encoders[col] = le

print("Encoding Completed")