/* eslint-disable react/jsx-max-depth */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import NavBar from '../../components/Nav';

function Checkout() {
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [sellers, setSellers] = useState([]);
  const [sellerId, setSellerId] = useState({});
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [user, setUser] = useState();
  const [address, setAddress] = useState({});

  const history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:3001/sellers')
      .then((response) => {
        const { data } = response;
        setSellers(data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    const detailsProduct = JSON.parse(localStorage.getItem('cart'));
    setProducts(detailsProduct);

    const getTotalPrice = localStorage.getItem('totalPrice');
    setTotalPrice(getTotalPrice);

    const getUser = JSON.parse(localStorage.getItem('user'));
    setUser(getUser);
  }, []);

  const onClickButtonFinalizeOrder = async () => {
    const data = {
      user: user.id,
      sellerId,
      totalPrice,
      address,
      products,
    };
    const storage = localStorage.getItem('token');
    axios.defaults.headers.common = { Authorization: storage };
    await axios
      .post('http://localhost:3001/order', data)
      .then((response) => {
        history.push(`/customer/orders/${response.data.saleId}`);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const priceValue = (price) => {
    const priceNumber = Number(price);
    return priceNumber.toFixed(2).toString().replace('.', ',');
  };

  const subTotalValue = (price, quantity) => {
    const resultMult = Number(price) * Number(quantity);
    return resultMult.toFixed(2).toString().replace('.', ',');
  };

  const removeItemFromCart = (index /* price, quantity */) => {
    const removeItem = products.filter((item, indice) => indice !== index);
    localStorage.setItem('cart', JSON.stringify(removeItem));
    setTotalPrice(removeItem.reduce((acc, i) => i.price * i.quantity + acc, 0));
    setProducts(removeItem);
  };

  return (
    <div className="checkout-container">
      <NavBar />
      <div className="content-checkout-container">
        <div className="table-container">
          <h1>Finalizar Pedido</h1>
          <table>
            <thead>
              <tr>
                <th>
                  Item
                </th>
                <th>
                  Descrição
                </th>
                <th>
                  Quantidade
                </th>
                <th>
                  Valor Unitário
                </th>
                <th>
                  Sub-total
                </th>
                <th>
                  Remover Item
                </th>
              </tr>
            </thead>

            <tbody>
              {
                products.map((product, index) => (
                  <tr key={ product.name }>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-item-number-${index}`
                      }
                    >
                      {`${index + 1}`}
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-name-${index}`
                      }
                    >
                      {product.name}
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-quantity-${index}`
                      }
                    >
                      {product.quantity}
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-unit-price-${index}`
                      }
                    >
                      {`R$ ${priceValue(product.price)}`}
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-sub-total-${index}`
                      }
                    >
                      {`R$ ${subTotalValue(product.price, product.quantity)}`}
                    </td>
                    <td>
                      <button
                        type="button"
                        data-testid={
                          `customer_checkout__element-order-table-remove-${index}`
                        }
                        onClick={ () => {
                          removeItemFromCart(index);
                        } }
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>

          <div>
            <h2
              data-testid="customer_checkout__element-order-total-price"
            >
              {`Total: R$ ${priceValue(totalPrice)}`}

            </h2>
          </div>
        </div>
        <div className="details-container">
          <h1>Detalhes e Endereço para Entrega</h1>
          <div className="seller-details">
            <label htmlFor="select-seller">
              P. Vendedora Responsável:
              <select
                className="seller-select"
                data-testid="customer_checkout__select-seller"
                value={ sellerId }
                onChange={ (event) => {
                  setSellerId(event.target.value, event.target.name);
                } }
              >
                <option>
                  Selecione um vendedor
                </option>
                {sellers.map((option) => (
                  <option
                    key={ option.name }
                    value={ option.id }
                  >
                    {option.name}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="input-address">
              Endereço:
              <input
                className="seller-input"
                type="text"
                name="street"
                data-testid="customer_checkout__input-address"
                value={ street }
                onChange={ ({ target: { value } }) => {
                  setStreet(value);
                  setAddress({ street: value, number });
                } }
              />
            </label>

            <label htmlFor="input-address-number">
              Número:
              <input
                className="seller-input"
                type="text"
                name="number"
                data-testid="customer_checkout__input-address-number"
                value={ number }
                onChange={ ({ target: { value } }) => {
                  setNumber(value);
                  setAddress({ street, number: value });
                } }
              />
            </label>
            <button
              className="seller-button"
              type="button"
              data-testid="customer_checkout__button-submit-order"
              onClick={ () => {
                onClickButtonFinalizeOrder();
              } }
            >
              FINALIZAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
