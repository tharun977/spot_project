import React, { useState } from "react";
import { registerUser } from "../api";

function AuthForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    full_name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert("Registration successful!");
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="text" placeholder="Full Name" onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
}

export default AuthForm;
