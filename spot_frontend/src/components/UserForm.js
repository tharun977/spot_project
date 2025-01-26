import React, { useState } from "react";
import { createUser } from "../api";

function UserForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    full_name: "",
    contact_number: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(formData);
      alert("User registered successfully!");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Contact Number"
          value={formData.contact_number}
          onChange={(e) => setFormData({ ...formData, contact_number: e.target.value })}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default UserForm;
