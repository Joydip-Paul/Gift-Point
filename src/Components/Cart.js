import React, { useContext } from "react";
import { CartContext } from "../Global/CartContext";
import "./CSS/Cart.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
 import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Cart = (props) => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  const handleToken = async (token) => {
    const product = {name: 'All Products', price: totalPrice}
    const response = await axios.post("http://localhost:8080/checkout", {
      product,
      token
    });
    const { status } = response.data;
    if (status === "success") {
      dispatch({ type: 'EMPTY' });
      props.history.push('/');
      toast.success("You Have Paid Successfully", {position: toast.POSITION.TOP_RIGHT});
    }
    console.log(response);
  };
  return (
    <div className="cart-container">
      <div className="details">
        {shoppingCart.length > 0 ? (
          shoppingCart.map((cart) => (
            <div className="cart" key={cart.id}>
              <span className="cart-image">
                <img src={cart.image} alt="not found"></img>
              </span>
              <span className="cart-product-name">{cart.name}</span>
              <span className="cart-product-price">{cart.price}</span>
              <span
                className="inc"
                onClick={() => dispatch({ type: "INC", id: cart.id, cart })}
              >
                <i className="fas fa-plus"></i>
              </span>
              <span className="cart-product-qty">{cart.qty}</span>
              <span
                className="dec"
                onClick={() => dispatch({ type: "DEC", id: cart.id, cart })}
              >
                <i className="fas fa-minus"></i>
              </span>
              <span className="product-total-price">
                {cart.price * cart.qty} Taka
              </span>
              <span
                className="del"
                onClick={() => dispatch({ type: "DELETE", id: cart.id, cart })}
              >
                <i className="fas fa-trash"></i>
              </span>
            </div>
          ))
        ) : (
          <div className="empty">
            <h2>Sorry your cart is currently empty</h2>
            <p>&#128542;</p>
          </div>
        )}

        {/* Cart Summary */}
      </div>
      {shoppingCart.length > 0 ? (
        <div className="cart-summary">
          <div className="summary">
            <h3>Cart Summary</h3>
            <div className="total-items">
              <div className="items">
                <p>Total Items</p>
              </div>
              <div className="items-count">
                <p>{qty}</p>
              </div>
            </div>
            <div className="total-price-section">
              <p className="just-title">Total Price</p>
              <p className="item-price">{totalPrice}.00 Taka</p>
            </div>
            <div className="stripe-section">
              <StripeCheckout
                stripeKey="pk_test_51IeDs2DIAcdqkF1sEXljvSfEBhspVgF6i4PwCSeV8SEEOyZgDquuTevGUzyO1ihSJfe5lXJ7e7MNDbTY3e7TkVOT00IfOGNh3C"
                token={handleToken}
                billingAddress
                shippingAddress
                amount={totalPrice * 100}
                name="All Products"
              ></StripeCheckout>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
