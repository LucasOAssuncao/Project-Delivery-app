import React from 'react';
import axios from 'axios';
import { PropTypes } from 'prop-types';

function UserCard({ index, name, email, role, id }) {
  const handleClick = async () => {
    const storage = localStorage.getItem('token');
    axios.defaults.headers.common = { Authorization: storage };

    await axios
      .delete(`http://localhost:3001/admin/${id}`);
  };

  return (
    <tbody>
      <tr>
        <td
          data-testid={ `admin_manage__element-user-table-item-number-${index}` }
        >
          { index }
        </td>
        <td
          data-testid={ `admin_manage__element-user-table-name-${index}` }
        >
          { name }
        </td>
        <td
          data-testid={ `admin_manage__element-user-table-email-${index}` }
        >
          { email }
        </td>
        <td
          data-testid={ `admin_manage__element-user-table-role-${index}` }
        >
          { role }
        </td>
        <td>
          <button
            type="button"
            data-testid={ `admin_manage__element-user-table-remove-${index}` }
            onClick={ handleClick }
          >
            Excluir
          </button>
        </td>
      </tr>
    </tbody>
  );
}

UserCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

export default UserCard;
