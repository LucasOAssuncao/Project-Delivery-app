import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

function FormRegister() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [fetchError, setfetchError] = useState(null);
  const [password, setPassword] = useState('');
  const history = useHistory();
  const nameMinLength = 12;
  const passwordMinLength = 6;

  const handleClick = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:3001/register', {
        name: userName,
        email,
        password,
        role: 'customer',
      })
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('token', response.data.token);
        history.push('/customer/products');
      })
      .catch((err) => {
        setfetchError(err.response.data.message);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={ handleClick } className="form-container">
        <label htmlFor="nameInput">
          Nome
          <input
            data-testid="common_register__input-name"
            type="text"
            id="nameInput"
            placeholder="Nome"
            value={ userName }
            onChange={ ({ target: { value } }) => setUserName(value) }
          />
        </label>
        <label htmlFor="emailInput">
          Email
          <input
            data-testid="common_register__input-email"
            type="email"
            id="emailInput"
            placeholder="email@email.com"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="common_register__input-password"
            type="password"
            id="password"
            placeholder="******"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="submit"
          className="login-btn"
          disabled={ !(
            email.match(/\S+@\S+\.\S+/i)
            && password.length >= passwordMinLength
            && userName.length >= nameMinLength
          ) }
        >
          CADASTRAR
        </button>
      </form>
      {fetchError && (
        <span data-testid="common_register__element-invalid_register">
          {fetchError.message}
        </span>
      )}
    </div>
  );
}

export default FormRegister;
