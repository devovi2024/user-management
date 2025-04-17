import { useState } from "react";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import "./styles/UserStyles.css";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, Name: "Mow", section: "A10" },
    { id: 2, Name: "John", section: "B20" },
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="app-container">
      <h1 className="title">European Office - User Management</h1>
      <NewUser addUser={addUser} />
      <Users users={users} deleteUser={deleteUser} />
    </div>
  );
};

export default App;