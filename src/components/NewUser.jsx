import React, { useState } from 'react';
import '../NewUser.css';

const NewUser = ({ addUser }) => {  
  const [username, setUsername] = useState("");

  const handleNewUserName = (event) => {
    setUsername(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: username };
    addUser(newUser); 
    setUsername("");  
  }

  return (
    <div className="container">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter username" 
          className="input" 
          value={username}
          onChange={handleNewUserName}
        />
        <button type="submit" className="button">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
