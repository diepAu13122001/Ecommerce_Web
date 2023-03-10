import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import ProductList from './pages/ProductList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ProductDetails}></Route>
          <Route path="/404" component={NotFound}></Route>
          <Route path="/Products" component={ProductList}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
