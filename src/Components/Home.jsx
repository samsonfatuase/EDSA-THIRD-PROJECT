import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import './Home.css';



export default function Home() {
  return (
    <>
      <div id='t'>
      
        <p id='paragraph'>
          A BEST WAY TO LEARN
        </p>
        
        <p id='paragraph1'>
        Ekiti Virtual Learning Hub helps students to <br />
          develop their academic communication, <br />
          research and study skills
          <img src="Images/apple.jpg" className='image' alt="" />
        </p>
        
        <ul id='n' >
      <li>
          <NavLink to="/gettingstarted" id='M'>Getting Started</NavLink>
        </li>
        <li id='M'>
          <NavLink to="/learnmore" id='M'>Learn More</NavLink>
        </li>
        </ul>
        

        
{/*       
      {showSignInForm ? ( 
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            id='form1'
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            id='form2'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
        
      ) : (
        
        <button onClick={handleButtonClick}>Login</button>
      )} */}
      </div >
      <div  id='middle'>
        <div>
        <img src="Images/tttttt.jpg" className='image2' alt="" />
        <NavLink  to="/Reading" id='middle1'>Reading</NavLink>
        </div>

        <div> 
        <img src="Images/tt.jpg" className='image' alt="" />
        <NavLink to="/pronunciation" id='middle1'>Pronunciation</NavLink>
        </div>

        <div>
        <img src="Images/ttt.jpg" className='image' alt="" />
        <NavLink  to="/spellings" id='middle1' >Spelling</NavLink>
        
        
        
        </div>
         
        <div>
        <img src="Images/tttt.jpg" className='image' alt="" />
        <NavLink  to="/wrting" id='middle1' >Writing</NavLink>
        
        </div>

        <div>
        <img src="Images/tttttttt.jpg" className='image' alt="" />
        <NavLink  to="/science" id='middle1' >Simple Science</NavLink>
        
        </div>

        <div>
        <img src="Images/ttttt.jpg" className='image' alt="" />
        <NavLink  to="/thinkingskills" id='middle1' >Thinking Skills</NavLink>

        
        </div>
      </div>

      <div className='get'>
        <p>GET READY FOR THE JOURNEY</p>

      </div>
    </>
  );
}