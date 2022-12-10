import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../../components/UserCard';

function UsersPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storage = localStorage.getItem('token');
    axios.defaults.headers.common = { Authorization: storage };

    const init = async () => {
      const response = await axios.get('http://localhost:3001/admin');
      setUsers(response.data);
    };
    init();
  });

  return (
    <div>
      <h3>Lista de usuários</h3>
      <table>
        <thead>
          <tr>
            <th>item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        { users.map((user, index) => (
          <UserCard
            key={ user.id }
            index={ index + 1 }
            name={ user.name }
            email={ user.email }
            role={ user.role }
            id={ user.id }
          />
        ))}
      </table>
    </div>
  );
}

export default UsersPanel;
