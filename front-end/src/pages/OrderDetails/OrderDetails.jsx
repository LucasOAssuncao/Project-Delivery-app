/* eslint-disable react/jsx-max-depth */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/Nav';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const getRole = () => JSON.parse(localStorage.getItem('user')).role;

  useEffect(async () => {
    const storage = localStorage.getItem('token');
    axios.defaults.headers.common = { Authorization: storage };
    const response = await axios.get(
      `http://localhost:3001/order/details/${id}`,
    );
    setOrder(response.data);
  }, []);

  const priceValue = (price) => {
    const priceNumber = Number(price);
    return priceNumber.toFixed(2).toString().replace('.', ',');
  };

  const subTotalValue = (price, quantity) => {
    const resultMult = Number(price) * Number(quantity);
    return resultMult.toFixed(2).toString().replace('.', ',');
  };

  const handleButton = async ({ target }) => {
    const { value } = target;
    const storage = localStorage.getItem('token');
    axios.defaults.headers.common = { Authorization: storage };
    await axios.patch(
      `http://localhost:3001/order/${id}`,
      { status: value },
      { params: { id } },
    );
  };

  const dataFormatada = (dataApi) => {
    const data = new Date(dataApi);
    const ten = 10;

    const dataF = `${data.getDate()}/${
      data.getMonth() + 1
    }/${data.getFullYear()}`;
    if (dataF.length < ten) {
      const newDate = `0${dataF}`;
      return newDate;
    }
    return dataF;
  };
  const dataTest1 = '_order_details__element-order-details-label-delivery-status';
  const dataTest2 = '_order_details__element-order-table-item-number-';
  const dataTest3 = '_order_details__element-order-table-unit-price-';
  const dataTest4 = '_order_details__element-order-table-sub-total-';
  const dataTest5 = '_order_details__element-order-table-name-';
  const dataTest6 = '_order_details__element-order-table-quantity-';
  const dataTest7 = '_order_details__element-order-details-label-order-id';
  const dataTest8 = 'customer_order_details__element-order-details-label-seller-name';
  const dataTest9 = '_order_details__element-order-details-label-order-date';

  return (
    <div className="order-container">
      <NavBar />
      <div>
        <h1>Detalhe do Pedido</h1>
        {order.sale && (
          <div className="order-info">
            <span data-testid={ getRole() + dataTest7 }>{`ID: ${order.sale.id}`}</span>
            {getRole() === 'customer' && (
              <span data-testid={ dataTest8 }>{order.name}</span>
            )}
            <span data-testid={ getRole() + dataTest9 }>
              {dataFormatada(order.sale.saleDate)}
            </span>
            <p data-testid={ getRole() + dataTest1 }>{order.sale.status}</p>
            {getRole() === 'customer' && (
              <button
                className="status-btn"
                data-testid="customer_order_details__button-delivery-check"
                type="button"
                onClick={ handleButton }
                value="Entregue"
                disabled={ order.sale.status !== 'Em Trânsito' }
              >
                Marcar Como Entregue
              </button>
            )}

            {getRole() === 'seller' && (
              <div>
                <button
                  className="status-btn"
                  data-testid="seller_order_details__button-preparing-check"
                  type="button"
                  onClick={ handleButton }
                  value="Preparando"
                  disabled={ order.sale.status !== 'Pendente' }
                >
                  Preparar Pedido
                </button>
                <button
                  className="status-btn"
                  data-testid="seller_order_details__button-dispatch-check"
                  type="button"
                  onClick={ handleButton }
                  value="Em Trânsito"
                  disabled={ order.sale.status !== 'Preparando' }
                >
                  Saiu para entrega
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="order-table-container">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
            </tr>
          </thead>
          <tbody>
            {order.products
            && order.products.map((product, index) => (
              <tr key={ product.name }>
                <td data-testid={ getRole() + dataTest2 + index }>
                  {`${index + 1}`}
                </td>
                <td data-testid={ getRole() + dataTest5 + index }>
                  {product.name}
                </td>
                <td data-testid={ getRole() + dataTest6 + index }>
                  {product.quantity}
                </td>
                <td data-testid={ getRole() + dataTest3 + index }>
                  {`R$ ${priceValue(product.price)}`}
                </td>
                <td data-testid={ getRole() + dataTest4 + index }>
                  {`R$ ${subTotalValue(product.price, product.quantity)}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total-container">
          <h2
            data-testid={ `${getRole()}_order_details__element-order-total-price` }
          >
            {order.sale && `Total: R$ ${priceValue(order.sale.totalPrice)}`}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
