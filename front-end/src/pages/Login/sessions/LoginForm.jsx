import React, { useState } from 'react';
import Input from '../../../components/Input/Input';
import Botao from '../../../components/Botao/Botao';
import validateEmail from '../../../utils/validateEmail';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (!validateEmail(email)) setDisable(true);
    setDisable(false);
  }, [email, password]);

  return (
    <form>
      <Input
        label="Login"
        placeholder="email@trybeer.com"
        classname="input-email"
        dataTestId="common_login__input-email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Senha"
        placeholder="******"
        classname="input-senha"
        dataTestId="common_login__input-password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Botao
        onclick={() => { }}
        classname="botao-login"
        dataTestId="common_login__button-login"
        type="submit"
        disable={disable}
      >
        LOGIN
      </Botao>
      <Botao
        onclick={() => history.push('/register')}
        dataTestId="common_login__button-register"
      >
        Ainda não tenho conta
      </Botao>
    </form>
  );
}

export default LoginForm;
