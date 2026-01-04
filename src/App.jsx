import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Landing Page
import LandingPage from "./pages/LandingPage";
// Auth Pages

import "./App.css";

function App() {
  return (
    <Routes>
      {/* Landing Page - Default Route */}
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
