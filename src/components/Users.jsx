// import React, { useContext } from "react";
// import User from "./User";
// import { UserContext } from "../context/UserContext";

// const Users = () => {
//   const { users, deleteUser } = useContext(UserContext);

//   return (
//     <section className="user-list">
//       {users.map((user) => (
//         <User key={user.id} user={user} deleteUser={deleteUser} />
//       ))}
//     </section>
//   );
// };

// export default Users;

// end.............its just using context api 





// Now Lets Custom Hook using (useusercontext)


import useUsers from "../hooks/useUsers";
import User from "./User";

const Users = () => {
  const { users, deleteUser } = useUsers();

  return (
    <section className="user-list">
      {users.map((user) => (
        <User key={user.id} user={user} deleteUser={deleteUser} />
      ))}
    </section>
  );
};

export default Users;

