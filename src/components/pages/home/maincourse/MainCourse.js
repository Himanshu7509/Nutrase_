import React from 'react'
import './main-course.css'
import Women from "../../../../assets/run-women-png.png";
import Lotus from "../../../../assets/lotus-png.webp";
import Man from "../../../../assets/man-png.png";

const MainCourse = () => {
  return (
    <div className='Main-course-Cont'>
        <div className='main-course-card-cont'>
            <div className='main-course-cards'>
                <img src={Women} className='course-card-images' />
                <br/>
                <p className='course-card-heading'>Women's Course</p>
                <br/>
                <p className='course-card-para'>This is for informational purposes only. For medical advice or diagnosis, consult a professional. Generative AI is experimental.</p>
            </div>
            <div className='main-course-cards'>
                <img src={Lotus} className='course-card-images' />
                <br/>
                <p className='course-card-heading'>Women's Course</p>
                <br/>
                <p className='course-card-para'>This is for informational purposes only. For medical advice or diagnosis, consult a professional. Generative AI is experimental.</p>
            </div>
            <div className='main-course-cards'>
                <img src={Man} className='course-card-images' />
                <br/>
                <p className='course-card-heading'>Women's Course</p>
                <br/>
                <p className='course-card-para'>This is for informational purposes only. For medical advice or diagnosis, consult a professional. Generative AI is experimental.</p>
            </div>
        </div>
    </div>
  )
}

export default MainCourse