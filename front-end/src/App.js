import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { Route, Redirect, Switch } from 'react-router-dom';
// import ProviderLogin from './store/ProviderLogin';
import LoginPage from './pages/Login/LoginPage';
import Register from './pages/Register/Register';
import PedidoStatus from './pages/PedidoStatus/PedidoStatus';

function App() {
  return (

    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={ LoginPage } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/orders" component={ PedidoStatus } />
    </Switch>

  );
}

export default App;
