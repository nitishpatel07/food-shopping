import React from "react";
import Header from "../../components/common/Header";
import Banner from "../../components/banner/Banner";
import Menu from "../../components/common/Menu/Menu";
import Footer from "../../components/common/Footer";
import CartCount from "../../components/common/CartCount";
import { menuItemsData } from "../../components/common/Menu/data";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Menu list={menuItemsData} />
      <Footer />
      <CartCount />
    </div>
  );
};

export default Home;
