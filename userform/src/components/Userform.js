import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const createUser = (e) => {
    // we must prevent the default refresh of the browser to keep our state from being reset
    e.preventDefault();

    // create a javascript object to hold all of the values
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPass: confirmPass,
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

  const formMessage = () => {
    if (lastName.length < 2 && lastName.length > 0) {
      return "Last name must be at least 2 characters";
    }
  };

  return (
    <div>
      <form onSubmit={createUser} style={{ marginTop: "20px" }}>
        <div style={inputDataDivStyle}>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
          {firstName.length < 2 && firstName.length > 0 ? (
            <p>First Name must be at least 2 characters</p>
          ) : null}
        </div>
        <div style={inputDataDivStyle}>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          <p>{formMessage()}</p>
        </div>
        <div style={inputDataDivStyle}>
          <label htmlFor="email">Email Address: </label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {email.length < 2 && email.length > 0 ? (
            <p>Email must be at least 2 characters</p>
          ) : null}
        </div>
        <div style={inputDataDivStyle}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length < 8 && password.length > 0 ? (
            <p>Password must be at least 8 characters</p>
          ) : null}
        </div>
        <div style={inputDataDivStyle}>
          <label htmlFor="confirmPass">Confirm Password: </label>
          <input
            type="confirmPass"
            name="confirmPass"
            onChange={(e) => setconfirmPass(e.target.value)}
          />
          {password !== confirmPass ? <p>Passwords must match</p> : null}
        </div>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default UserForm;
