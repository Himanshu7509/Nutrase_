import React from "react";
import "./feedback.css";
import Marquee from "react-fast-marquee";
import { FaUserCircle } from "react-icons/fa";

const Feedback = () => {
  return (
    <div className="about-main-container">
      <div className="main-about-cont-part">
        <div className="main-about-title">Happy Customer</div>
        <br />
        <div className="main-about-heading">What Client Say About Us</div>
        <br />
        <div className="main-about-content-part ">
          <Marquee play={true} speed={20} pauseOnHover={true}>
            <div className="main-about-marquee-part">
              <div className="main-about-marquee-block">
                <div className="main-about-icon-text-part">
                  <FaUserCircle className="main-about-icon"></FaUserCircle>
                  <div className="main-about-text-title-part">
                    <p className="main-about-text">John Doe</p>
                   
                  </div>
                </div>
                <p className="main-about-text-details">
                  I've never seen anything like this before. It's amazing. I
                  love it.
                </p>
              </div>
              <div className="main-about-marquee-block">
                <div className="main-about-icon-text-part">
                  <FaUserCircle className="main-about-icon"></FaUserCircle>
                  <div className="main-about-text-title-part">
                    <p className="main-about-text">Cena Doe</p>
                   
                  </div>
                </div>
                <p className="main-about-text-details">
                I've never seen anything like this before. It's amazing. I
                love it.
                </p>
              </div>
              <div className="main-about-marquee-block">
                <div className="main-about-icon-text-part">
                  <FaUserCircle className="main-about-icon"></FaUserCircle>
                  <div className="main-about-text-title-part">
                    <p className="main-about-text">Blue Bro</p>
                   
                  </div>
                </div>
                <p className="main-about-text-details">
                I've never seen anything like this before. It's amazing. I
                love it.
                </p>
              </div>
              <div className="main-about-marquee-block">
                <div className="main-about-icon-text-part">
                  <FaUserCircle className="main-about-icon"></FaUserCircle>
                  <div className="main-about-text-title-part">
                    <p className="main-about-text">Robin Hood</p>
                   
                  </div>
                </div>
                <p className="main-about-text-details">
                I've never seen anything like this before. It's amazing. I
                love it.
                </p>
              </div>
            </div>
          </Marquee>
          <br />
          <Marquee
            play={true}
            direction={"right"}
            speed={20}
            pauseOnHover={true}
          >
            <div className="main-about-marquee-part">
              <div className="main-about-marquee-block">
                <div className="main-about-icon-text-part">
                  <FaUserCircle className="main-about-icon"></FaUserCircle>
                  <div className="main-about-text-title-part">
                    <p className="main-about-text">John Doe</p>
                   
                  </div>
                </div>
                <p className="main-about-text-details">
                  I've never seen anything like this before. It's amazing. I
                  love it.
                </p>
              </div>
              <div className="main-about-marquee-block">
                <div className="main-about-icon-text-part">
                  <FaUserCircle className="main-about-icon"></FaUserCircle>
                  <div className="main-about-text-title-part">
                    <p className="main-about-text">Cena Doe</p>
                   
                  </div>
                </div>
                <p className="main-about-text-details">
                I've never seen anything like this before. It's amazing. I
                love it.
                </p>
              </div>
              <div className="main-about-marquee-block">
                <div className="main-about-icon-text-part">
                  <FaUserCircle className="main-about-icon"></FaUserCircle>
                  <div className="main-about-text-title-part">
                    <p className="main-about-text">Blue Bro</p>
                   
                  </div>
                </div>
                <p className="main-about-text-details">
                I've never seen anything like this before. It's amazing. I
                love it.
                </p>
              </div>
              <div className="main-about-marquee-block">
                <div className="main-about-icon-text-part">
                  <FaUserCircle className="main-about-icon"></FaUserCircle>
                  <div className="main-about-text-title-part">
                    <p className="main-about-text">Robin Hood</p>
                   
                  </div>
                </div>
                <p className="main-about-text-details">
                I've never seen anything like this before. It's amazing. I
                love it.
                </p>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Feedback;