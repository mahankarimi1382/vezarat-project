import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login/Login";
import Home from "./Pages/Main/Home/Home";
import UserSignUp from "./Pages/Auth/Signup/UserSignUp";
import { ToastContainer } from "react-toastify";
import Admin from "./Pages/Main/Admin/Admin";
import Admin2 from "./Pages/Main/Admin2/Admin2";
import Admin3 from "./Pages/Main/Admin3/Admin3";
import Admin4 from "./Pages/Main/Admin4/Admin4";
import Admin5 from "./Pages/Main/Admin5/Admin5";
import User1 from "./Pages/Main/User/User1/User1";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="UserSignUp" element={<UserSignUp />} />
          <Route path="Admin/runExam" element={<Admin />} />
          <Route path="Admin/createExam" element={<Admin2 />} />
          <Route path="Admin/CreateQuestion" element={<Admin3 />} />
          <Route path="Admin/CreateLicense" element={<Admin4 />} />
          <Route path="Admin/Accepters" element={<Admin5 />} />
          <Route path="User/jointoexam" element={<User1 />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
