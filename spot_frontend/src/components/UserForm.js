import React, { useState } from "react";
import { createUser } from "../api/api";

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
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input
        type="text"
        placeholder="Username"
        className="border p-2 mb-2 w-full"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-2 w-full"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <input
        type="text"
        placeholder="Full Name"
        className="border p-2 mb-2 w-full"
        value={formData.full_name}
        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Contact Number"
        className="border p-2 mb-2 w-full"
        value={formData.contact_number}
        onChange={(e) => setFormData({ ...formData, contact_number: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mb-2 w-full"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
    </form>
  );
}

export default UserForm;
