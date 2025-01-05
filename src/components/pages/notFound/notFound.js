import "./notFound.css";
import notfound from "../../../assets/notfound.webp";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();

  function navigater() {
    navigate("/");
  }

  return (
    <>
      <div className="Notfound-main-content">
        <div className="notfound-content">
          <div className="notfound-first-content">
            <div className="notfound-img">
              <img src={notfound}></img>
            </div>
          </div>

          <div className="notfound-second-content">
            <div className="notfound-heading-para-btn">
              <h1>
                OOPS! <span style={{ color: "orange" }}>PAGE</span> NOT FOUND
              </h1>

              <br></br>

              <p>
                You must picked the wrong door because I haven't been able to
                lay my eyes on the page you've be searching for.
              </p>
              <br></br>

              <button onClick={navigater}>BACK TO HOME</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notfound;
