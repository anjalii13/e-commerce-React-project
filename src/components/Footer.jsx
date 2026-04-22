import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-light pt-5 pb-4 mt-2" style={{ backgroundColor: "rgb(251, 219, 245)" }}>
      <div className="container">
        <div className="row">

          {/* Column 1 */}
          <div className="col-md-3">
            <h6 className="fw-bold" style={{ color: "rgb(231, 18, 174)" }}>ONLINE SHOPPING</h6>
            <ul className="list-unstyled mt-3">
              <li><Link to="/men" className="footer-link">Men</Link></li>
              <li><Link to="/women" className="footer-link">Women</Link></li>
              <li><Link to="/kids" className="footer-link">Kids</Link></li>
              <li><Link to="/home" className="footer-link">Home</Link></li>
              <li><Link to="/beauty" className="footer-link">Beauty</Link></li>
            </ul>

            <h6 className="fw-bold mt-4" style={{ color: "rgb(231, 18, 174)" }}>USEFUL LINKS</h6>
            <ul className="list-unstyled mt-3">
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
              <li><Link to="/sitemap" className="footer-link">Site Map</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3">
            <h6 className="fw-bold" style={{ color: "rgb(231, 18, 174)" }}>CUSTOMER POLICIES</h6>
            <ul className="list-unstyled mt-3">
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
              <li><Link to="/terms" className="footer-link">Terms Of Use</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3">


            <div className="d-flex gap-2 ">
              
            </div>

            <h6 className="fw-bold" style={{ color: "rgb(231, 18, 174)" }}>KEEP IN TOUCH</h6>
            <div className="d-flex gap-3 mt-3 fs-5">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-md-3">
            <p style={{ color: "rgb(231, 18, 174)" }}><strong>100% ORIGINAL</strong> guarantee for all products</p>
            <p className="mt-3" style={{ color: "rgb(231, 18, 174)" }}><strong>Return within 14 days</strong> of receiving your order</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;