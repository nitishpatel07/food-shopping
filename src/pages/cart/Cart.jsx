import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Menu from "../../components/common/Menu/Menu";
import { menuItemsData } from "../../components/common/Menu/data";
import EmptyCart from "../../components/emptyCart/EmptyCart";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);

  const totalCartCount = cartItems.reduce(
    (accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity,
    0
  );

  const totalCartAmt = cartItems.reduce(
    (accumulatedQty, cartItem) =>
      accumulatedQty + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <div>
      <Header />

      <div className="order">
        <h1 className="order-heading">Your Orders</h1>

        {totalCartCount !== 0 ? <Menu list={cartItems} /> : <EmptyCart />}

        <h2 className="order-total">Order Total: ${totalCartAmt}</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
