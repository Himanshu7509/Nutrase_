import "./Header.css";
import logo from "../../../assets/logo.webp";
import React, { useEffect } from "react";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  function blog() {
    navigate("/blog");
  }
  function contact() {
    navigate("/contact");
  }
  function home() {
    navigate("/home");
  }

  function about() {
    navigate("/about");
  }

  return (
    <>
      <div className="main-header-cont">
        <div className="header-cont">
          <div className="logo-img">
            <img src={logo} onClick={home}></img>

            <div className="nav-content">
              <nav className="navbar-link">
                <ul className="list-items">
                  <li className="list" onClick={about}>
                    <a className="list-link">about</a>
                  </li>

                  <li className="list" onClick={blog}>
                    <a className="list-link">blog</a>
                  </li>

                  <li className="list" onClick={contact}>
                    <a className="list-link">contact-us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="LogoutBtn">
            <button onClick={handleSignOut}>Logout</button>
          </div>
        </div>
      </div>

      {/* ----------------------- */}

      <div className="mob-view">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="#">
            <div className="logo-img">
              <img src={logo} onClick={home}></img>
            </div>
          </a>

          <form className="form-inline my-2 my-lg-0"></form>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  contact-us
                </a>
              </li>
              <div className="logoutBtn">
                <button
                  className="LogBtn "
                  type="submit"
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
