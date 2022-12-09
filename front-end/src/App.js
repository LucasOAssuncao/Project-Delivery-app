import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { Route, Redirect, Switch } from 'react-router-dom';
// import ProviderLogin from './store/ProviderLogin';
import LoginPage from './pages/Login/LoginPage';
import Register from './pages/Register/Register';
import CustomerProducts from './pages/CostumerProducts/CostumerProducts';
import Checkout from './pages/Checkout/CheckoutPage';

function App() {
  return (

    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={ LoginPage } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ CustomerProducts } />
      <Route path="/customer/checkout" component={ Checkout } />
    </Switch>

  );
}

export default App;
