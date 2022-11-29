import React from 'react';
import { Link } from 'react-router-dom';

function NavGeneric({ produtos, meuPedidos, nomePessoa, sair }) {
  return (
    <header>
      <nav>
        <Link to="/" data-testid="">{produtos}</Link>
        {' '}
        <Link to="/" data-testid="">{meuPedidos}</Link>
      </nav>

      <nav>
        <Link to="/" data-testid="">{nomePessoa}</Link>
        {' '}
        <Link to="/" data-testid="">{sair}</Link>
      </nav>
    </header>
  );
}
export default NavGeneric;

NavGeneric.propTypes = {
  produtos: PropTypes.string,
  meuPedidos: PropTypes.string,
  nomePessoa: PropTypes.string,
  sair: PropTypes.string,
}.isRequired;
