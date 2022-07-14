import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";
import PersonCard2 from "./components/PersonCard2";

function App() {
  const person2 = {
    firstName: "Ed",
    lastName: "So",
    age: 25,
    hairColor: "black",
  };
  const person3 = {
    firstName: "Vanessa",
    lastName: "Hue",
    age: 26,
    hairColor: "brown",
  };
  const person4 = {
    firstName: "JaVannee",
    lastName: "Doe",
    age: 32,
    hairColor: "red",
  };
  return (
    <div className="App">
      <PersonCard2 firstName="Jane" lastName="Doe" age="28" hairColor="Black" />
      <PersonCard person={person2} />
      <PersonCard person={person3} />
      <PersonCard person={person4} />
    </div>
  );
}

export default App;
