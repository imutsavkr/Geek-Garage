import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Geek Garage</h1>
        <p>High Quality is our first priority</p>

        <p> No &copy; Copyright issues.</p>
        <p>Feel free to copy. If you need any help, ping me !</p>

      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://github.com/imutsavkr">Github</a>
        <a href="https://www.youtube.com/channel/UC3WbnN3Y-33qE_7cmaNmU5Q">Youtube</a>
        <a href="https://www.linkedin.com/in/utsav-kumar-58a654177/">Linkedin</a>
      </div>
    </footer>
  );
};

export default Footer;