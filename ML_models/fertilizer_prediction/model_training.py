from sklearn.tree import DecisionTreeClassifier
from encoding import X_train, y_train

model = DecisionTreeClassifier()

model.fit(X_train, y_train)

print("Model Training Completed")
