import "./foodFitness.css";
import course1 from "../../../../assets/courses1.webp";
import course2 from "../../../../assets/courses2.webp";
import course3 from "../../../../assets/courses3.webp";
import { useNavigate } from "react-router-dom";


const FoodFitness = () => {
  const navigate = useNavigate();
  const blog = () =>{
    navigate("/blog")
  }
  return (
    <>
      <div className="main-food-fitness-cont">
        
        <div className="about-food-fitness">
        <div className="food-blog-heading">Food Fitness Blogs</div>
          <div className="food-fitness-card">
            <div className="ask-ai-fitness" onClick={blog}>
              <img
                src={course1}
                className="ai-fitness-img"
                
              ></img>
              <br/>
              <h3 className="ai-fitness-text">
                Expertise on Fitness, Nutrition and Health
              </h3>
            </div>
            <div className="ask-ai-fitness" onClick={blog}>
              <img src={course2} className="ai-fitness-img" />
              <br/>
              <h3 className="ai-fitness-text">
                Hacking exercise for health new science of fitness
              </h3>
            </div>
            <div className="ask-ai-fitness" onClick={blog}>
              <img src={course3} className="ai-fitness-img" />
              <br/>
              <h3 className="ai-fitness-text">
                Designing Your Personal Weight Loss Plan
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FoodFitness;
