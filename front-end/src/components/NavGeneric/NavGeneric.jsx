import React from 'react';
import { Link } from 'react-router-dom';

function NavGeneric() {
  return (
    <header>
      <nav>
        <Link to="/" data-testid="">Produtos</Link>
        {' '}
        <Link to="/" data-testid="">Meus Pedidos</Link>
      </nav>

      <nav>
        <Link to="/" data-testid="">Nome Cliente/Vendedor</Link>
        {' '}
        <Link to="/" data-testid="">Sair</Link>
      </nav>
    </header>
  );
}
export default NavGeneric;
