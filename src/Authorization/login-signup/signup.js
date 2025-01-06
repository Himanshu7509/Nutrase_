import React, { useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    confirmEmail: "",
  });

  const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();

    if (registerInfo.email !== registerInfo.confirmEmail) {
      alert("Please confirm that both emails are the same");
    } else if (registerInfo.password !== registerInfo.confirmPassword) {
      alert("Please confirm that both passwords are the same");
    } else {
      createUserWithEmailAndPassword(auth, registerInfo.email, registerInfo.password)
        .then(() => {
          navigate("/home");
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <div className="login-main-cont rg">
         <div className="login-cont">
         <form className="login-form" onSubmit={handleRegister}>
              <h1 className="log-heading">Register</h1>
              <div className="login-form-grp">
                <label className="login-label">Email:</label>
                <input
                  type="email"
                  value={registerInfo.email}
                  onChange={(e) => setRegisterInfo({ ...registerInfo, email: e.target.value })}
                  className="login-input"
                  placeholder="Enter your email"
                />

                <label className="login-label">Confirm Email:</label>
                <input
                  type="email"
                  value={registerInfo.confirmEmail}
                  onChange={(e) => setRegisterInfo({ ...registerInfo, confirmEmail: e.target.value })}
                  className="login-input"
                  placeholder="Enter your confirm email"
                />

                <label className="login-label">Password:</label>
                <input
                  type="password"
                  value={registerInfo.password}
                  onChange={(e) => setRegisterInfo({ ...registerInfo, password: e.target.value })}
                  className="login-input"
                  placeholder="Enter your password"
                />
                <label className="login-label">Confirm Password:</label>
                <input
                  type="password"
                  value={registerInfo.confirmPassword}
                  onChange={(e) => setRegisterInfo({ ...registerInfo, confirmPassword: e.target.value })}
                  className="login-input"
                  placeholder="Enter your confirm password"
                />
               
                <button type="submit" className="login-btn">Register</button>
                <div className="signup-option">
                  <button
                    type="button"
                    onClick={() => {
                      navigate('/');
                    }}
                    className="login-btn"
                  >
                    Go Back
                  </button>
                  <br/>
                </div>
              </div>
            </form>
         </div>
    </div>
  )
}

export default Register