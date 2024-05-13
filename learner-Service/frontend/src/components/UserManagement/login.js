import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../css/loginAndRegistration.css";
import loginImage from "../../img/log.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
}from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // login function with api
  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    // axios call
    axios
      .post(" http://localhost:5050/users/login", data)

      .then((res) => {
        console.log(res.data)
       
        localStorage.clear();
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("loggedIn", true);

        if(res.data.accountType === "user"){
          localStorage.setItem("role", "user");
          window.location.href = "/"

        } else if(res.data.accountType === "admin"){
          localStorage.setItem("role", "admin");
          navigate("/admin/dashboard");
        }

        // navigate("/get");
        // window.location.href = "./get"
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
        toast.error(err.response.data);
      });
  }
  return (
    <div className="sign-container">
      <div className="left-container">
        <div className="forms-container">
          <div className="signin">
            <form className="sign-in-form" onSubmit={(e) => handleSubmit(e)}>
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <FontAwesomeIcon icon={faEnvelope} className="icon mt-3" />
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="icon mt-3" />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input type="submit" value="Login" className="btn2 solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="# " className="social-icon">
                  <FaFacebook/>
                </a>
                <a href="# " className="social-icon">
                  <FaTwitter/>
                </a>
                <a href="# " className="social-icon">
                  <FaInstagram/>
                </a>
                <a href="# " className="social-icon">
                  <FaLinkedin/>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="login-panels-container">
          <div className="panel right-panel">
            <div className="login-content content">
              <h3>New Here?</h3>
              <Link to="/register">
                <button className="btn2 transparent" id="sign-in-btn">
                  Sign up
                </button>
              </Link>
            </div>
            <img src={loginImage} className="image" alt="" />
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Login;
