import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        user
      );
      if (response && response.data) {
        alert("Register successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log("error in registration" + error);
    }
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleInput}
            value={user.name}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleInput}
            value={user.email}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInput}
            value={user.password}
          />
          <br />
          <br />
          <button className="btn" type="submit">
            {" "}
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
