import "./fitnessN.css";
import { Link } from "react-router-dom";

const FitNessAsk = () => {
  return (
    <>
      <div className="main-cont-fitness">
        <div className="heading-part">
          <p className="st-para">FITNESS & NUTRITION</p>

          <h1>
            This Life Style For Your <span> Fitness Not</span> Only Diet.
          </h1>

          <p className="last-para-head">
            It has Servived Not Only Five Centuieos But Also
          </p>

          <Link to={"/askNutras"}>
            <button className="btn-grad"> Ask To Nutras</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default FitNessAsk;
