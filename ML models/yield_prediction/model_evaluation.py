from sklearn.metrics import mean_absolute_error, r2_score
from model_training import model
from train_test_split import y_test,X_test,X_train,y_train

y_pred = model.predict(X_test)

print("Training R2:", model.score(X_train, y_train))
print("Testing R2:", model.score(X_test, y_test))