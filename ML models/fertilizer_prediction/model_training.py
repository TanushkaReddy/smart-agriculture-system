from sklearn.tree import DecisionTreeClassifier
from train_test_split import y_train,X_train

model = DecisionTreeClassifier()

model.fit(X_train, y_train)

print("Model Training Completed")
