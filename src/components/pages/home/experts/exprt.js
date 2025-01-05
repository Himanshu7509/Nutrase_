import "./exprt.css";
import exprt from "../../../../assets/exprt-img-girl.webp";
import Leaf from "../../../../assets/leaf.webp";

const Expert = () => {
  return (
    <>
      <div className="main-exprt-cont">
        <div className="exprt-child">
          <div className="intructer">
            <img src={exprt} />
          </div>

          <div className="about-exprt">
            <p>25+ years of experience</p>

            <h1>We have expert instructor for help our students.</h1>

            <small>
              Lorem Ipsum is simply dummy text the printing and typesetting
              standard dummy text ever since the 150 when an unknown printe
              specimen book has survived centuries.
            </small>

            <h2>100+ Courses</h2>

            <small>
              Lorem Ipsum is simply dummy text the printing and typesetting
              standard dummy text ever since the 150 when an unknown printe
              specimen book has survived centuries.
            </small>

            <img src={Leaf} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Expert;
