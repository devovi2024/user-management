import React from 'react';

const User = ({ user, onDelete }) => {
  const boxStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
  };

  return (
    <div style={boxStyle}>
      <h3>{user.username}</h3>
      <button onClick={onDelete}>x</button>
    </div>
  );
};

export default User;
