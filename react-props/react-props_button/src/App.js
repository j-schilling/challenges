import React from "react";
import "./styles.css";

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      disabled={disabled}
      style={{
        color: color,
        height: "150px",
        fontSize: "100px",
        backgroundColor: "yellow",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default function App() {
  function handleClick() {
    console.log("I was clicked!");
  }
  return (
    <Button
      text="Hello"
      // disabled
      color="cornflowerblue"
      onClick={handleClick}
    />
  );
}
