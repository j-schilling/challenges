import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {Math.floor(valueA) + Math.floor(valueB)}
    </h1>
  );
}

export default function App() {
  return <Sum valueA="1" valueB="2" />;
}
