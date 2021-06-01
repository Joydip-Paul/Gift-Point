import React, { createContext, useState } from 'react';

import watch1 from '../IMG/watch1.jpg';
import watch2 from '../IMG/watch2.jpg';
import book1 from "../IMG/book1.jpg";
import book2 from "../IMG/book2.jpg";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState([
      { id: 1, name: "Watch", price: 300, image: watch1, status: "new" },
      { id: 1, name: "Watch", price: 300, image: watch1, status: "new" },
      { id: 2, name: "New Watch", price: 300, image: watch2, status: "new" },
      { id: 2, name: "New Watch", price: 300, image: watch2, status: "hot" },
      { id: 3, name: "Book", price: 300, image: book1, status: "new" },
      { id: 4, name: "New Book", price: 300, image: watch1, status: "hot" },
      { id: 5, name: "New Book", price: 300, image: book2, status: "new" },
      { id: 6, name: "New Book", price: 300, image: watch1, status: "new" },
    ]);
    return (
        <ProductsContext.Provider value={{ products: [...products] }}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;