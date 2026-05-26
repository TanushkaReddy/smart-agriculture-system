from sklearn.metrics import accuracy_score, classification_report
from model_training import model
from train_test_split import y_test,X_train,X_test,y_train

# Predictions
y_train_pred = model.predict(X_train)
y_test_pred = model.predict(X_test)
# Accuracy
train_acc = accuracy_score(y_train, y_train_pred)
test_acc = accuracy_score(y_test, y_test_pred)

print("Training Accuracy:", train_acc)
print("Testing Accuracy:", test_acc)