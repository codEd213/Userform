import React from "react";

const PersonCard = (props) => {
  const { person } = props;
  return (
    <div className="App">
      <h1>
        {person.lastName}, {person.firstName}
      </h1>
      <h2>Age: {person.age}</h2>
      <h2>Hair Color: {person.hairColor}</h2>
    </div>
  );
};

export default PersonCard;
