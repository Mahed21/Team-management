import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import Home from "./Pages/Home/Home";

import Header from "./Pages/Header/Header";
import AuthProvider from "./Pages/Context/AuthProvider";
import Footer from "./Pages/Footer/Footer";
import RegisterTeam from "./Pages/Home/RegisterTeam/RegisterTeam";
import TeamDetails from "./Pages/Home/Active Team/TeamDetails";
import TeamMember from "./Pages/Home/Active Team/TeamMember";
import UpdateProfile from "./Pages/Home/UpdateProfile/UpdateProfile";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerTeam" element={<RegisterTeam />} />
          <Route path="/teamDetails" element={<TeamDetails />} />
          <Route path="/teamMember" element={<TeamMember />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
