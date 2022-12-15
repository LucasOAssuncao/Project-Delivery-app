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
      if (getRole() === 'seller') {
        const result = await axios.get(`http://localhost:3001/order/seller/${getIdUser}`);
        setOrders(result.data);
      } else if (getRole() === 'customer') {
        const result = await axios.get(`http://loscalhost:3001/order/user/${getIdUser}`);
        setOrders(result.data);
        console.log(result);
      }
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
    const ten = 10;

    const dataF = `${((data
      .getDate()))}/${((data.getMonth() + 1))}/${data.getFullYear()}`;

    if (dataF.length < ten) {
      const newDate = `0${dataF}`;
      return newDate;
    }
    return dataF;
  };

  return (
    <div>
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
              <button
                data-testid={ `${getRole()}_orders__element-order-id-${id}` }
                key={ id }
                type="button"
                onClick={ () => handleClick(id) }
              >
                <div>

                  <p data-testid={ `${getRole()}_orders__element-order-id-${id}` }>
                    {`Pedido ${id}`}
                  </p>
                  <p data-testid={ `${getRole()}_orders__element-delivery-status-${id}` }>
                    {status}
                  </p>
                  <p data-testid={ `${getRole()}_orders__element-order-date-${id}` }>
                    {(dataFormatada(saleDate))}
                  </p>
                  <p>
                    R$
                    <span
                      data-testid={ `${getRole()}_orders__element-card-price-${id}` }
                    >
                      {totalPrice.toString().replace('.', ',')}
                    </span>
                  </p>
                  { getRole() === 'seller' && (
                    <p
                      data-testid={ `seller_orders__element-card-address-${id}` }
                    >
                      {`${deliveryAddress}, ${deliveryNumber}`}
                    </p>
                  ) }
                </div>
              </button>
            ))
          )
      }
    </div>
  );
}

export default CardPedidoStatus;
