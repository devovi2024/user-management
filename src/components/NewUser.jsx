import React, { useState } from "react";

const NewUser = ({ addUser }) => {
  const [name, setName] = useState("");
  const [section, setSection] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !section) return;
    const newUser = {
      id: Date.now(),
      Name: name,
      section: section,
    };
    addUser(newUser);
    setName("");
    setSection("");
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Section"
        value={section}
        onChange={(e) => setSection(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="btn-submit">Add User</button>
    </form>
  );
};

export default NewUser;