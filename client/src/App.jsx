import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import UserForm from "./components/UserForm";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen overflow-hidden relative">
        <header className="absolute top-0 left-0 right-0 z-10 p-4 bg-blue-50/70 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-800">
              DAIBETIC - Ai
            </Link>
            <nav className="space-x-6">
              <Link
                to="/"
                className="text-blue-800 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link
                to="/diagnosis"
                className="text-blue-800 hover:text-blue-600 font-medium">
                Diagnosis
              </Link>
              <Link
                to="/about"
                className="text-blue-800 hover:text-blue-600 font-medium">
                About
              </Link>
            </nav>
          </div>
        </header>
        <main className="h-full w-full overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diagnosis" element={<UserForm />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
