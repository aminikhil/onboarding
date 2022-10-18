import { Routes, Route } from "react-router-dom";
import "./App.css";
import Onboarding from "./pages/onboarding/Onboarding";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
      </Routes>
    </div>
  );
}

export default App;
