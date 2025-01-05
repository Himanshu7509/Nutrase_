import "./footer.css";

const Footer = () => {
  return (
    <>
      {/* <div className="footer-main-section">
        <div className="footer-bg-content">
          <div className="first-left">
            <div className="head-para-input-button">
              <h1>Subscribe Newsletter</h1>

              <br></br>
              <div className="small-para">
                <p>
                  Lorem Ipsum has been them an industry printer took a galley
                  make
                </p>
              </div>

              <input
                type="email"
                placeholder=" @gmail.com"
                className="form-control w-75 inputtype"
              ></input>

              <br></br>

              <div className="subscribe-btn">
                <button>Subcribe Now</button>
              </div>
            </div>
          </div>

          <div className="second-center">
            <div className="left-content">
              <ul className="list-item">
                <h1>All Courses</h1>

                <li> Daily Exercise</li>
                <li> Find Your Balance</li>
                <li> Personal Program </li>
                <li> Natural Process</li>
                <li> Immune System</li>
                <li>Gives You Energy</li>
              </ul>
            </div>

            <div className="right-content">
              <ul className="list-item">
                <h1>Help Links</h1>

                <li> Privacy Policy</li>
                <li> Discussion</li>
                <li> Terms & Conditions</li>
                <li> Customer Support</li>
                <li> Course FAQ,s </li>
                <li> Online Classes</li>
              </ul>
            </div>
          </div>

          <div className="third-right">
            <div className="opening-hours">
              <ul className="list-item">
                <h1>Opening Hours</h1>
                <li>Mon-Fri: 9 AM - 6 PM</li>
                <li>Saturday: 9 AM - 4 PM</li>
                <li>Sunday Closed</li>

                <div className="location">
                  <li>
                    176 W street name, New
                    <br></br> York, NY 10014
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-last-cont">
        <div className="last-cont">
          <div className="one">
            <span style={{ color: "white" }}>
              © 2023 <span style={{ color: "yellow" }}>Nutras</span> Made with
            </span>
          </div>

          <div className="two">
            <span style={{ color: "white" }}>
              Terms of Service * Privacy Policy * Sitemap * Security
            </span>
          </div>
        </div>
      </div> */}

    <div className="footer-main-cont">
      <div className="footer-container">
        <div className="footer-left-content">
          <h1 className="footer-heading">NUTRAS</h1>
          <br/>
          <p className="footer-sub-para">This Life Style For Your Fitness Not Only Diet.</p>
          <br/>
          <button className="footer-button">Try Nutras</button>
        </div>
    
        <div className="footer-right-content">
          <ul className="footer-category-list">
            <li className="footer-category-list-items main-item-heading">Nav Links</li>
            <li className="footer-category-list-items">Home</li>
            <li className="footer-category-list-items">About Links</li>
            <li className="footer-category-list-items">Blogs</li>
            <li className="footer-category-list-items">Contact</li>
          </ul>
          <ul className="footer-category-list">
            <li className="footer-category-list-items main-item-heading">Help Links</li>
            <li className="footer-category-list-items">Privacy Policy</li>
            <li className="footer-category-list-items">Discussion</li>
            <li className="footer-category-list-items">Terms & Conditions</li>
            <li className="footer-category-list-items">Customer Support</li>
            <li className="footer-category-list-items">Course FAQ,s</li>
            <li className="footer-category-list-items">Online Classes</li>
          </ul>
          <ul className="footer-category-list">
            <li className="footer-category-list-items main-item-heading">Fitness Related</li>
            <li className="footer-category-list-items">Daily Exercise</li>
            <li className="footer-category-list-items">Find Your Balance</li>
            <li className="footer-category-list-items">Personal Program</li>
            <li className="footer-category-list-items">Natural Process</li>
            <li className="footer-category-list-items">Immune System</li>
          </ul>
        </div>
      </div>
      <br/>
      <div className="footer-bottom-part">
      © 2023 Nutras Made with Terms of Service * Privacy Policy * Sitemap * Security
      </div>
    </div>
    </>
  );
};

export default Footer;
