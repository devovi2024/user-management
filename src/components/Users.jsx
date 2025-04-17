
import React from "react";
import User from "./User";

const Users = ({ users, deleteUser }) => {
  return (
    <section className="user-list">
      {users.map((user) => (
        <User key={user.id} user={user} deleteUser={deleteUser} />
      ))}
    </section>
  );
};

export default Users;