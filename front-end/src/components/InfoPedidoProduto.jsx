import React, { useState } from 'react';
import productsList from '../tests/productsList';

function InfoPedidoProduto() {
  const [produtos, setProdutos] = useState(productsList);
  const [counter, setCounter] = useState(0);
  const [contadorItem, setContadorItem] = useState(0);

  return (
    <ul>
      {produtos.map((produto) => (
        <li key="produto.name">
          <p>
            {/* {setContadorItem(contadorItem + 1)} */}
            {`Item ${contadorItem}`}
          </p>
          <p>
            {produto.name}
          </p>
          <div>
            <button type="button" onClick={ () => setCounter(counter + 1) }>
              <h1>
                +
              </h1>
            </button>
            <div>
              {' '}
              {counter}
            </div>
            <button type="button" onClick={ () => setCounter(counter - 1) }>
              <h1>
                -
              </h1>
            </button>
          </div>
          <p>
            {produto.price}
          </p>
          <p>
            {produto.price * counter}
          </p>
          <p>
            Remover
          </p>
          {' '}
        </li>
      ))}
    </ul>
  );
}

export default InfoPedidoProduto;
