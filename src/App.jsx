import React, { useState } from "react";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import { UserContext } from "./context/UserContext";

const App = () => {
  const [users, setUsers] = useState([
    { id: 201, username: "arfan" },
    { id: 202, username: "Deif" },
    { id: 203, username: "Ovi" },
  ]);

  const [nextId, setNextId] = useState(204);

  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const addUser = (newUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, { ...newUser, id: nextId }];
      setNextId(nextId + 1);
      return updatedUsers;
    });
  };

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <div>
        <NewUser addUser={addUser} />
        <h1>Users</h1>
        <Users handleDeleteUser={handleDeleteUser} />
      </div>
    </UserContext.Provider>
  );
};

export default App;
