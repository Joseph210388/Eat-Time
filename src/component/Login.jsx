import React from "react";
import '../css/Style-Pages/Login.css';
import Footer1 from './Footer1';
import { Link } from "react-router-dom";
function Login(){
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  };
  return(
    <div className="Login">
      <div className="Logincontainer">
        <h1>Sign in</h1>
        <form className="Loginform" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <br />
          <button type="submit" className="Loginbutton">SIGN IN</button>
        </form>
        <div className="Loginsection2">
          <p>Don't have an account?</p>
          <Link to={"/Register"}>
            <a>Register</a>
          </Link>
        </div>
      </div>
      <Footer1 />
    </div>
    );
}
export default Login;