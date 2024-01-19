import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    id: "",
    message: "",
    date: "",
    time: "",
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
        "http://localhost:8080/api/v1/info/details",
        user
      );
      if (response && response.data) {
        alert("Message send successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log("error in registration" + error);
    }
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <br />
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
            type="test"
            placeholder="id"
            name="id"
            onChange={handleInput}
            value={user.email}
          />
          <br />
          <br />
          <textarea
            name="message"
            id="message"
            cols="41"
            rows="10"
            onChange={handleInput}
            placeholder="message"
            value={user.password}
          ></textarea>
          <br />
          <br />
          <input
            type="date"
            onChange={handleInput}
            value={user.date}
            name="date"
          />
          <br />
          <br />
          <input
            type="time"
            onChange={handleInput}
            value={user.time}
            name="time"
          />
          <br />
          <br />
          <button className="btn" type="submit">
            {" "}
            Message to Manager
          </button>
          <br />
          <br />
        </form>
      </div>
    </>
  );
};

export default Contact;
