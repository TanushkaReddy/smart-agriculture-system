from sklearn.ensemble import RandomForestClassifier
from encoding import X_train, y_train

model = RandomForestClassifier()

model.fit(X_train, y_train)

print("Model Training Completed")
