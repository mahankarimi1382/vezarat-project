import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login/Login";
import Home from "./Pages/Main/Home/Home";
import UserSignUp from "./Pages/Auth/Signup/UserSignUp";
import { ToastContainer } from "react-toastify";
import Admin from "./Pages/Main/Admin/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="UserSignUp" element={<UserSignUp />} />
          <Route path="Admin" element={<Admin />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
