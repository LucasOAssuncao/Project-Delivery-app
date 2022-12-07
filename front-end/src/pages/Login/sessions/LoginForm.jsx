import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// import Input from '../../../components/Input/Input';
import Botao from '../../../components/Botao/Botao';
import { validateEmail } from '../../../utils/validateEmail';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const [logged, setLogged] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (validateEmail(email)) setDisable(false);
    else {
      setDisable(true);
    }
  }, [email]);

  const handleClick = () => {
    axios
      .post('http://localhost:3001/login', {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        if (response.data.role === 'customer') history.push('/customer/products');
        if (response.data.role === 'seller') history.push('/seller/orders');
        if (response.data.role === 'administrator') {
          history
            .push('/administrator/management');
        }
      })
      .catch(() => {
        setLogged(false);
      });
  };

  return (
    <>
      <form>

        <input
          label="Login"
          placeholder="email@trybeer.com"
          className="input-email"
          dataTestId="common_login__input-email"
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        <input
          label="Senha"
          placeholder="******"
          className="input-senha"
          dataTestId="common_login__input-password"
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
        {!logged
        && <p data-testid="common_login__element-invalid-email">Usuário inválido</p>}
        <button
          onClick={ () => handleClick() }
          className="botao-login"
          dataTestId="common_login__button-login"
          type="button"
          disabled={ disable }
        >
          LOGIN
        </button>
      </form>
      <Botao
        onclick={ () => history.push('/register') }
        dataTestId="common_login__button-register"
      >
        Ainda não tenho conta
      </Botao>
    </>
  );
}

export default LoginForm;
