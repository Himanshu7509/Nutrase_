import React from "react";
import "./main-course.css";
import Women from "../../../../assets/run-women-png.png";
import Lotus from "../../../../assets/lotus-png.webp";
import Man from "../../../../assets/man-png.png";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MainCourse = () => {
    const navigate = useNavigate();
    function ask() {
        navigate("/askNutras");
      }
  return (
    <div className="Main-course-Cont">
      <div className="main-course-card-cont">
        <div className="main-course-cards">
          <img src={Women} className="course-card-images" />
          <br />
          <p className="course-card-heading">Women's Fitness</p>
          <br />
          <p className="course-card-para">
            This is for informational purposes only. For medical advice or
            diagnosis, consult a professional. Generative AI is experimental.
          </p>
          <br/>
          <button className="course-card-btn" onClick={ask}>Ask Nutras <FaArrowRight></FaArrowRight></button>
        </div>
        <div className="main-course-cards">
          <img src={Lotus} className="course-card-images" />
          <br />
          <p className="course-card-heading"> Ask Anythink...</p>
          <br />
          <p className="course-card-para">
            This is for informational purposes only. For medical advice or
            diagnosis, consult a professional. Generative AI is experimental.
          </p>
          <br />
          <button className="course-card-btn" onClick={ask}>Ask Nutras <FaArrowRight></FaArrowRight></button>
        </div>
        <div className="main-course-cards">
          <img src={Man} className="course-card-images" />
          <br />
          <p className="course-card-heading">Men's Fitness</p>
          <br />
          <p className="course-card-para">
            This is for informational purposes only. For medical advice or
            diagnosis, consult a professional. Generative AI is experimental.
          </p>
          <br/>
          <button className="course-card-btn" onClick={ask}>Ask Nutras <FaArrowRight></FaArrowRight></button>
        </div>
      </div>
    </div>
  );
};

export default MainCourse;
