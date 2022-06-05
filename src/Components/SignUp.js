import React from "react";
import "../styles/signIn.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="page">
      <div className="container">
        <div className="image">
          <img src="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg" />
        </div>
        <div className="text">Create Account</div>
        <form className="form">
          <input
            type="text"
            className="input"
            placeholder="Enter your Name"
            required
          />
          <br />

          <input
            type="email"
            className="input"
            placeholder="Enter Email"
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
          <input
            type="password"
            className="input"
            placeholder="Confirm password"
            required
          />
          <br />
          <button className="button">Register</button>
        </form>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            textAlign: "center",
          }}
        >
          <div className="message">Already have an account? Login</div>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
