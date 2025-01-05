import React from "react";
import "./about-page.css";
import ourStory from "../../../../assets/oursto.jpg";
import About1 from "../../../../assets/impro.jpg";
import About2 from "../../../../assets/collab.jpg";
import About3 from "../../../../assets/inclu.jpg";
import people from "../../../../assets/peoples.jpg";
import Expert from "../../home/experts/exprt";


const AboutPage = () => {
  return (
    <>
   
      <div className="about-page-main-cont">
        <div className="about-page-cont">
          <div className="about-page-heading">About Us</div>
          <div className="about-page-sm-heading"></div>
          <br />
          <Expert/>
          <br />
          <div className="about-page-heading">Our Story</div>
          <br />
          <div className="about-page-story-part">
            <div className="about-page-para-part">
              <p className="about-page-detail-part">
                At <u>Nutras</u> , our journey began with a simple yet powerful
                idea—to make healthy living accessible to everyone. We
                understand that maintaining a balanced diet can be challenging
                in today’s fast-paced world, so we set out to create a platform
                that simplifies meal planning and nutrition.
              </p>
              <p className="about-page-detail-part">
                Founded by a group of health enthusiasts, our mission is to
                inspire and empower individuals to make informed dietary
                choices. From personalized diet plans to expert tips, we’re here
                to support you every step of the way on your journey to better
                health. What started as a passion project has grown into a
                trusted resource for health-conscious individuals worldwide. We
                believe that good nutrition is the foundation of a happy,
                fulfilling life, and we’re committed to helping you achieve your
                wellness goals—one meal at a time.
              </p>
            </div>
            <img src={ourStory} className="about-page-ourstory" />
          </div>
          <br />
          <div className="about-page-heading">Our Values</div>
          <br />
          <br />
          <div className="about-page-values-part">
            <div className="about-page-values-cards">
              <img src={About1} className="values-cards" />
              <div className="values-cards-text-heading">
                Continuous Improvement
              </div>
              <p className="values-cards-text">
                Constantly seeking new ways to grow, learn, and innovate —
                embracing and leading change as a catalyst for progress.
              </p>
            </div>
            <div className="about-page-values-cards">
              <img src={About2} className="values-cards" />
              <div className="values-cards-text-heading">Collaboration</div>
              <p className="values-cards-text">
                Working together with effective communication, mutual respect
                and individual ownership to achieve shared goals and collective
                accountability.
              </p>
            </div>
            <div className="about-page-values-cards">
              <img src={About3} className="values-cards" />
              <div className="values-cards-text-heading">Inclusivity</div>
              <p className="values-cards-text">
                Cultivating a culture that welcomes differences, celebrates
                unique perspectives, and provides a respectful and nurturing
                environment.
              </p>
            </div>
          </div>
          <br /> <br />
          <div className="about-page-heading">Our People</div>
          <br />
          <div className="about-page-story-part">
            <img src={people} className="about-page-ourstory heig" />
            <div className="about-page-para-part">
              <p className="about-page-detail-part">
                At Nutras, our strength lies in the dedication and expertise of
                our team. We are a diverse group of nutritionists, fitness
                enthusiasts, technologists, and creative thinkers, all united by
                a shared passion for healthy living.
              </p>
              <p className="about-page-detail-part">
                Each member of our team brings unique skills and perspectives to
                the table, enabling us to craft personalized diet plans, create
                engaging content, and deliver an exceptional user experience.
                Our nutrition experts stay updated on the latest health trends
                to ensure that the advice we provide is backed by science and
                tailored to individual needs. We believe in the power of
                collaboration and community, and our team works tirelessly to
                empower you on your wellness journey. Together, we’re here to
                inspire and guide you toward a healthier, happier life.
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default AboutPage;
