import React from "react";
import "./styles.css";

function Smiley({ isHappy }) {
  return <h1>{isHappy ? ":)" : ":("}</h1>;
}

export default function App() {
  return <Smiley />;
}
