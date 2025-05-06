import { useState } from "react";
import FormInput from "./FormInput";
import ResultCard from "./ResultCard";

const UserForm = () => {
  const [user, setUser] = useState({ name: "", email: "", country: "" });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  const handleUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    setStep(1);
  };

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-blue-50 to-blue-200 items-center justify-center">
      {step === 0 && (
        <form onSubmit={handleUserSubmit} className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Diagnosis Result</h2>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Name</label>
            <input type="text" name="name" value={user.name} onChange={handleUserChange} required className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input type="email" name="email" value={user.email} onChange={handleUserChange} required className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Country</label>
            <input type="text" name="country" value={user.country} onChange={handleUserChange} required className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition">Continue</button>
        </form>
      )}
      {step === 1 && !result && (
        <FormInput setResult={setResult} loading={loading} setLoading={setLoading} />
      )}
      {result && (
        <ResultCard result={result} user={user} onBack={() => { setResult(null); setStep(0); }} />
      )}
    </div>
  );
};

export default UserForm;
