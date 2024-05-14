import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../css/loginAndRegistration.css";
import registerImage from "../../img/register.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
}from "react-icons/fa";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();

    const data = {
      name: name,
      email: email,
      password: password,
      password2: password2,
    };

    axios
      .post(" http://localhost:5050/users/register", data)
      .then((res) => {
        console.log(res);
        toast.success("Successfully registration ! ");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      });
  }
  return (
    <div className="sign-container">
      <div className="right-container">
        <div className="forms-container">
          <div className="signup">
            <form className="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <FontAwesomeIcon icon={faUser} className="icon mt-3 ml-5" />
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter UserName"
                />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faEnvelope} className="icon mt-3" />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Enter Email"
                />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="icon mt-3" />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="icon mt-3" />
                <input
                  onChange={(e) => setPassword2(e.target.value)}
                  type="password"
                  placeholder="Re-Enter Password"
                />
              </div>
              <input type="submit" className="btn2" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="facebook.com" className="social-icon">
                  <FaFacebook/>
                </a>
                <a href="twiter.com" className="social-icon">
                  <FaTwitter/>
                </a>
                <a href="instagram.com" className="social-icon">
                  <FaInstagram/>
                </a>
                <a href="linkedin.com" className="social-icon">
                  <FaLinkedin/>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="register-panels-container">
          <div className="panel left-panel">
            <div className="content z-index-2">
              <h3>New here ?</h3>
              <p>
                {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, */}
                {/* ex ratione. Aliquid! */}
              </p>
              <Link to="/login">
                <button className="btn2 transparent" id="sign-up-btn">
                  Sign In
                </button>
              </Link>
            </div>
            <img src={registerImage} className="image" alt="" />
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Register;
