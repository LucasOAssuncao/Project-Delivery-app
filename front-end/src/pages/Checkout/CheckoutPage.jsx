import React, { useState, useEffect } from 'react';
import NavBar from '../../components/Nav';

function Checkout() {
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [sellers, setSellers] = useState();
  const [seller, setSeller] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [user, setUser] = useState();

  const adress = { street, number };

  useEffect(() => {
    axios.get('http://localhost:3001/sellers')
      .then((response) => {
        const { data } = response;
        setSellers(data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  useEffect(() => {
    const detailsProduct = JSON.parse(localStorage.getItem('cart'));
    setProducts(detailsProduct);

    const getTotalPrice = localStorage.getItem('totalPrice');
    setTotalPrice(getTotalPrice);

    const getUser = JSON.parse(localStorage.getItem('user'));
    setUser(getUser);
  }, [products, totalPrice, user]);

  const onClickButtonFinalizeOrder = async () => {
    await axios
      .post('http://localhost:3001/order', {
        user: user.id,
        sellerId,
        totalPrice,
        adress,
        products,
      })
      .then((response) => response.data)
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  // const clearLocalStorage = (id) => {

  // }

  return (
    <div>
      <NavBar />
      <div>
        <h1>Finalizar Pedido</h1>
        <ul>
          {products.map((product) => (
            <li key="product.name">
              <p>
                Item
              </p>
              <p>
                {product.name}
              </p>
              <p>
                {product.quantity}
              </p>
              <p>
                {product.price}
              </p>
              <p>
                {product.price * product.quantity}
              </p>
              <button type="button" onClick={ () => {} }>
                <h1>
                  Remover
                </h1>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>{`Total: R$ ${totalPrice}`}</h1>
      </div>

      <div>
        <h1>Detalhes e Endereço para Entrega</h1>

        <label htmlFor="select-seller">
          P. Vendedora Responsável:
          <select
            data-testid="select-seller"
            value={ coluna }
            onChange={ (event) => setSeller(event.target.value) }
            id={ `seller-${seller}` }
          >
            {sellers.map((option) => (
              <option
                data-testid="customer_checkout__select-seller"
                key={ option.name }
                value={ option.name }
                onChange={ () => setSellerId(option.id) }
              >
                {option.name}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="input-address">
          Endereço:
          <input
            type="text"
            name="address"
            data-testid="customer_checkout__input-address"
            value={ address }
            onChange={ ({ target: { value } }) => { setStreet(value); } }
          />
        </label>

        <label htmlFor="input-address-number">
          Número:
          <input
            type="text"
            name="addressNumber"
            data-testid="customer_checkout__input-address-number"
            value={ addressNumber }
            onChange={ ({ target: { value } }) => { setNumber(value); } }
          />
        </label>

        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ () => onClickButtonFinalizeOrder() }
        >
          FINALIZAR PEDIDO
        </button>
      </div>

    </div>
  );
}

export default Checkout;
