import React, { useContext } from "react";
import { ProductsContext } from "../Global/ProductsContext";
import './CSS/Products.css'

const Products = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
            <div className="product-img">
              <img src={product.image} alt="not found" />
            </div>
            <div className="product-details">
              <div className="product-name">{product.name}</div>
              <div className="product-price">{product.price}.00 Taka</div>
                  </div>
                  {product.status === "new" ? <div className = "new">New</div> : ""}
                  {product.status === "hot" ? <div className = "hot">Hot</div> : ""}
          <div className="add-to-cart">
            <p>Add To Cart</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
