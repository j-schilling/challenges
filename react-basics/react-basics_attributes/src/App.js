import React from "react";
import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hello dear reviewing friend</h2>
      <label htmlFor="myInput">Put in your text here:</label>
      <input id="myinput"></input>
      <a className="article__link" href="https://fc.de/">
        Learn about the 1. FC Köln here
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
