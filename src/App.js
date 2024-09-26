// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbarhome from "./Components/Navbar/Navbar.js";
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';
import Expertise from './Components/Expertise/Expertise.js';
import Home from './Components/Home/Home.js';
import Work from './Components/Work/Work.js';

function App() {
  return (
    <Router>
     <Navbarhome/> 
     <Routes>
        {/* Define a route for the About page */}
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Expertise" element={<Expertise />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Work" element={<Work />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
