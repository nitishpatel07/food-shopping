import React from "react";
import { UilPlus, UilMinus } from "@iconscout/react-unicons";

const ButtonAdd = ({ quantity, handleCartAddItem, handleCartRemoveItem }) => {
  return (
    <div>
      {quantity === 0 ? (
        <button className="btn-cart" onClick={handleCartAddItem}>
          Add Item +
        </button>
      ) : (
        <button className="btn-cart flex flex-row items-center justify-between">
          <UilMinus onClick={handleCartRemoveItem} />
          {quantity}
          <UilPlus onClick={handleCartAddItem} />
        </button>
      )}
    </div>
  );
};

export default ButtonAdd;
