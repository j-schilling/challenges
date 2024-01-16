import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Button no uno</Button>
      <Button>Second Button</Button>
      <Button>Thirdiesh Button</Button>
      <Button>Der Vierte</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
