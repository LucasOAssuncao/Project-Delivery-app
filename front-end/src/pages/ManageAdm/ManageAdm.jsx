import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UsersPanel from './UsersPanel';

function ManageAdm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [fetchError, setfetchError] = useState(null);

  const tipos = ['administrador', 'customer', 'seller'];
  const nameMinLength = 12;
  const passwordMinLength = 6;
  const number = 2000;

  const handleClick = async (e) => {
    const storage = localStorage.getItem('token');
    axios.defaults.headers.common = { Authorization: storage };

    e.preventDefault();
    await axios
      .post('http://localhost:3001/admin/register', {
        name: userName,
        email,
        password,
        role,
      })
      .then(() => {
        setUserName('');
        setEmail('');
        setPassword('');
        setRole('seller');
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

  setTimeout(() => {
    if (fetchError) {
      setUserName('');
      setEmail('');
      setPassword('');
      setRole('seller');
      setfetchError(null);
    }
  }, number);

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
          <Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </Link>
        </nav>
      </header>

      {fetchError && (
        <span data-testid="admin_manage__element-invalid-register">
          {fetchError}
        </span>
      )}

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
      <UsersPanel />
    </div>
  );
}
export default ManageAdm;
