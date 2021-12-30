import React from "react";
import MenuCard from "./MenuCard/MenuCard";

const Menu = ({ list }) => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-10 gap-3">
      {list.map((item) => (
        <div>
          <MenuCard key={item.id} item={item} />
        </div>
      ))}
    </div>
  );
};

export default Menu;
