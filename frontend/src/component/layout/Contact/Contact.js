import React from "react";
import "./Contact.css";
import { Button, Avatar } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:1851150046@sv.ut.edu.vn">
        <Avatar
          style={{ width: "10vmax", height: "10vmax", margin: "2vmax 160px" }}
          alt="Founder"
        />
        <Button>Contact: 1851150046@sv.ut.edu.vn</Button>
      </a>
      <a className="mailBtn" href="mailto: 1851150007@sv.ut.edu.vn">
        <Avatar
          style={{ width: "10vmax", height: "10vmax", margin: "2vmax 160px", }}
          alt="Founder"
        />
        <Button>Contact: 1851150007@sv.ut.edu.vn</Button>
      </a>
    </div>
  );
};

export default Contact;
