import React, { useState, useEffect } from "react";
import "./login.css";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate(); 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            navigate("/home");
          }
        });

        return () => unsubscribe();
      }, [navigate]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            navigate("/home");
          })
          .catch((err) => alert(err.message));
      };

  return (
    <div className="login-main-cont">
      <div className="login-cont">
        <form className="login-form" onSubmit={handleLogin}>
          <br/>
          <h1 className="log-heading">Login</h1>
          <div className="login-form-grp">
            <label className="login-label">Email:</label>
            <input
              type="email"
              className="login-input"
              placeholder="for example: udanous@gmail.com"
              value={email}
              onChange={handleEmailChange}
            />

            <label className="login-label">Password:</label>
            <input
              type="password"
              className="login-input"
              placeholder="for example: udanous"
              value={password}
              onChange={handlePasswordChange}
            />
            <br />
            <button type="submit" className="login-btn">
              LOGIN
            </button>
            <div className="signup-option">
              <p className="signup-text">Or Sign Up Using</p>
              
              <button
                type="button"
                onClick={() => {
                    navigate("/signup");
                }}
                className="login-btn"
              >
                Or Create A New Account
              </button>
              <br/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;