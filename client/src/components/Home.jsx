import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-200 flex justify-center items-center p-4 pt-20">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-6 text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">
          Welcome to Daibetic-A
        </h1>
        <p className="text-gray-700 mb-6">
          A diabetes diagnosis tool that helps predict your risk based on health parameters.
        </p>
        <div className="flex flex-col gap-4">
          <Link
            to="/diagnosis"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Start Diagnosis
          </Link>
          <Link
            to="/about"
            className="w-full bg-white text-blue-600 border border-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 