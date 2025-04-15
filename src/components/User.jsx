import React from 'react';

const User = ({ user, handleDeleteUser }) => {
  const { id, username } = user;

  const cardStyle = {
    backgroundColor: '#fff8e1',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    color: '#4e342e',
    transition: 'transform 0.2s ease',
  };

  const idStyle = {
    fontSize: '20px',
    fontWeight: '600',
    margin: '0 0 10px',
    color: '#6d4c41',
  };

  const usernameStyle = {
    fontSize: '16px',
    fontWeight: '500',
    color: '#795548',
  };

  const handleDelete =(id) =>{
    handleDeleteUser(id)
  }

  return (
    <div style={cardStyle}>
      <div style={idStyle}>ID: #{id}</div>
      <div style={usernameStyle}>{username}</div>
      <button onClick={() => {handleDelete(id)}}>Delete</button>
    </div>
  );
};

export default User;
