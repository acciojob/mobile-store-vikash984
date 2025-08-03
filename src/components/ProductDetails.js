import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link to="/">Back to Products</Link>
    </div>
  );
};

export default ProductDetails;
