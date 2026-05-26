from sklearn.metrics import accuracy_score, classification_report
from model_training import model
from preprocessing import X_test_scaled
from train_test_split import y_test

y_pred = model.predict(X_test_scaled)

print("Accuracy:", accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred))