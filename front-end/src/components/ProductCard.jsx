import React from 'react';
import { PropTypes } from 'prop-types';

function ProductCard({ id, price, img, name, addItem, removeItem, qtd = 0, setItem }) {
  const handleChange = ({ target: { value } }) => {
    setItem({ id,
      name,
      price,
      urlImage: img,
      quantity: Number(value),
    });
  };
  return (
    <div key={ id } className="cardFather">
      <span>
        R$
        {' '}
        <span
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {price.replace(/\./, ',')}
        </span>
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ img }
        alt={ name }
      />
      <span
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}

      </span>
      <div className="card-division">
        <button
          className="qty-btn"
          onClick={ () => removeItem(id) }
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }

        >
          -

        </button>
        <input
          className="qty-input"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          id="productQtdInput"
          placeholder="0"
          value={ qtd }
          onChange={ handleChange }
        />
        <button
          className="qty-btn"
          onClick={ () => addItem({
            id, name, price, urlImage: img, quantity: 1 }) }
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }

        >
          +

        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
  addItem: PropTypes.function,
  removeItem: PropTypes.function,
  setItem: PropTypes.function,
  qtd: PropTypes.number,
}.isRequired;

export default ProductCard;
