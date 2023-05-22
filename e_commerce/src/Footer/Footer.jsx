import "./Footer.css";

// import {  useNavigate } from "react-router-dom";

import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { SlSocialTwitter } from "react-icons/sl";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  //   const navigate = useNavigate();

  return (
    <div className="main_footer_container">
      <div className="footer_container">
        <div className="first_footer_container">
          <h3 className="first_footer_content">VastraCart</h3>
          <h5 className="first_footer_content">Developed By Prince Raj</h5>
          <h5 className="first_footer_content">No CopyRight</h5>
        </div>

        <div className="second_footer_container">
          <h4 className="second_footer_content">Resoureces</h4>
          <h5 className="second_footer_content">SignUp</h5>
          <h5 className="second_footer_content">SignIn</h5>
        </div>
      </div>

      <div className="connect_footer_container">
        <h4>Connect</h4>
        <div className="connect_container">
          <a
            target="_blank"
            className="footer_button_links"
            href="https://www.instagram.com/codewithprinceraj/"
            rel="noreferrer"
          >
            <GrInstagram />
          </a>

          <a
            target="_blank"
            className="footer_button_links"
            href="https://www.instagram.com/codewithprinceraj/"
            rel="noreferrer"
          >
            <GrLinkedin />
          </a>

          <a
            target="_blank"
            className="footer_button_links"
            href="https://www.instagram.com/codewithprinceraj/"
            rel="noreferrer"
          >
            <SlSocialTwitter />
          </a>

          <a
            target="_blank"
            className="footer_button_links"
            href="https://www.instagram.com/codewithprinceraj/"
            rel="noreferrer"
          >
            <SiGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;