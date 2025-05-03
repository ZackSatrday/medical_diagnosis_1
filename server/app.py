from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

# Load model and scaler
model = joblib.load("diabetes_model copy.pkl")
scaler = joblib.load("scaler.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        features = [
            float(data["pregnancies"]),
            float(data["glucose"]),
            float(data["bloodPressure"]),
            float(data["skinThickness"]),
            float(data["insulin"]),
            float(data["bmi"]),
            float(data["diabetesPedigreeFunction"]),
            float(data["age"]),
        ]

        # Apply same scaling as training
        scaled_features = scaler.transform([features])
        prediction = model.predict(scaled_features)[0]
        result = "Positive" if prediction == 1 else "Negative"
        return jsonify({"result": result})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
