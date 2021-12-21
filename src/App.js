import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
