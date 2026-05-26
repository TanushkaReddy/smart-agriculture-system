from sklearn.preprocessing import StandardScaler
from train_test_split import X_train, X_test

# Scaling
scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)

X_test_scaled = scaler.transform(X_test)

print("Preprocessing Completed")