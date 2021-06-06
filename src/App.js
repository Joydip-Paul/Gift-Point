import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import ProductsContextProvider from "./Global/ProductsContext";
import Cart from "./Components/Cart";
import NotFound from "./Components/NotFound";
import CartContextProvider from "./Global/CartContext";
import Footer from "./Components/Footer";
import './res.css'

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <switch>
              <Route path="/" exact component={Products} />
              <Route path="/cart" exact component={Cart} />
              <Route component={NotFound} />
            </switch>
            <Footer />
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
