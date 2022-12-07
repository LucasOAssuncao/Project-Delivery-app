import React, { useState } from 'react';
import Input from '../../../components/Input/Input';
import Botao from '../../../components/Botao/Botao';
import validateEmail from '../../../utils/validateEmail';
import requestPost from '../../../services/api';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const [logged, setLogged] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (!validateEmail(email)) setDisable(true);
    setDisable(false);
  }, [email, password]);

  const login = async () => {
    const badRequest = 404;
    const success = 200;
    const { status, data } = await requestPost('login', { email, password });

    if (status === badRequest) setLogged(false);

    // se success settar o token na chave token no localstorage

    if (status === success) {
      if (data.user.role === 'customer') history.push('/customer/products');
      if (data.user.role === 'seller') history.push('/seller/orders');
      if (data.user.role === 'administrator') history.push('/administrator/management');
    }
  };

  return (
    <>
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
        {/* {!logged && <p data-testid="common_login__element-invalid-email">mensagem de erro</p>} */}
        <Botao
          onclick={() => login()}
          classname="botao-login"
          dataTestId="common_login__button-login"
          type="submit"
          disable={disable}
        >
          LOGIN
        </Botao>
      </form>
      <Botao
        onclick={() => history.push('/register')}
        dataTestId="common_login__button-register"
      >
        Ainda não tenho conta
      </Botao>
    </>
  );
}

export default LoginForm;
