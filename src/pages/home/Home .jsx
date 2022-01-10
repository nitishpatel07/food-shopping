import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import Banner from "../../components/banner/Banner";
import Menu from "../../components/common/Menu/Menu";
import Footer from "../../components/common/Footer";
import CartCount from "../../components/common/CartCount";
import { menuItemsData } from "../../components/common/Menu/data";
import fireDB from "../../fireConfig";

import { collection, addDoc, getDocs } from "firebase/firestore";

const Home = () => {
  // async function addData() {
  //   // await addDoc(collection(fireDB, "users"), {
  //   //   name: "Tokyo",
  //   //   age: 25,
  //   // });
  //   try {
  //     await addDoc(collection(fireDB, "users"), {
  //       name: "Tokyo",
  //       age: 25,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const [products, setProducts] = useState([]);

  // function addData() {
  //   menuItemsData.map(async (product) => {
  //     try {
  //       await addDoc(collection(fireDB, "products"), {
  //         ...product,
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });
  // }

  async function getData() {
    try {
      const users = await getDocs(collection(fireDB, "products"));
      const productsArray = [];
      users.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        const obj = {
          id: doc.id,
          ...doc.data(),
        };

        productsArray.push(obj);
      });

      setProducts(productsArray);
    } catch (err) {
      console.log(err);
    }
  }
  console.log(products);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <Menu list={products} />
      <Footer />
      <CartCount />
    </div>
  );
};

export default Home;
