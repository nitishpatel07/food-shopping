import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col mt-2">
      <div className="flex flex-row items-center">
        <img src={logo} alt="logo" className="md:w-16 w-12 mr-2" />
        <h1 className="logo-heading">TASTE</h1>
      </div>
      <div className="">
        <h2 className="logo-sub-heading">Restautant and BBQ</h2>
      </div>
    </div>
  );
};

export default Header;
