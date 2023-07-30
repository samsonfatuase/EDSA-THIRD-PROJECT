import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./SignUp.css";
import { json } from 'react-router-dom';
// import axios from "axios"

export default function SignUp() {
    const navigate = useNavigate();
    const [fullname, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    

    
    const handleSignUp = (e) => {
      e.preventDefault();

      if (!fullname || !email || !password || !confirmpassword) {
        setError("Please fill in all the required fields.");
        return;
      }
  
      if (password !== confirmpassword) {
        setError('Passwords do not match!');
        return;
      }
      const user = {
        fullname,
        email,
        password,
      };
  
      // Save the user data to localStorage
      localStorage.setItem('user', JSON.stringify(user));
              navigate("/gettingstarted");
        
             
  
      // console.log(localStorage);
  
      // Optional: Redirect to another page after successful sign up
      // window.location.href = '/login';
    };
    // const handlesignUp = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const response = await axios.post("http://localhost:3000/api/register", {
    //         fullname,
    //         password,
    //         email,
    //         confirmpassword,
    //       });
    //       if (response.data.error) {
    //         setError(response.data.error);
    //         return;
    //       }
    //       navigate("/login");
    
    //     } catch (error) {
    //       throw error;
    //     }
    // };

    return (
      <div id='sign'>
          <p id='register'> Register and get started for FREE!!!</p>
          <p id='re'>EKITI STATE <br/>
          VIRTUAL LEARNING HUB</p>
          <form onSubmit={handleSignUp} id='form'>
              <input  

                  type="text"
                  placeholder="Full Name"
                  value={fullname}
                  id='form1'
                  onChange={(e) => setfullName(e.target.value)}
              />  
              <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  id='form2'
                  onChange={(e) => setEmail(e.target.value)}
              />
              <input
                  type="password"
                  placeholder="Password"
                  id='form3'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              <input
                  type="confirmpassword"
                  placeholder="confirm Password"
                  value={confirmpassword}
                  id='form4'
                  onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && <p>{error}</p>}
              <button
              id='form5' 
              type="submit"
              >
                SignUp
                </button>
          </form>
      </div>
    )
  }



