import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import UserSignUp from "./UserSignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="UserSignUp" element={<UserSignUp />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
