import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

function ManageAdm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Vendedor');
  const [fetchError, setfetchError] = useState(null);
  const history = useHistory();

  const tipos = ['Administrador', 'Cliente', 'Vendedor'];
  const nameMinLength = 12;
  const passwordMinLength = 6;

  const handleClick = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:3001/register', {
        name: userName,
        email,
        password,
      })
      .then(() => {
        setfetchError(null);
      })
      .catch((err) => {
        setfetchError(err.response.data.message);
      });
  };

  const generateSelect = (array) => array.map((option) => (
    <option
      data-testid="column-options"
      value={ option }
      key={ Math.random() }
    >
      { option }
    </option>
  ));

  return (
    <div>
      <header>
        <nav data-testid="customer_products__element-navbar-link-orders">
          <span>GERENCIAR USUÁRIOS</span>
        </nav>

        <nav>
          <div data-testid="customer_products__element-navbar-user-full-name">
            <p>Admin</p>
          </div>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => history.push('/customer/products') }
          >
            Sair
          </button>
        </nav>
      </header>

      <form onSubmit={ handleClick }>

        <label htmlFor="nameInput">
          Nome
          <input
            data-testid="admin_manage__input-name"
            type="text"
            id="nameInput"
            placeholder="Nome e sobrenome"
            value={ userName }
            onChange={ ({ target: { value } }) => setUserName(value) }
          />
        </label>
        <label htmlFor="emailInput">
          Email
          <input
            data-testid="admin_manage__input-email"
            type="email"
            id="emailInput"
            placeholder="seu-email@site.com"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="admin_manage__input-password"
            type="password"
            id="password"
            placeholder="******"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>

        <label htmlFor="coluna">

          Tipo:
          <select
            data-testid="admin_manage__select-role"
            value={ role }
            onChange={ (ev) => setRole(ev.target.value) }
          >
            { generateSelect(tipos) }

          </select>
        </label>

        <button
          data-testid="admin_manage__button-register"
          type="submit"
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
        <span data-testid="admin_manage__element-invalid-register">
          {fetchError.message}
        </span>
      )}

    </div>
  );
}
export default ManageAdm;
