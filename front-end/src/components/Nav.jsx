import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router';

function NavBar({ userRole = 'customer' }) {
  const [user, setUser] = useState('user');
  const history = useHistory();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cartItems');
    history.push('/');
  };

  const redirect = () => {
    if (user.role === 'seller') {
      history.push('/seller/orders');
    }

    if (user.role === 'customer') {
      history.push('/customer/orders');
    }

    if (user.role === 'administrator') {
      history.push('/admin/manage');
    }
    window.location.reload(false);
  };

  return (
    <div className="containerNav">
      <div className="container">
        {userRole === 'customer' && (
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
            onClick={ () => history.push('/customer/products') }
          >
            PRODUTOS
          </button>
        )}
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ redirect }
        >
          {user.role === 'administrator'
            ? 'GERENCIAR USUÁRIOS'
            : 'MEUS PEDIDOS'}
        </button>
      </div>
      <div className="container">
        <p data-testid="customer_products__element-navbar-user-full-name">
          {user.name}
        </p>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logout }
        >
          Sair
        </button>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  userType: PropTypes.string,
}.isRequired;

export default NavBar;
