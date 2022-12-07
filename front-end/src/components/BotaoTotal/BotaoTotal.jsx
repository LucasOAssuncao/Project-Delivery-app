import React from 'react';

function BotaoTotal() {
  return (
    <section>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        // onClick={ () => handleClick() }
      >
        Total: R$
      </button>
    </section>
  );
}
export default BotaoTotal;
