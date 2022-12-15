import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import Register from './pages/Register/Register';
import PedidoStatus from './pages/PedidoStatus/PedidoStatus';
import CustomerProducts from './pages/CostumerProducts/CostumerProducts';
import ManageAdm from './pages/ManageAdm/ManageAdm';
import Checkout from './pages/Checkout/CheckoutPage';
import OrderDetails from './pages/OrderDetails/OrderDetails';

function App() {
  return (

    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login" component={ LoginPage } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/orders/:id" component={ OrderDetails } />
      <Route path="/seller/orders/:id" component={ OrderDetails } />
      <Route path="/customer/orders" component={ PedidoStatus } />
      <Route path="/seller/orders" component={ PedidoStatus } />
      <Route path="/customer/products" component={ CustomerProducts } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route path="/admin/manage" component={ ManageAdm } />
    </Switch>

  );
}

export default App;
