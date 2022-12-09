import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import NavBar from '../../components/Nav';

function Checkout() {
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [sellers, setSellers] = useState([]);
  const [seller, setSeller] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [user, setUser] = useState();

  const adress = { street, number };
  const history = useHistory();
  const { id } = useParams();

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
    await axios
      .post('http://localhost:3001/order', {
        user: user.id,
        sellerId,
        totalPrice,
        adress,
        products,
      })
      .then((response) => response.data.id)
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

  const removeItemFromCart = (index, price, quantity) => {
    const removeItem = products.filter((item, indice) => indice !== index);
    localStorage.setItem('cart', JSON.stringify(removeItem));
    setTotalPrice([...totalPrice] - subTotalValue(price, quantity));
    setProducts(removeItem);
  };

  return (
    <div>
      <NavBar />
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

      <div>
        <h1>Detalhes e Endereço para Entrega</h1>

        <label htmlFor="select-seller">
          <h3>
            P. Vendedora Responsável:
          </h3>
          <select
            data-testid="customer_checkout__select-seller"
            value={ seller }
            onChange={ (event) => setSeller(event.target.value) }
          >
            {sellers.map((option) => (
              <option
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
            name="street"
            data-testid="customer_checkout__input-address"
            value={ street }
            onChange={ ({ target: { value } }) => { setStreet(value); } }
          />
        </label>

        <label htmlFor="input-address-number">
          Número:
          <input
            type="text"
            name="number"
            data-testid="customer_checkout__input-address-number"
            value={ number }
            onChange={ ({ target: { value } }) => { setNumber(value); } }
          />
        </label>

        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ () => {
            onClickButtonFinalizeOrder();
            history.push(`/customer/orders/${id}`);
          } }
        >
          FINALIZAR PEDIDO
        </button>
      </div>

    </div>
  );
}

export default Checkout;
