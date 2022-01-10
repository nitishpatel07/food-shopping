import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const char = user.user.email.indexOf("@");

  const name = user.user.email.slice(0, char);

  const logout = () => {
    localStorage.removeItem("currentUser");
    window.location.pathname = "/signin";
  };

  return (
    <div className="flex flex-row justify-between items-center mt-2">
      <div>
        <div className="flex flex-row items-center">
          <img src={logo} alt="logo" className="md:w-16 w-12 mr-2" />
          <h1 className="logo-heading">TASTE</h1>
        </div>
        <div className="">
          <h2 className="logo-sub-heading">Restautant and BBQ</h2>
        </div>
      </div>
      <div className="">
        <h1 className="md:text-2xl text-lg mt-4">
          Welcome{" "}
          <span className="font-bold  underline underline-offset-1 cursor-pointer">
            {name}
          </span>
        </h1>

        <div className="flex flex-row justify-between mt-1 md:text-xl text-md">
          <h2 className=" hover:underline underline-offset-1" onClick={logout}>
            Logout
          </h2>
          <h2 className=" hover:underline underline-offset-1">Orders</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
