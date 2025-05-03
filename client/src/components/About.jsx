import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-200 flex justify-center items-center p-4 pt-20">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">
          About Daibetic-A
        </h1>
        
        <p className="text-gray-700">
          Daibetic-A is an AI-powered tool designed to help predict diabetes risk based on various 
          health parameters. Our model analyzes factors such as glucose levels, BMI, age, and other 
          important indicators to provide a preliminary assessment.
        </p>
        
        <p className="text-gray-700">
          This tool is for informational purposes only and does not replace professional medical advice. 
          Always consult with healthcare professionals for proper diagnosis and treatment.
        </p>
        
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-xl font-semibold hover:bg-blue-700 transition mr-4"
          >
            Back to Home
          </Link>
          <Link
            to="/diagnosis"
            className="inline-block bg-white text-blue-600 border border-blue-600 py-2 px-6 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Try Diagnosis
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About; 