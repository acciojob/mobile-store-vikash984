import React, { useState } from 'react';

const AdminPanel = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });

  const addProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({ name: '', description: '', price: '' });
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Add New Product</h2>
      <input 
        type="text" 
        value={newProduct.name} 
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
        placeholder="Product Name" 
      />
      <input 
        type="text" 
        value={newProduct.description} 
        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} 
        placeholder="Product Description" 
      />
      <input 
        type="number" 
        value={newProduct.price} 
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
        placeholder="Product Price" 
      />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default AdminPanel;
