import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div className="list">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h3>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
