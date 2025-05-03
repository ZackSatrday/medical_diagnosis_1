import { useState } from "react";
import axios from "axios";

const FormInput = () => {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPedigreeFunction: "",
    age: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://se-project-4jpf.onrender.com/predict", formData);
      setResult(res.data.result);
    } catch (err) {
      console.error(err);
      setResult("Error. Please try again.");
    }
    setLoading(false);
  };

  // Split fields into two columns
  const leftFields = [
    { name: "pregnancies", label: "Pregnancies" },
    { name: "glucose", label: "Glucose Level" },
    { name: "bloodPressure", label: "Blood Pressure" }, 
    { name: "skinThickness", label: "Skin Thickness" }
  ];
  
  const rightFields = [
    { name: "insulin", label: "Insulin" },
    { name: "bmi", label: "BMI" },
    { name: "diabetesPedigreeFunction", label: "Diabetes Pedigree Function" },
    { name: "age", label: "Age" }
  ];

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-200 flex justify-center items-center p-4 pt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-4xl overflow-auto max-h-[calc(100vh-6rem)]"
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          Diabetes Diagnosis Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            {leftFields.map(field => (
              <div key={field.name} className="mb-4">
                <label className="block font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                <input
                  type="number"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  step="any"
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightFields.map(field => (
              <div key={field.name} className="mb-4">
                <label className="block font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                <input
                  type="number"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  step="any"
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Diagnosing..." : "Submit"}
          </button>

          {result && (
            <div className="mt-4 text-center text-lg font-medium text-blue-700">
              Diagnosis Result: <span className="font-bold">{result}</span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormInput;
