import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Product List</h1>
      {products.map(product => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <h2>{product.name}</h2>
        </Link>
      ))}
      <Link to="/admin">Go to Admin Panel</Link>
    </div>
  );
};

export default ProductList;
