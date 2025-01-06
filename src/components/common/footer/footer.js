import { useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();
  function blog() {
    navigate("/blog");
  }
  function contact() {
    navigate("/contact");
  }
  function home() {
    navigate("/home");
  }

  function about() {
    navigate("/about");
  }

  function ask() {
    navigate("/askNutras");
  }
  return (
    <>

    <div className="footer-main-cont">
      <div className="footer-container">
        <div className="footer-left-content">
          <h1 className="footer-heading">NUTRAS</h1>
          <br/>
          <p className="footer-sub-para">This Life Style For Your Fitness Not Only Diet.</p>
          <br/>
          <button className="footer-button" onClick={ask}>Try Nutras</button>
        </div>
    
        <div className="footer-right-content">
          <ul className="footer-category-list">
            <li className="footer-category-list-items main-item-heading">Nav Links</li>
            <li className="footer-category-list-items" onClick={home}>Home</li>
            <li className="footer-category-list-items" onClick={about}>About</li>
            <li className="footer-category-list-items" onClick={blog}>Blogs</li>
            <li className="footer-category-list-items" onClick={contact}>Contact</li>
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
