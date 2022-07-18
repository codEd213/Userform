import React, { useState } from "react";

const PersonCard = (props) => {
  const { person } = props;
  const [age, setAge] = useState(person.age);
  const handleAge = () => {
    setAge(age + 1);
  };
  return (
    <div className="App">
      <h1>
        {person.lastName}, {person.firstName}
      </h1>
      <h2>Age: {age}</h2>
      <h2>Hair Color: {person.hairColor}</h2>
      <button onClick={handleAge}>
        Birthday Button for {person.firstName}
      </button>
    </div>
  );
};

export default PersonCard;
