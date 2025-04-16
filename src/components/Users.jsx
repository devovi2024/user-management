import React, { useContext } from 'react';
import User from './User';
import { UserContext } from '../context/UserContext';

const Users = ({ handleDeleteUser }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
  };

  const { users, setUsers } = useContext(UserContext);

  return (
    <div>
      <section style={gridStyle}>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            handleDeleteUser={handleDeleteUser}
          />
        ))}
      </section>
    </div>
  );
};

export default Users;
