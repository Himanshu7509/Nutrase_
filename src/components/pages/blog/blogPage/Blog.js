import { FaUserCircle } from "react-icons/fa";
import Smile from '../../../../assets/smilefamily.jpg'
import Girl from '../../../../assets/girl1.jpg'
import Seven from '../../../../assets/seven.avif'
import Six from '../../../../assets/six.avif'
import Eight from '../../../../assets/second.avif'
import Nutrasimg from '../../../../assets/imag.webp'
import Girl2 from '../../../../assets/imag4.avif'
import Third from '../../../../assets/blog3.avif'
import Second from '../../../../assets/second.avif'
import First from '../../../../assets/first.avif'
import "./Blog.css";


const Blogs = () => {
  return (
    <>
    
      <br></br> <br></br> <br></br>
      <header className="blog-header">
        <h1 className="blog-heading-lg">Welcome to Fitness Insights</h1>
        <p>Your daily dose of health and fitness inspiration</p>
      </header>
      <div className="blog-second-content container">
        <div className="blog-content">
          <br></br>
          <br></br>
          <h1>Fitness Blogs You Need to Follow</h1>
          <br></br>

          <div className="user-icon">
            <div>
              <FaUserCircle
                className="blog-icons"
                style={{ color: "rgb(255, 187, 0)" }}
              ></FaUserCircle>
            </div>
            <div className="ellen">
              <h6>ELLEN DOE</h6>
            </div>
          </div>

          <br></br>
          <div className="p-blog">
            <p>
              {" "}
              <span style={{ fontSize: "20px", fontFamily: "monospace" }}>
                Today
              </span>
              , more than ever, there is a renewed focus and awareness on health
              and fitness. There may be a lot of new things for you to learn
              about nutrition how exercise not only helps your body.
            </p>
          </div>
          <br></br>

          <div className="one">
            <img src={Smile} className="blog-image" />
          </div>

          <br></br>
          <br></br>
          <div className="h1-element">
            <h1>
              The Complete Guide to Plant-Based Protein: Benefits and Sources{" "}
            </h1>
            <p>
              Breaking Muscle is one of the leading fitness blogs on the
              internet. Focused on strength sports — like weightlifting,
              powerlifting, CrossFit, and Strongman it provides readers with
              advice on how to build muscle, including training WStarting on a
              total health and fitness journey can be intimidating. There may be
              a lot of new things for you to learn about nutrition.There may be
              a lot of new things for you to learn about nutrition tips and
              nutrition information.
            </p>
          </div>

          <br></br>
          <div className="h1-para-img-cont">
            <div className="h1-element">
              <h1>How to Make Effective New Year Resolutions for Fitness</h1>
              <p>
                New Year is all about a sense of renewal and indeed a chance to
                reset our goals, particularly when it comes to health and
                fitness. WStarting on a total health and fitness journey can be
                intimidating. There may be a lot of new things for you to learn
                about nutrition.There may be a lot of new things for you to
                learn about nutrition
              </p>
            </div>

            <div className="girl-img-cont">
              <img src={Girl} />
            </div>
          </div>

          <br></br>

          <div className="h1-element">
            <h1>
              What You Need to Know Before Investing in an Anytime Fitness Gym{" "}
            </h1>
            <p>
              The fitness industry is indeed growing at a rapid rate. The
              fitness and health ecosystem in India has been taken over by some
              of the WStarting on a total health and fitness journey can be
              intimidating. There may be a lot of new things for you to learn
              about nutrition.There may be a lot of new things for you to learn
              about nutrition
            </p>
          </div>
          <br></br>

          <div className="h1-element">
            <h1>Knocked-Up Fitness Julie Wiebe</h1>
            <p>
              Knocked-Up Fitness, run by personal trainer and pre/postnatal
              exercise specialist Julie Wiebe, provides tailored advice on
              safely staying fit during and after pregnancy WStarting on a total
              health and fitness journey can be intimidating. There may be a lot
              of new things for you to learn about nutrition.There may be a lot
              of new things for you to learn about nutrition .
            </p>
          </div>

          <br></br>
        </div>
      </div>
      <a href="https://www.glofox.com/blog/fitness-blogs/">
        <section className="blog-grid-cont container">
          <article className="blog-post">
            <h4>Investing in an Anytime Fitness Gym</h4>
            <p>
              The fitness industry is indeed growing at a rapid rate. The
              fitness and health ecosystem in India has been taken over by some
              of the
            </p>
            <br></br>
            <img src={Seven} style={{ width: "100%" }} />
          </article>

          <article className="blog-post">
            <h4>Fitness vs. Wellness: Why Both Matter for a Fulfilling Life</h4>
            <p>
              Explore fitness vs wellness, their unique benefits, and how to
              strike a balance between them for a healthier.
            </p>
            <br></br>
            <img src={Six} style={{ width: "100%" }} />
          </article>

          <article className="blog-post">
            <h4>What Makes a Fitness Blog Successful</h4>
            <p>
              Some of the best fitness blogs have a massive following. They are
              a go-to source for all things health, fitness, and well-being.
            </p>
            <br></br>
            <img src={Eight} style={{ width: "100%" }} />
          </article>
        </section>
      </a>
      <div className="blog-second-content container">
        <div className="blog-content">
         
          <br></br>
          <div className="user-icon">
            <div>
              <FaUserCircle className="blog-icons currentcolor"></FaUserCircle>
            </div>
            <div className="ellen">
              <h6>JOHN DOE</h6>
            </div>
          </div>
          <br></br>
          <div className="p-blog">
            <p>
              <span style={{ fontSize: "20px" }}>Today</span>, more than ever,
              there is a renewed focus and awareness on health and fitness.
            </p>
          </div>
          <br></br>
          <div className="one">
            <img src={Nutrasimg} className="blog-image" />
          </div>
          <br></br> <br></br>
          <div className="h1-element">
            <h1>How to Make Effective New Year Resolutions for Fitness</h1>
            <p>
              New Year is all about a sense of renewal and indeed a chance to
              reset our goals, particularly when it comes to health and fitness.
              WStarting on a total health and fitness journey can be
              intimidating. There may be a lot of new things for you to learn
              about nutrition.There may be a lot of new things for you to learn
              about nutrition
            </p>
          </div>
          <br/>
          <div className="h1-para-img-cont">
            <div className="h1-element">
              <h1>
                What You Need to Know Before Investing in an Anytime Fitness Gym{" "}
              </h1>
              <p>
                The fitness industry is indeed growing at a rapid rate. The
                fitness and health ecosystem in India has been taken over by
                some of the WStarting on a total health and fitness journey can
                be intimidating. There may be a lot of new things for you to
                learn about nutrition.There may be a lot of new things for you
                to learn about nutrition
              </p>
            </div>

            <div className="girl-img">
              <img src={Girl2} />
            </div>
          </div>
          <br></br>
          <div className="h1-element">
            <h1>Knocked-Up Fitness Julie Wiebe</h1>
            <p>
              Knocked-Up Fitness, run by personal trainer and pre/postnatal
              exercise specialist Julie Wiebe, provides tailored advice on
              safely staying fit during and after pregnancy WStarting on a total
              health and fitness journey can be intimidating. There may be a lot
              of new things for you to learn about nutrition.There may be a lot
              of new things for you to learn about nutrition .
            </p>
          </div>
        </div>
      </div>
      <br></br> <br></br>
      <a href="https://www.glofox.com/blog/fitness-blogs/">
        <section className="blog-grid-cont container">
          <article className="blog-post">
            <h4>The Complete Guide to Plant-Based Protein</h4>
            <p>
              Discover the benefits of plant-based proteins and their best
              sources. Learn how to incorporate them into your fitness journey
              for optimal results.
            </p>
            <br></br>
            <img src={First} style={{ width: "100%" }} />
          </article>

          <article className="blog-post">
            <h4>Engages and Connects with the Reader </h4>
            <p>
              Information is delivered in a way that the reader can understand
              and relate to. Not only do readers find a solution to a problem.
            </p>
            <br></br>
            <img src={Second} style={{ width: "100%" }} />
          </article>

          <article className="blog-post">
            <h4>Has a Strong Social Media Presence </h4>
            <p>
              Fitness bloggers tend to have a strong social media presence. They
              continue to interact and engage with users off and on the blog.
            </p>
            <br></br>
            <img src={Third} style={{ width: "100%" }} />
          </article>
        </section>
      </a>
      
    </>
  );
};
export default Blogs;
