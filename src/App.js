import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import Home from "./Pages/Home/Home";
import RequiredAuth from "./Pages/Authentication/RequiredAuth";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<RequiredAuth><Home /></RequiredAuth>} />
      </Routes>
    </div>
  );
}

export default App;
