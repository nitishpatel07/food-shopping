import React from "react";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { useHistory } from "react-router-dom";

const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className="h-[410px]">
      <img
        src="https://merchlist.co/assets/emptycart.png"
        alt="emptyCart-image"
        className="mx-auto"
      />
      <button
        onClick={() => history.push("/")}
        className="btn-emptyCart flex justify-between items-center mx-auto"
      >
        <UilArrowLeft /> <span>Shop Now</span>
      </button>
    </div>
  );
};

export default EmptyCart;
