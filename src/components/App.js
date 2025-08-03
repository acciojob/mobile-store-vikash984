import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import AdminPanel from "./components/AdminPanel";

import { initialProducts } from "./data";
import "./styles.css";

function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/admin">Admin Panel</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/products/:id" element={<ProductDetails products={products} />} />
        <Route
          path="/admin"
          element={<AdminPanel products={products} setProducts={setProducts} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
