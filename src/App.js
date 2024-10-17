// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Navbarhome from "./Components/Navbar/Navbar.js";
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';
import Home from './Components/Home/Home.js';
import Work from './Components/Work/Work.js';

function App() {
  return (
    <Router>
     <Navbarhome/>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Work" element={<Work/>} />
        <Route path="/Home" element={<Navigate to="/Home" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
