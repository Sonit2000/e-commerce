import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
const About = () => {
  // const visitInstagram = () => {
  //   window.location = "https://www.instagram.com/boornguyen";
  // };
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
              alt="Founder"
            />
            <Typography>Nguyễn Hoàng Sơn 1851150046</Typography>
            <Typography> Nguyễn Văn Khánh Dương 1851150007</Typography>
            {/* <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button> */}
            <span>
              Thực tập tốt nghiệp Website thương mại điện tử
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
