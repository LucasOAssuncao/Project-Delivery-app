/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function CardPedidoStatus() {
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const getRole = () => JSON.parse(localStorage.getItem('user')).role;
  const getIdUser = JSON.parse(localStorage.getItem('user')).id;

  useEffect(() => {
    const storage = localStorage.getItem('token');
    axios.defaults.headers.common = { Authorization: storage };

    console.log(getIdUser);

    const getOrders = async () => {
      const result = await axios.get(`http://localhost:3001/order/user/${getIdUser}`);
      setOrders(result.data);
      console.log(result);
    };

    getOrders();
  }, [getIdUser]);

  const handleClick = (id) => {
    if (getRole() === 'seller') {
      history.push(`/seller/orders/${id}`);
    } else {
      history.push(`/customer/orders/${id}`);
    }
  };

  const dataFormatada = (dataApi) => {
    const data = new Date(dataApi);
    const dataF = `${((data
      .getDate()))}/${((data.getMonth() + 1))}/${data.getFullYear()}`;
    return dataF;
  };

  return (
    <div className="general-order-container">
      {
        !orders.length ? 'Não tem pedidos registrados'
          : (
            orders.map(({
              id,
              status,
              saleDate,
              totalPrice,
              deliveryAddress,
              deliveryNumber,
            }) => (
              <div className="order-card" key={ id }>
                <button
                  data-testid={ `${getRole()}_orders__element-order-id-${id}` }
                  type="button"
                  onClick={ () => handleClick(id) }
                >
                  <div>

                    <h2 data-testid={ `${getRole()}_orders__element-order-id-${id}` }>
                      {`Pedido ${id}`}
                    </h2>
                    <h4 data-testid={ `${getRole()}_orders__element-delivery-status-${id}` }>
                      {status}
                    </h4>
                    <p data-testid={ `${getRole()}_orders__element-order-date-${id}` }>
                      {(dataFormatada(saleDate))}
                    </p>
                    <h3>
                      R$
                      <span
                        data-testid={ `${getRole()}_orders__element-card-price-${id}` }
                      >
                        {totalPrice.toString().replace('.', ',')}
                      </span>
                    </h3>
                    { getRole() === 'seller' && (
                      <p
                        data-testid={ `seller_orders__element-card-address-${id}` }
                      >
                        {`${deliveryAddress}, ${deliveryNumber}`}
                      </p>
                    ) }
                  </div>
                </button>
              </div>
            ))
          )
      }
    </div>
  );
}

export default CardPedidoStatus;
