import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import NavBar from '../../components/Nav';

function OrderDetails() {
  const { id } = useParams();
  const {
    location: { pathname },
  } = useHistory();
  const isCustomer = pathname.includes('customer');

  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  console.log(order);

  useEffect(() => {
    const storage = localStorage.getItem('token');
    axios.defaults.headers.common = { Authorization: storage };

    const getOrder = async () => {
      const response = await axios.get(`http://localhost:3001/order/${id}`);
      setOrder(response.data);
    };
    getOrder();

    const productsArr = JSON.parse(localStorage.getItem('cart'));
    setProducts(productsArr);
  }, [id]);

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
    axios.patch(`http://localhost:3001/order/${id}`, { status: value }, { params: { id } });
  };

  const dataFormatada = (dataApi) => {
    const data = new Date(dataApi);
    const dataF = `${((data
      .getDate()))}/${((data.getMonth() + 1))}/${data.getFullYear()}`;
    return dataF;
  };

  return (
    <div>
      <NavBar />
      <p>Detalhe do Pedido</p>
      <div>
        <span
          data-testid={
            isCustomer
              ? 'seller_order_details__element-order-details-label-order-id'
              : 'customer_order_details__element-order-details-label-order-id'
          }
        >
          {`Pedido ${order.id}`}
        </span>
        {isCustomer && (
          <span
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P. Vend:
            {' '}
            {order.sellerId}
            {/* pegar nome vendedor */}
          </span>
        )}
        <span data-testid="seller_order_details__element-order-details-label-order-date">
          {dataFormatada(order.saleDate)}
        </span>
        <span
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {order.status}
        </span>
        {isCustomer ? (
          <button
            data-testid="customer_order_details__button-delivery-check"
            type="button"
            onClick={ handleButton }
            value="Entregue"
            disabled={ order.status === 'Entregue' }
          >
            Marcar Como Entregue
          </button>
        ) : (
          <>
            <button
              data-testid="seller_order_details__button-preparing-check"
              type="button"
              onClick={ handleButton }
              value="Preparando"
              disabled={ order.status !== 'Pendente' }
            >
              Preparar Pedido
            </button>
            <button
              data-testid="seller_order_details__button-dispatch-check"
              type="button"
              onClick={ handleButton }
              value="Em Trânsito"
              disabled={ order.status !== 'Preparando' }
            >
              Saiu para entrega
            </button>
          </>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={ product.name }>
              <td
                data-testid={
                  isCustomer
                    ? `customer_checkout__element-order-table-item-number-${index}`
                    : `seller_order_details__element-order-table-item-number-${index}`
                }
              >
                {`${index + 1}`}
              </td>
              <td
                data-testid={
                  isCustomer
                    ? `customer_checkout__element-order-table-name-${index}`
                    : `seller_order_details__element-order-table-name-${index}`
                }
              >
                {product.name}
              </td>
              <td
                data-testid={
                  isCustomer
                    ? `customer_checkout__element-order-table-quantity-${index}`
                    : `seller_order_details__element-order-table-quantity-${index}`
                }
              >
                {product.quantity}
              </td>
              <td
                data-testid={
                  isCustomer
                    ? `customer_checkout__element-order-table-unit-price-${index}`
                    : `seller_order_details__element-order-table-unit-price-${index}`
                }
              >
                {`R$ ${priceValue(product.price)}`}
              </td>
              <td
                data-testid={
                  isCustomer
                    ? `customer_checkout__element-order-table-sub-total-${index}`
                    : `seller_order_details__element-order-table-sub-total-${index}`
                }
              >
                {`R$ ${subTotalValue(product.price, product.quantity)}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h2
          data-testid={
            isCustomer
              ? 'customer_checkout__element-order-total-price'
              : 'seller_order_details__element-order-total-price'
          }
        >
          {`Total: R$ ${priceValue(localStorage.getItem('totalPrice'))}`}
        </h2>
      </div>
    </div>
  );
}

// OrderDetails.propTypes = {
//   match: propTypes.shape({
//     params: propTypes.shape({
//       id: propTypes.string,
//     }),
//   }).isRequired,
// };

export default OrderDetails;
