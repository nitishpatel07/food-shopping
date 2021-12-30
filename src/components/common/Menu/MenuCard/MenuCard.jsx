import React from "react";
import ButtonAdd from "../../ButtonAdd";

const MenuCard = ({ item }) => {
  const { name, info, price, img } = item;
  return (
    <div className="bg-white item flex flex-col text-center md:p-3.5 p-2 rounded-md drop-shadow-md">
      <img
        src={img}
        alt="item"
        className="item-image md:h-52 h-32 object-contain"
      />
      <div className="item-details">
        <h1 className="item-name">{name}</h1>
        <p className="item-description">{info}</p>
      </div>
      <div className="item-footer flex flex-row items-center justify-between">
        <span className="item-price">${price}</span>
        <ButtonAdd quantity={0} />
      </div>
    </div>
  );
};

export default MenuCard;
