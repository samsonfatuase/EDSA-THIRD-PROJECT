import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import About from "./Components/About";
import Service from "./Components/Service";
import GettingStarted from "./Components/GettingStarted";
import SignUp from "./Components/SignUp";
import LearnMore from "./Components/LearnMore";
import Pronunciation from "./Components/Pronunciation";
import Science from "./Components/Science";
import Writing from "./Components/Writing";
import ThinkingSkills from "./Components/ThinkingSkills";
import Reading from "./Components/Reading";
import Spelling from "./Components/Spelling";
import Bundle from "./Components/Bundle";
import Search from "./Components/Search";

function App() {


  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/bundle" element={<Bundle />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/gettingstarted" element={<GettingStarted />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/pronunciation" element={<Pronunciation/>} />
        <Route path="/science" element={<Science/>} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/spelling" element={<Spelling />} />
        <Route path="/thinkingskills" element={<ThinkingSkills />} />
        <Route path="/writing" element={<Writing />} />
        
      </Routes>
    </div>
  );
}

export default App;




// import React from "react";
// import{Routes, Route, Link, Outlet, NavLink, Navigate} from 'react-router-dom';
// import Home from "./Components/Home";
// import AboutUs from "./Components/AboutUs";
// import Bundle from './Components/Bundle';
// import GettingStarted from './Components/GettingStarted'
// import Service from "./Components/Service";
// import SignUp from "./Components/SignUp";
// import Trial from "./Components/Trial";
// import Pronunciation from "./Components/Pages/Pronunciation";

// import './App.css'


// function App(){

//   return(
//     <>
//     <div >  
//          <nav id="Link">
//          <Link to ="/home" className = 'nav-item1'>Ekiti Virtual <br />
//             LEARNuING Hub</Link>
//          <Link to ="/aboutus" className = 'nav-item'>AboutUs</Link>
//          <Link to ="/search" className = 'nav-item1' >Search</Link>
//          <Link to ="/bundle" className = 'nav-item1' >Bundle</Link>
//          <Link to ="/service" className="nav-item">Service</Link>
//          <Link to ="/SignUp" className="nav-item">Sign Up</Link>
//          <Link to ="/Trial" className="nav-item">Start Free Trial</Link>
//          <Link to ="/gettingstarted" className="nav-item">Getting Started</Link>

//          </nav>

//         <Routes>
//          <Route  path="/home" element={<Home />} />
//          <Route  path="/aboutus" element={<AboutUs  />} />
//          <Route  path="/aboutus" element={<AboutUs  />} />
//          <Route  path="/bundle" element={<Bundle />} />
//          <Route  path="/service" element={<Service />} />
//          <Route  path="/signUp" element={<SignUp />} />
//          <Route  path="/trial" element={<Trial />} />
//          <Route  path="/gettingstarted" element={<GettingStarted />} />

//         </Routes>
//     </div>
//     <div>
//       <nav>
//       <Link to ="/pronunciation" className="nav-item">Pronunciation</Link>

//       </nav>
//       <Routes>
//       <Route  path="/pronunciation" element={<Pronunciation />} />

//       </Routes>
//     </div>


    
    

//     </>
    
//   )
  
// }

// export default App;


