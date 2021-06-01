import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import ProductsContextProvider from "./Global/ProductsContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ProductsContextProvider>
        <div className = "container">
          <Products />
        </div>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
