from sklearn.preprocessing import StandardScaler
from encoding import X_train, X_test

scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

print("Preprocessing Completed")