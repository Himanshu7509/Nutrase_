import "./Header.css";
import logo from "../../../assets/logo3.jpg";
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
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                alt="Logo"
                className="d-inline-block align-text-top"
                src={logo}
                onClick={home}
              ></img>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse header-nav" id="navbarNav">
              <ul className="navbar-nav me-auto ms-4 custom-nav">
                <li className="nav-item" onClick={about}>
                  <a className="nav-link">About</a>
                </li>
                <li className="nav-item" onClick={blog}>
                  <a className="nav-link">Blogs</a>
                </li>
                <li className="nav-item" onClick={contact}>
                  <a className="nav-link">Contact</a>
                </li>
              </ul>

              <div className="togglelogoubtn">
                <button
                  className="btn btn-outline-danger"
                  type="submit"
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
