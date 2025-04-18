// import { useState } from "react";
// import { UserContext } from "../context/UserContext";

// const UserProvider = ({ children }) => {
//   const [users, setUsers] = useState([
//     { id: 1, Name: "Mow", section: "A10" },
//     { id: 2, Name: "John", section: "B20" },
//   ]);

//   const addUser = (newUser) => {
//     setUsers([...users, newUser]);
//   };

//   const deleteUser = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   return (
//     <UserContext.Provider value={{ users, addUser, deleteUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserProvider;






import { useState } from "react";
import { UserContext } from "./UserContext";
const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, Name: "Mow", section: "A10" },
    { id: 2, Name: "John", section: "B20" },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
