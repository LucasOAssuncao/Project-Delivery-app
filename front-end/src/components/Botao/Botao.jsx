import React from 'react';
// import PropTypes from 'prop-types'

const Botao = ({onclick, children, disable, classname, showButton, dataTestId}) => {
    return (
        showButton && (
            <button type='button' onclick={onclick} className={`${classname}`} disabled={disable} data-testid={dataTestId} >
                {children}
            </button>
        )
    )   
};

Botao.defaultProps = {
    children: '',
    disable: false,
    className: '',
    showButton: 'true',
    dataTestId: '',
}

export default Botao;