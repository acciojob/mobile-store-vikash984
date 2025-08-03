// src/components/ProductDetails.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="150" />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <button className="btn" onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default ProductDetails;
