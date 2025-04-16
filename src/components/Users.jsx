import React, { useContext } from 'react';
import User from './User';
import { UserContext } from '../context/UserContext';

const Users = () => {
  const { users, setUsers } = useContext(UserContext);

  const handleDelete = (id) => {
    const filtered = users.filter(user => user.id !== id);
    setUsers(filtered);
  };
 
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
  };

  return (
    <section style={gridStyle}>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onDelete={() => handleDelete(user.id)}
        />
      ))}
    </section>
  );
};

export default Users;
