import React, { createContext, useState } from "react";

import watch1 from "../IMG/watch1.jpg";
import watch2 from "../IMG/watch2.jpg";
import book1 from "../IMG/book1.jpg";
import book2 from "../IMG/book2.jpg";
import headphone from "../IMG/headphone.jpg";
import airbuds from "../IMG/airbuds.jpg";
import speaker from "../IMG/speaker.jpg";
import perfume1 from "../IMG/perfume1.png";
import perfume2 from "../IMG/perfume2.jpg";
import ladiesBag1 from "../IMG/ladiesBag1.jpg";
import ladiesBag2 from "../IMG/bag.png";
import Showpiece1 from "../IMG/show1.jpg";
import Showpiece2 from "../IMG/show2.jpg";


export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products] = useState([
    { id: 1, name: "Buka Airbuds", price: 300, image: airbuds, status: "new" },
    { id: 2, name: "Watch", price: 500, image: watch1, status: "hot" },
    { id: 3, name: "New Watch", price: 1500, image: watch2, status: "new" },
    {
      id: 4,
      name: "Garia Headphone",
      price: 300,
      image: headphone,
      status: "hot",
    },
    { id: 5, name: "Book", price: 7900, image: book1, status: "new" },
    {
      id: 6,
      name: "New Showpiece",
      price: 1900,
      image: Showpiece1,
      status: "hot",
    },
    { id: 7, name: "New Book", price: 9400, image: book2, status: "new" },
    {
      id: 8,
      name: "Bluetooth speaker",
      price: 300,
      image: speaker,
      status: "new",
    },
    { id: 9, name: "perfume", price: 300, image: perfume1, status: "new" },
    {
      id: 10,
      name: "Komdami Showpiece",
      price: 500,
      image: Showpiece2,
      status: "hot",
    },
    { id: 11, name: "New Watch", price: 1500, image: watch2, status: "new" },
    {
      id: 12,
      name: "perfume",
      price: 300,
      image: perfume2,
      status: "hot",
    },
    {
      id: 13,
      name: "ladies Bag",
      price: 7900,
      image: ladiesBag1,
      status: "new",
    },
    {
      id: 14,
      name: "Funky Airbuds",
      price: 1900,
      image: airbuds,
      status: "hot",
    },
    { id: 15, name: "New Book", price: 9400, image: book2, status: "new" },
    {
      id: 16,
      name: "ladies Bag",
      price: 300,
      image: ladiesBag2,
      status: "new",
    },
  ]);
  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
