import Marquee from "react-fast-marquee";
import fit1 from "../../../assets/fit3.jpg";
import fit2 from "../../../assets/fit2.jpg";
import fit3 from "../../../assets/fit6.jpg";
import fit4 from "../../../assets/fit5.jpg";
import fit5 from "../../../assets/fit4.jpg";
import fit6 from "../../../assets/fit7.jpg";

import "./textSlider.css";
const TextSlider = () => {
  return (
    <>
      <Marquee play={true} className="marquee" speed={70}>
        <img src={fit6} className="img-logo-width br" />
        <img src={fit1} className="img-logo-width" />
        <img src={fit3} className="img-logo-width logo-ht-wt" />
        <img src={fit2} className="img-logo-width" />
        <img src={fit4} className="img-logo-width ht-wt" />
        <img src={fit1} className="img-logo-width" />
        <img src={fit5} className="img-logo-width ht" />
        <img src={fit4} className="img-logo-width ht-wt" />
        <img src={fit2} className="img-logo-width" />
        <div className="brands-logo">Fitness Brands</div>
      </Marquee>
    </>
  );
};

export default TextSlider;
