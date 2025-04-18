// import Users from "./components/Users";
// import NewUser from "./components/NewUser";
// import "./styles/UserStyles.css";
// import UserProvider from "./context/UserProvider";

// const App = () => {
//   return (
//     <UserProvider>
//       <div className="app-container">
//         <h1 className="title">European Office - User Management</h1>
//         <NewUser />
//         <Users />
//       </div>
//     </UserProvider>
//   );
// };

// export default App;




// ----------------

import "./styles/UserStyles.css";
import UserProvider from "./context/UserProvider";
import Users from "./components/Users";
import NewUser from "./components/NewUser";

function App() {
  return (
    <UserProvider>
      <NewUser />
      <Users />
    </UserProvider>
  );
}

export default App;
