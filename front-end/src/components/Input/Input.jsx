import React from 'react';
// import PropTypes from 'prop-types'

const Input = ({label, placeholder, classname, dataTestId}) => {
    return (
        <>
            {label && (<label className='label'>{label}</label>)}
            <input className={`${classname}`} placeholder={placeholder} data-testid={dataTestId} />
        </>
    )
}

Input.defaultProps = {
    placeholder: '',
    className: '',
    dataTestId: '',
}

export default Input;