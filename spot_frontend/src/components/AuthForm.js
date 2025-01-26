import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { loginUser, registerUser } from "../api";

function AuthForm() {
  const [isRegister, setIsRegister] = useState(true); // Toggle between login and register
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    full_name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData); // Log the data being sent

    try {
      if (isRegister) {
        // Registration logic
        await registerUser(formData);
        alert("Registration successful! You can now log in.");
      } else {
        // Login logic
        const response = await loginUser(formData);
        alert(`Welcome back, ${response.data.username}!`);
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <TextField
          label="Username"
          fullWidth
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        {isRegister && (
          <>
            <TextField
              label="Email"
              fullWidth
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <TextField
              label="Full Name"
              fullWidth
              value={formData.full_name}
              onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
              required
            />
          </>
        )}
        <Button type="submit" variant="contained" color="primary">
          {isRegister ? "Register" : "Login"}
        </Button>
      </form>
      <Button
        onClick={() => setIsRegister(!isRegister)}
        variant="text"
        color="secondary"
        style={{ marginTop: "10px" }}
      >
        Switch to {isRegister ? "Login" : "Register"}
      </Button>
    </div>
  );
}

export default AuthForm;
