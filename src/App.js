import "./App.scss";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage/Homepage";
import Listings from "./pages/ListingsPage/ListingsPage";
import Post from "./pages/PostPage/PostPage";
import LoginPage from "./pages/AuthPages/LoginPage/LoginPage";
import SignUpPage from "./pages/AuthPages/SignUpPage/SignUpPage";
import ForgotPasswordPage from "./pages/AuthPages/ForgotPasswordPage/ForgotPasswordPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
