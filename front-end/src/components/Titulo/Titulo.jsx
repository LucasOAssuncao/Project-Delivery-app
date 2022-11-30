import React from 'react';
// import PropTypes from 'prop-types'

const Titulo = ({children, classname, title, onclick}) => {
    return (
        <p title={title} className={classname} onClick={onclick}>
            {children}
        </p>
    )
}

Titulo.defaultProps = {
    children: '',
    className: '',
    title: '',
    onclick: () => {},
}

export default Titulo;