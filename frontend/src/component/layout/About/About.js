import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://imutsavkr.github.io/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dbnspghf9/image/upload/v1651312018/avatars/46110130_UtsavKumar_Banglore_11zon_dr0ulo.jpg"
              alt="Founder"
            />
            <Typography>Utsav Kumar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Portfolio
            </Button>
            <span>
              "It is not knowledge, but the act of learning, not possession, but the act of getting there which generates the greatest satisfaction." – Carl Friedrich Gauss, mathematician and physicist

            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow Me</Typography>
            <a
              href="https://www.youtube.com/channel/UC3WbnN3Y-33qE_7cmaNmU5Q"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://github.com/imutsavkr" target="blank">
              <GitHub className="githubSvgIcon" />
            </a>
           
            <a href=" https://www.linkedin.com/in/utsav-kumar-58a654177/" target="blank">
              <LinkedIn className="githubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
