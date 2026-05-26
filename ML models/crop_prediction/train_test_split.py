from sklearn.model_selection import train_test_split
from data_loader import load_data

# Load dataset
df = load_data()

# Features
X = df.drop("label", axis=1)

# Target
y = df["label"]

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

print("Train Test Split Completed")
print("X_train shape:", X_train.shape)
print("X_test shape:", X_test.shape)