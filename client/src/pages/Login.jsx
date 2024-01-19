import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
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
        "http://localhost:8080/api/v1/auth/login",
        user
      );
      if (response && response.data) {
        alert("Login successfully");
        navigate("/");
      }
    } catch (error) {
      console.log("error in Login" + error);
    }
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
