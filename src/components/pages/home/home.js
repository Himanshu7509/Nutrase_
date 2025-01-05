import Header from '../../common/header/Header';
import TextSlider from '../../common/slider/textSlider';
import Expert from './experts/exprt';
import Feedback from './feedback/feedback';
import FitNessAsk from './fitness-nutrician/fitnessN';
import FoodFitness from './food-fitness-blogs/foodFitness';
import './home.css'
import MainCourse from './maincourse/MainCourse';
import Footer from '../../common/footer/footer';

function Home() {
  return (
    <>
      <Header/>
      <div className="container-fluid">
        <FitNessAsk/>
      </div>
      <div className="container-fluid">
        <MainCourse/>
      </div>
      <div>
        <Expert/>
      </div>
      <div>
        <TextSlider/>
      </div>
      <div>
        <FoodFitness/>
      </div>
      <div>
        <Feedback/>
      </div>
      <Footer/>
    </>
  );
}
export default Home;
