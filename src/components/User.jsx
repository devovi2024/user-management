import { useState } from "react";

const User = ({ user, deleteUser }) => {
  const { id, Name, section } = user;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className="user-card">
      <h3>{Name}</h3>
      <p><strong>Section:</strong> {section}</p>
      <div className="button-group">
        <button onClick={() => setShowDetails(!showDetails)} className="btn-toggle">
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        <button onClick={() => deleteUser(id)} className="btn-delete">
          Delete
        </button>
      </div>
      {showDetails && <div className="details">More details can go here...</div>}
    </article>
  );
};

export default User;