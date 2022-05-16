import { Link } from "react-router-dom";
import React, { useState }from "react";
import company from '../Assets/company.jpg';

const Login = () => {

  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  return (        
      <div id="loginPage">            
      <div className="vh-100 d-flex align-items-center flex-row"> 
        <div className="position-relative vh-100 col-6 d-none d-lg-block">
          <img className="imglogin" src={company} alt="" />
          <nav className="position-absolute">
           <p className="loi py-1 mt-4 px-4">LOI</p>
            </nav>
        </div>
        <div className="col-10 col-lg-6 m-auto px-3">
            <h2 className="h2blue pb-1">Nice to have you back</h2>
            <p className="pb-4 text-center logintext">Login with your details.</p>
            <div className="w-100">
          <form id="loginForm" className="form-text">
            <input type="email" placeholder="Email" className="my-3 py-3 pl-2"/>
            <div className="d-flex flex-row">
              <input id="password" type={passwordShow ? "text" : "password"} placeholder="Password" className="w-100 position-relative my-2 py-3 pl-2" />
              <p onClick={togglePassword} className="pr-2 cursor-pointer pt-2 mt-3 position-absolute">SHOW</p>
            </div>
            <p className="py-2">FORGOT PASSWORD ?</p>
            <Link to="/dashboard"><button type="submit" className="py-3 w-100">Login</button></Link>
          </form>
            </div>
        </div>
      </div>
      </div>

  )
}

export default Login
