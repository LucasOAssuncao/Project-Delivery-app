import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { validateEmail } from '../../../utils/validateEmail';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const [logged, setLogged] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (validateEmail(email, password)) setDisable(false);
    else {
      setDisable(true);
    }
  }, [email, password]);

  const handleClick = async () => {
    await axios
      .post('http://localhost:3001/login', {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
        if (response.data.role === 'seller') history.push('/seller/orders');
        if (response.data.role === 'administrator') {
          history.push('/admin/manage');
        } else history.push('/customer/products');
      })
      .catch((err) => {
        console.log(err.response.data);
        setLogged(false);
      });
  };

  return (
    <div className="login-container">
      <form className="form-container">
        <input
          label="Login"
          placeholder="email@trybeer.com"
          className="input-email"
          data-testid="common_login__input-email"
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        <input
          label="Senha"
          placeholder="******"
          className="input-senha"
          data-testid="common_login__input-password"
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
        <button
          onClick={ () => handleClick() }
          className="login-btn"
          data-testid="common_login__button-login"
          type="button"
          disabled={ disable }
        >
          LOGIN
        </button>
      </form>
      <button
        className="btn-form"
        onClick={ () => history.push('/register') }
        data-testid="common_login__button-register"
        type="button"
      >
        Cadastrar
      </button>
      {!logged
      && <p data-testid="common_login__element-invalid-email">Usuário inválido</p>}
    </div>
  );
}

export default LoginForm;
