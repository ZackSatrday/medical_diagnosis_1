# 🩺 Diabetes Diagnosis Web App

A full-stack machine learning web application that predicts the likelihood of diabetes based on user inputs — using a trained SVM classifier. Built with **React**, **Flask**, and **scikit-learn**, and deployed via **Netlify** (frontend) and **Render** (backend).

---

## 🚀 Live Demo

- 🔗 Frontend: [https://your-netlify-url.netlify.app](https://your-netlify-url.netlify.app)
- 🔗 Backend API: [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)

---

## 🧠 Machine Learning

- Dataset: Pima Indians Diabetes Dataset (768 samples)
- Model: `SVM (Support Vector Machine)` with linear kernel
- Preprocessing: StandardScaler
- Accuracy: ~78% on test data

---

## 🖥️ Tech Stack

### Frontend
- React (Vite)
- Axios (API calls)
- Tailwind CSS (styling)

### Backend
- Flask (Python)
- Flask-CORS
- scikit-learn
- Joblib (model serialization)

---

## 🔧 Features

- 🧮 Takes 8 input features (Pregnancies, Glucose, BMI, etc.)
- 🧠 Sends input to ML model for real-time prediction
- 📈 Displays result: "Positive" or "Negative"
- 🌐 Deployed frontend + backend for live access

---

## 📁 Project Structure

├── client/ # React frontend
│ └── src/
├── server/ # Flask backend
│ ├── app.py
│ ├── diabetes_model.pkl
│ ├── scaler.pkl
│ └── requirements.txt


---

## 💡 How It Works

1. User fills out a health form
2. React sends a POST request to the Flask API
3. Backend loads the pre-trained model and scaler
4. Data is scaled and passed to the model
5. Prediction is returned and displayed

---

## 🛠️ Setup Instructions

### Backend (Flask)
```bash
cd server
pip install -r requirements.txt
python app.py
```

### Frontend (React)
```bash
Copy
Edit
cd client
npm install
npm run dev
```

### Deployment
Backend: Deployed on Render

Frontend: Deployed on Netlify

Dataset
Pima Indians Diabetes Dataset

✨ Author
Built by Susahnt Kumar
Inspired by real-world healthcare challenges.
