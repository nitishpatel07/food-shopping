import React from "react";
import ButtonAdd from "../../ButtonAdd";
import { useDispatch, useSelector } from "react-redux";

const MenuCard = ({ item }) => {
  const { id, name, info, price, img } = item;

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cartReducer);

  const totalCartCount = cartItems.reduce(
    (accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity,
    0
  );

  const handleItemQty = () => {
    let quantity = 0;
    if (totalCartCount !== 0) {
      const foundItemInCart = cartItems.find((foodItem) => foodItem.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

  const addToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  const removeFromCart = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
  };

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
        <ButtonAdd
          quantity={handleItemQty()}
          handleCartAddItem={() => addToCart(item)}
          handleCartRemoveItem={() => removeFromCart(item)}
        />
        {/* <button onClick={() => addToCart(item)}>ADD</button> */}
      </div>
    </div>
  );
};

export default MenuCard;
