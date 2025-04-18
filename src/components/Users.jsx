import React, { useContext } from "react";
import User from "./User";
import { UserContext } from "../context/UserContext";

const Users = () => {
  const { users, deleteUser } = useContext(UserContext);

  return (
    <section className="user-list">
      {users.map((user) => (
        <User key={user.id} user={user} deleteUser={deleteUser} />
      ))}
    </section>
  );
};

export default Users;
