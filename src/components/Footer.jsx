import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeProvider";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={` pt-5 pb-4 mt-2 ${theme === 'light' ? 'light-navbar' : 'bg-secondary text-light'}`}>
      <div className="container">
        <div className="row">

          {/* Column 1 */}
          <div className="col-md-3">
            

            <h6 className={`fw-bold  ${theme === 'light' ? 'icon-light' : 'icon-dark'}`}>USEFUL LINKS</h6>
            <ul className="list-unstyled mt-3">
              <li><Link to="https://blog.myntra.com/" className="footer-link" style={{textDecoration:'none'}}>Blog</Link></li>
              <li><Link to="https://careers.myntra.com/" className="footer-link" style={{textDecoration:'none'}}>Careers</Link></li>
              <li><Link to="https://www.myntra.com/sitemap" className="footer-link" style={{textDecoration:'none'}}>Site Map</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3">
            <h6 className={`fw-bold ${theme === 'light' ? 'icon-light' : 'icon-dark'}`}>CUSTOMER POLICIES</h6>
            <ul className="list-unstyled mt-3">
              <li><Link to="https://life.myntra.com/contact/" className="footer-link" style={{textDecoration:'none'}}>Contact Us</Link></li>
              <li><Link to="https://www.myntra.com/faqs" className="footer-link" style={{textDecoration:'none'}}>FAQ</Link></li>
              <li><Link to="https://life.myntra.com/terms/" className="footer-link" style={{textDecoration:'none'}}>Terms Of Use</Link></li>
              <li><Link to="https://life.myntra.com/privacy-policy/" className="footer-link" style={{textDecoration:'none'}}>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3">


            <div className="d-flex gap-2 ">

            </div>

            <h6 className={`fw-bold ${theme === 'light' ? 'icon-light' : 'icon-dark'}`}>KEEP IN TOUCH</h6>
            <div className="d-flex gap-3 mt-3 fs-5">
              <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fmyntra%2F"><FaFacebookF /></a>
              <a href="https://x.com/myntra"><FaTwitter /></a>
              <a href="https://www.youtube.com/channel/UCMlJjMRSKaUQhXQ_9XjCGpg"><FaYoutube /></a>
              <a href="https://www.instagram.com/myntra/?hl=en"><FaInstagram /></a>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-md-3">
            <p className={`${theme === 'light' ? 'icon-light' : 'icon-dark'}`}><strong>100% ORIGINAL</strong> guarantee for all products</p>
            <p className={`mt-3 ${theme === 'light' ? 'icon-light' : 'icon-dark'}`}><strong>Return within 14 days</strong> of receiving your order</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;