import React from 'react';
import './CSS/Header.css'
const Navbar = () => {
    return (
      <nav>
        <ul className="left">
          <li>
            <a href="">Gift Point</a>
          </li>
        </ul>
        <ul className="right">
          <li>
            <a href="">
              <span className="shoppingCart">
                <i className="fas fa-cart-arrow-down"></i> <span className = "cartCount">0</span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;