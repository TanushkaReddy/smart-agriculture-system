from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report

from model_training import model
from preprocessing import X_test_scaled,X_train_scaled
from train_test_split import y_test,y_train

# Prediction
train_pred = model.predict(X_train_scaled)
test_pred = model.predict(X_test_scaled)

print("Train Accuracy:", accuracy_score(y_train, train_pred))
print("Test Accuracy:", accuracy_score(y_test, test_pred))

print(classification_report(y_test, test_pred))