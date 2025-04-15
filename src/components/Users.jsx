import React from 'react';
import User from './User';

const Users = ({ users, handleDeleteUser }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
  };

  return (
    <div>
      <section style={gridStyle}>
        {users.map(user => (
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
