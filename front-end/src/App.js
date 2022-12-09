import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { Route, Redirect, Switch } from 'react-router-dom';
// import ProviderLogin from './store/ProviderLogin';
import LoginPage from './pages/Login/LoginPage';
import Register from './pages/Register/Register';
import CustomerProducts from './pages/CostumerProducts/CostumerProducts';
import ManageAdm from './pages/ManageAdm/ManageAdm';

function App() {
  return (

    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={ LoginPage } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ CustomerProducts } />
      <Route path="/admin/manage" component={ ManageAdm } />
    </Switch>

  );
}

export default App;
