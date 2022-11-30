import React from 'react';
// import PropTypes from 'prop-types'

function Botao({ onclick, children, disable, classname, showButton, dataTestId, type }) {
  return (
    showButton && (
      <button
        type={ type }
        onClick={ onclick }
        className={ `${classname}` }
        disabled={ disable }
        data-testid={ dataTestId }
      >
        {children}
      </button>
    )
  );
}

Botao.defaultProps = {
  type: 'button',
  children: '',
  disable: false,
  className: '',
  showButton: true,
  dataTestId: '',
  onclick: () => {},
};

export default Botao;
