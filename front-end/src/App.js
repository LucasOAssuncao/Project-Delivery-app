import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { Route, Redirect, Switch } from 'react-router-dom';
// import ProviderLogin from './store/ProviderLogin';
import LoginPage from './pages/Login/LoginPage';

function App() {
  return (

    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={ LoginPage } />
    </Switch>

  );
}

export default App;
