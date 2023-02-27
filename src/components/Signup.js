import axios from "axios";
import { useState } from "react";
import { Link ,useHistory} from "react-router-dom";
import "./Signup.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  let history = useHistory();
  async function handleSubmit (e){
    e.preventDefault();
     try {
      const res = await axios.post("https://localhost:3000/register", {
        username,
        email,
        password,
      });
      res.data && history.push("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span style={{color:"white",fontFamily:"sans-serif"}}className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
         <input
         style={{marginBottom:"10px"}}
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        
         <input
           type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      
     </div>
  );
}
