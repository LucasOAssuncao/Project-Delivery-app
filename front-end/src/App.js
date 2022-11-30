import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { BrowserRouter, Route, Switch, Navigate } from 'react-router-dom';
import ProviderLogin from './store/ProviderLogin';
import LoginPage from './pages/Login/LoginPage';

function App() {
  return (
    <ProviderLogin>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ <Navigate to="/login" /> } />
          <Route path="/login" component={ LoginPage } />

        </Switch>
      </BrowserRouter>
    </ProviderLogin>

  );
}

export default App;
