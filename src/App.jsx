import React, { useState } from "react";
import Users from "./components/Users";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "arfan" },
    { id: 2, username: "Deif" },
    { id: 3, username: "Ovi" },
  ]);

  const handleDeleteUser = (id) => {
    // ✅ Fix: compare user.id not user
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <div>
      <h1>Users</h1>
      <Users users={users} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default App;
