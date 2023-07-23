import "./App.css";
import PersonCard from "./components/PersonCard";
import React, { useState } from "react";

function App() {
  const [person1Age, setPerson1Age] = useState(25);
  const [person2Age, setPerson2Age] = useState(30);

  const handleIncrementAgePerson1 = () => {
    setPerson1Age(person1Age + 1);
  };

  const handleIncrementAgePerson2 = () => {
    setPerson2Age(person2Age + 1);
  };

  return (
    <div className="App">
      <PersonCard
        firstName="Jane"
        lastName="Doe"
        hairColor="Black"
        age={person1Age}
        onIncrementAge={handleIncrementAgePerson1}
      />

      <PersonCard
        firstName="John"
        lastName="Smith"
        hairColor="Brown"
        age={person2Age}
        onIncrementAge={handleIncrementAgePerson2}
      />
    </div>
  );
}

export default App;
