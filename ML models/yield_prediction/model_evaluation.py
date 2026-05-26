from sklearn.metrics import mean_absolute_error, r2_score
from model_training import model
from preprocessing import X_test_scaled
from train_test_split import y_test

y_pred = model.predict(X_test_scaled)

print("MAE:", mean_absolute_error(y_test, y_pred))
print("R2 Score:", r2_score(y_test, y_pred))