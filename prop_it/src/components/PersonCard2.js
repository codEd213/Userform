import React from "react";

const PersonCard2 = ({ firstName, lastName, age, hairColor }) => {
  return (
    <div>
      <h1>
        {lastName}, {firstName}
      </h1>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  );
};

export default PersonCard2;
