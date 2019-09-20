import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className = "buttons">
        <button><Link to="/">Home</Link></button>
        <button><Link to="/characters">Characters</Link></button>
      </div>
    </header>
  );
}