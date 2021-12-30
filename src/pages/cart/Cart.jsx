import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Menu from "../../components/common/Menu/Menu";
import { menuItemsData } from "../../components/common/Menu/data";
import EmptyCart from "../../components/emptyCart/EmptyCart";

const Cart = () => {
  return (
    <div>
      <Header />

      <div className="order">
        <h1 className="order-heading">Your Orders</h1>
        <EmptyCart />
        {/* <Menu list={menuItemsData} /> */}
        <h2 className="order-total">Order Total: $23</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
