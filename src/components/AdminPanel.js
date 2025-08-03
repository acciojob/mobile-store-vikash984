import React, { useState } from "react";

function AdminPanel({ products, setProducts }) {
  const [form, setForm] = useState({ name: "", description: "", image: "", price: "" });

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (id, updatedProduct) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p)));
  };

  const handleAdd = () => {
    if (!form.name || !form.description || !form.image || !form.price) return;
    const newProduct = {
      ...form,
      id: Date.now(),
      price: parseFloat(form.price),
    };
    setProducts([...products, newProduct]);
    setForm({ name: "", description: "", image: "", price: "" });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <input
          className="form-control"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {products.map((product, index) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <input
            className="form-control"
            value={product.price}
            onChange={(e) =>
              handleEdit(product.id, { price: parseFloat(e.target.value) })
            }
          />
          <button className="float-right" onClick={() => handleEdit(product.id, { price: product.price })}>
            Save
          </button>
          <button className="float-right" onClick={() => handleDelete(product.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
