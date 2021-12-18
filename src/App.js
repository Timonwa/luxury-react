import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signup" element={< />} /> */}
      </Routes>
    </div>
  );
}

export default App;
