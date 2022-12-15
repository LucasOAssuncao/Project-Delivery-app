import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/Nav';

function OrderDetails() {
  const { id } = useParams();

  // const {
  //   location: { pathname },
  // } = useHistory();
  // const isCustomer = pathname.includes('customer');

  const [order, setOrder] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      const storage = localStorage.getItem('token');
      axios.defaults.headers.common = { Authorization: storage };
      const response = await axios.get(`http://localhost:3001/order/${id}`);
      console.log(response.data);
      setOrder(response.data);
    };
    getOrder();

    const productsArr = JSON.parse(localStorage.getItem('cart'));
    setProducts(productsArr);
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
    axios.patch(`http://localhost:3001/order/${id}`, { status: value }, { params: { id } });
  };

  const dataFormatada = (dataApi) => {
    const data = new Date(dataApi);
    const dataF = `${((data
      .getDate()))}/${((data.getMonth() + 1))}/${data.getFullYear()}`;
    return dataF;
  };

  const dataTest1 = 'customer_order_details__element-order-details-label-delivery-status';
  const dataTest2 = 'customer_order_details__element-order-table-item-number-';
  const dataTest3 = 'customer_order_details__element-order-table-unit-price-';
  const dataTest4 = 'customer_order_details__element-order-table-sub-total-';
  const dataTest5 = 'customer_order_details__element-order-table-name-';
  const dataTest6 = 'customer_order_details__element-order-table-quantity-';

  return (
    <div>
      <NavBar />
      <p>Detalhe do Pedido</p>
      { order.sale && (
        <div>
          <span
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {`Pedido ${order.sale.id}`}
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {order.seller.name}
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {dataFormatada(order.sale.saleDate)}
          </span>
          <span
            data-testid={ dataTest1 }
          >
            {order.sale.status}
          </span>
          <button
            data-testid="customer_order_details__button-delivery-check"
            type="button"
            onClick={ handleButton }
            value="Entregue"
            disabled={ order.sale.status !== 'Em trânsito' }
          >
            Marcar Como Entregue
          </button>
        </div>)}
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
                data-testid={ dataTest2 + index }
              >
                {`${index + 1}`}
              </td>
              <td
                data-testid={ dataTest5 + index }
              >
                {product.name}
              </td>
              <td
                data-testid={ dataTest6 + index }
              >
                {product.quantity}
              </td>
              <td
                data-testid={ dataTest3 + index }
              >
                {`R$ ${priceValue(product.price)}`}
              </td>
              <td
                data-testid={ dataTest4 + index }
              >
                {`R$ ${subTotalValue(product.price, product.quantity)}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h2
          data-testid="customer_order_details__element-order-total-price"
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
