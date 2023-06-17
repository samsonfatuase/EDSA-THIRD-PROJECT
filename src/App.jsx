import React from "react";
import{Routes, Route, Link, Outlet, NavLink, Navigate} from 'react-router-dom';
import Home from "./Components/Home";
import TaskForm from './Components/TaskForm'
import TaskItem from "./Components/TaskItem";
import TaskList from "./Components/TaskList";

import './App.css'


function App(){

  return(
    <div className="AppI">
      <header>
         <h1 id="myApp1">SAMSON FATUASE'S TASK</h1>
       </header>
      <nav id="Link">
      <Link to ="/home" className = 'nav-item1'>Home</Link>
      <Link to ="/taskform" className = 'nav-item'>TaskForm</Link>
      <Link to ="/tasklist" className = 'nav-item1' >TaskList</Link>
      <Link to ="/taskitem" className="nav-item">TaskItem</Link>
      </nav>

      <Routes>
      <Route  path="/home" element={<Home />} />
      <Route  path="/taskform" element={<TaskForm  />} />
      <Route  path="/tasklist" element={<TaskList />} />
      <Route  path="/taskitem" element={<TaskItem />} />
      </Routes>
      </div>
  )
}

export default App


