import React from "react";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import { useHistory } from "react-router-dom";

const CartCount = () => {
  const history = useHistory();
  return (
    <div
      className="fixed cursor-pointer top-8 right-3 h-16 w-16 bg-black rounded-2xl flex flex-row items-center rotate-45 "
      onClick={() => history.push("/cart")}
    >
      <span className="bg-red-600 text-white h-6 w-6 rounded-full text-center absolute -left-2 -top-2 -rotate-45">
        0
      </span>
      <UilShoppingCartAlt className="text-white absolute left-5 -rotate-45" />
    </div>
  );
};

export default CartCount;
