import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
import bannerImage from "../../images/banner.png";

const Banner = () => {
  return (
    <div className="h-screen grid md:grid-cols-2 md:grid-rows-none grid-rows-2 ">
      <div className="banner-content flex flex-col justify-center">
        <h1 className="banner-heading">Delicious food for your cravings</h1>
        <h2 className="banner-sub-heading">We make fresh and healthy meals</h2>
        <button className="btn-banner flex justify-between items-center md:mx-0 mx-auto">
          <span>View Menu</span> <UilArrowRight />
        </button>
      </div>
      <div className="banner-image self-center ">
        <img src={bannerImage} alt="banner-image" />
      </div>
    </div>
  );
};

export default Banner;
