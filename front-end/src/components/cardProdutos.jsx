import React from 'react';
import productsList from '../tests/productsList';

function CardProdutos() {
  const [produtos, setProdutos] = useState(productsList);
  // const [counter, setCounter] = useState(0);
  // const [total, setTotal] = useState(0);

  const countProduct = (id, ope) => {
    if (ope === '+') {
      const produtoId = produtos.findIndex((produto) => produto.id === id);
      produtos[produtoId].quant += 1;
      setProdutos([...produtos]);
    } else {
      const produtoId = produtos.findIndex((produto) => produto.id === id);
      produtos[produtoId].quant -= 1;
      setProdutos([...produtos]);
    }
  };

  return (
    <div>
      <div>
        {produtos.map((produto) => (
          <div key={ produto.name }>
            {/* <p>
            Item: ${setItem(item + 1)}
          </p> */}
            <p>
              {`R$: ${produto.price}`}
            </p>
            <img src={ produto.url_image } alt={ produto.name } />
            <p>
              {produto.name}
            </p>
            <div>
              <div>
                <button type="button" onClick={ () => countProduct(produto.id, '+') }>
                  <h1>
                    +
                  </h1>
                </button>
                <div>
                  {' '}
                  {produto.quant}
                </div>
                <button type="button" onClick={ () => countProduct(produto.id, '-') }>
                  <h1>
                    -
                  </h1>
                </button>
              </div>
            </div>

            {/* {`soma: ${ soma(produto) } `} */}

            {' '}
          </div>
        ))}
      </div>

      <p>
        {`Total: ${total} `}
      </p>

    </div>
  );
}

export default CardProdutos;
