import React from 'react';
import Input from '../../../components/Input/Input';
import Botao from '../../../components/Botao/Botao';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const body = { email: `${email}`, password: `${password}` };

  return (
    <>
      <form onSubmit={ () => {} }>
        <Input
          label="Login"
          placeholder="email@trybeer.com"
          classname="input-email"
          dataTestId="common_login__input-email"
          onChange={ (event) => setEmail(event.target.value) }
        />
        <Input
          label="Senha"
          placeholder="******"
          classname="input-senha"
          dataTestId="common_login__input-password"
          onChange={ (event) => setPassword(event.target.value) }
        />
        <Botao
          onclick={ () => {} }
          classname="botao-login"
          dataTestId="common_login__button-login"
          type="submit"
        >
          LOGIN
        </Botao>

      </form>
      <Botao
        onclick={ () => {} }
        dataTestId="common_login__button-register"
      >
        Ainda não tenho conta
      </Botao>
    </>
  );
}

export default LoginForm;
