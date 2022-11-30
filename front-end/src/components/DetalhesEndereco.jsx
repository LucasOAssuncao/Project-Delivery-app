import React from 'react';

function DetalhesEndereco() {
  return (
    <section>
      <label htmlFor="select-seller">
        P. Vendedora Responsável:
        <select
          name="seller"
          id="select-seller"
          data-testid="customer_checkout__select-seller"
          value={ seller }
        // onChange={ this.handleChange }
        >
          <option value="Vendedora A">Vendedora A</option>
          <option value="Vendedora B">Vendedora B</option>
          <option value="Vendedora C">Vendedora C</option>
        </select>
      </label>

      <label htmlFor="input-address">
        Endereço:
        <input
          type="text"
          name="address"
          data-testid="customer_checkout__input-address"
          value={ address }
        //   onChange={ this.handleChange }
        />
      </label>

      <label htmlFor="input-address-number">
        Número:
        <input
          type="text"
          name="addressNumber"
          data-testid="customer_checkout__input-address-number"
          value={ addressNumber }
        //   onChange={ this.handleChange }
        />
      </label>
    </section>
  );
}
export default DetalhesEndereco;
