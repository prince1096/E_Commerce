import "./Footer.css";

import { NavLink, useNavigate } from "react-router-dom";

import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { SlSocialTwitter } from "react-icons/sl";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  const navigate = useNavigate();

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
          <NavLink
            to="
          https://www.instagram.com/codewithprinceraj/
          "
          ></NavLink>

          <button
            target="_blank"
            className="footer_button_links"
            onClick={() =>
              navigate("https://www.instagram.com/codewithprinceraj/")
            }
          >
            <GrInstagram />
          </button>

          {/* <a href="https://www.instagram.com/codewithprinceraj/> <GrInstagram /></a> */}

          <button
            target="_blank"
            className="footer_button_links"
            onClick={() =>
              navigate("https://www.instagram.com/codewithprinceraj/")
            }
          >
            <GrLinkedin />
          </button>

          <button
            target="_blank"
            className="footer_button_links"
            onClick={() =>
              navigate("https://www.instagram.com/codewithprinceraj/")
            }
          >
            <SlSocialTwitter />
          </button>

          <button
            target="_blank"
            className="footer_button_links"
            onClick={() =>
              navigate("https://www.instagram.com/codewithprinceraj/")
            }
          >
            <SiGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
