from sklearn.model_selection import train_test_split
from data_loader import load_data

df = load_data()

print(df.columns)

X = df.drop("Yield", axis=1)
y = df["Yield"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

print("Train Test Split Completed")