import React from "react";
import Logo from "../assets/Logo.png";
import Frame from "../assets/Frame.png";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="loginform">
        <div className="Sidebar-logo">
          <img alt="" src={Logo} />
          <span
            className="SidebarActive"
            style={{
              fontSize: "1.2rem",
              fontWeight: "700",
              marginLeft: "5px",
              marginTop: "8px",
            }}
          >
            TEONS
          </span>
        </div>
        <div>
          <p>Welcome to Teons! </p>
          <p style={{fontSize:"12px", opacity:".7"}}>Please sign-in to your account and start the adventure </p>
        </div>
        <form className="Form">
          <input className="input" placeholder="User Name" type="text" />
          <input className="input" placeholder="Passwoard" type="password" />
          <div>
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>
          <button type="submit" className="login-btn">
            {" "}
            Log in
          </button>
        </form>
      </div>
      <div>
      <img className="Frame" alt="" src={Frame} />
      </div>
    </>
  );
};

export default Login;
