import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <img src={product.image} alt={product.name} width="150" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button className="btn" onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default ProductDetails;
