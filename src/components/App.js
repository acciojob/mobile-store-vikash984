import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/admin" component={AdminPanel} />
      </Switch>
    </Router>
  );
}

export default App;
