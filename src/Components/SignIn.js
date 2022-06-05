import React from "react";
import "../styles/signIn.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="page">
      <div className="container">
        <div className="image">
          <img src="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg" />
        </div>
        <div className="text">Sign In</div>
        <form className="form">
          <input
            type="text"
            className="input"
            placeholder="Email, Phone or Skype"
            required
          />
          <br />

          <input
            type="password"
            className="input"
            placeholder="Enter password"
            required
          />
          <br />
          <button className="button">Login</button>
        </form>
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            color: "black",
            textAlign: "center",
          }}
        >
          <div className="message">No Account? Create one</div>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
