import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../Global/CartContext';
import './CSS/Header.css'
const Navbar = () => {
  const { qty } = useContext(CartContext);
    return (
      <nav>
        <ul className="left">
          <li>
            <Link to = "/">Gift Point</Link>
          </li>
        </ul>
        <ul className="right">
          <li>
            <Link to = "cart">
              <span className="shoppingCart">
                <i className="fas fa-cart-arrow-down"></i>{" "}
                <span className="cartCount">{qty}</span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;