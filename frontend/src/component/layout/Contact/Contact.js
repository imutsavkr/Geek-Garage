import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:utsavkumar9920@gmail.com">
        <Button>Contact: utsavkumar9920@gmail.com</Button>
      </a>
      <a className="mailBtn" href="https://github.com/imutsavkr/Geek-Garage">
        <Button>SOURCE CODE</Button>
      </a>
      <span>
      "If you want truly to understand something, try to change it." – Kurt Lewin
      </span>
    </div>
  );
};

export default Contact;
