import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import UserHome from './components/User/UserHome';
import AdminHome from "./components/Admin/AdminHome";
import SignUpModal from "./components/SignUpModal";
import Ville from "./components/Admin/Ville";
import Zone from  "./components/Admin/Zone";
import Restaurant from  "./components/Admin/Restaurant";
function App() {
  return (

    <div class="container-fuid" className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/user-page" element={<UserHome />} />
        <Route path="/admin-page" element={<AdminHome />} />
        <Route path="/register" element={<SignUpModal />} />
        <Route path="/ville" element={<Ville />} />
        <Route path="/Zone" element={<Zone />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        





      </Routes>
    </div>
  );
}

export default App;
