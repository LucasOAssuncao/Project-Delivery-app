import React from 'react';
import Input from '../../../components/Input/Input';
import Botao from '../../../components/Botao/Botao';

function LoginForm() {
  return (
    <form onSubmit={ () => {} }>
      <Input
        label="Login"
        placeholder="email@trybeer.com"
        classname="input-email"
        dataTestId="common_login__input-email"
      />
      <Input
        label="Senha"
        placeholder="******"
        classname="input-senha"
        dataTestId="common_login__input-password"
      />
      <Botao
        onclick={ () => {} }
        classname="botao-login"
        dataTestId="common_login__button-login"
        type="submit"
      >
        LOGIN
      </Botao>
      <Botao
        onclick={ () => {} }
        dataTestId="common_login__button-register"
      >
        Ainda não tenho conta
      </Botao>

    </form>
  );
}

export default LoginForm;
