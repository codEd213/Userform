import React, { useState } from "react";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = (e) => {
    // we must prevent the default refresh of the browser to keep our state from being reset
    e.preventDefault();

    // create a javascript object to hold all of the values
    const newUser = {
      username: username,
      email: email,
      password: password,
    };
    console.log("Welcome", newUser);
  };

  const inputDataDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    border: "1px solid darkgrey",
    padding: "0px 10px",
    margin: "5px",
  };

  const formDataDivStyle = {
    textAlign: "left",
    width: "450px",
    margin: "auto",
  };

  return (
    <div>
      <form onSubmit={createUser} style={{ marginTop: "20px" }}>
        <div style={inputDataDivStyle}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={inputDataDivStyle}>
          <label htmlFor="email">Email Address: </label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={inputDataDivStyle}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <div style={formDataDivStyle}>
        <h3>Your Form: </h3>
        <p>Username: {username}</p>
        <p>Email Address: {email}</p>
        <p>Password: {password}</p>
      </div>
    </div>
  );
};

export default UserForm;
