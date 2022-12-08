import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router';

function CartButton({ total }) {
  const history = useHistory();

  return (
    <div className="containerCartButton">
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => {
          history.push('/customer/checkout');
          localStorage.setItem('totalPrice', JSON.stringify(total));
        } }
        disabled={ total === 0 }
      >
        Carrinho
        <span>
          R$
          {' '}
          <span data-testid="customer_products__checkout-bottom-value">
            {total.toFixed(2).replace(/\./, ',')}
          </span>
        </span>
      </button>
    </div>
  );
}

CartButton.propTypes = {
  total: PropTypes.number,
}.isRequired;

export default CartButton;
