import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.info("New User Created", auth);
        history.push("/");
      })
      .catch((error) => {
        alert("Registration failed");
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          alt="home"
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="amazon_button login__signin"
            onClick={login}
          >
            {" "}
            Sign In
          </button>
        </form>
        <p>
          By Signing In, you agree to Amazon's condition of use and sale. Please
          see out Privacy Notice, Cookies Notice and Interest-Based Ads Notice
        </p>
        <button className="login__register" onClick={register}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
