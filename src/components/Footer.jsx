import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to="/" className="logo">
            <h4>PHOENIX</h4>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            nesciunt illum tempore autem? Dolor, et.
          </p>
          <div className="footer_socials">
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <AiOutlineTwitter />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer_copyright">
        <small>2024 PHOENIX &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};
export default Footer;
