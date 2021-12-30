import React from "react";
import { UilPlus, UilMinus } from "@iconscout/react-unicons";

const ButtonAdd = ({ quantity }) => {
  return (
    <div>
      {quantity === 0 ? (
        <button className="btn-cart">Add Item +</button>
      ) : (
        <button className="btn-cart flex flex-row items-center justify-between">
          <UilMinus />
          {quantity}
          <UilPlus />
        </button>
      )}
    </div>
  );
};

export default ButtonAdd;
