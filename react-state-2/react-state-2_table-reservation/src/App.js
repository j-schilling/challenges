import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleAddPerson() {
    setPeople(people + 1);
  }

  function handleSubPerson() {
    setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAddPerson={handleAddPerson} onSubPerson={handleSubPerson} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
