import React from "react";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between items-center py-4 mt-8 border-t-black border-t">
      <h1 className="footer-description md:w-1/2 w-4/6 ">
        We're a team of Professional cooks who are excited about our food, Good
        food good life.
      </h1>
      <img src={logo} alt="logo" className="md:w-16 w-12 mr-2" />
    </div>
  );
};

export default Footer;
