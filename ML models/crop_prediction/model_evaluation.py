from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report

from model_training import model
from preprocessing import X_test_scaled
from train_test_split import y_test

# Prediction
y_pred = model.predict(X_test_scaled)

# Accuracy
accuracy = accuracy_score(y_test, y_pred)

print("Accuracy:", accuracy)

# Classification Report
print(classification_report(y_test, y_pred))