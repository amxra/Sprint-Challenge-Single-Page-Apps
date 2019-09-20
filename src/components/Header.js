import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.header `
display: flex;
flex-direction: column;
align-items: center;
font-size: 2rem;
padding:2rem;
border-bottom: 3px dotted grey;

div {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  
 }
button {
  font-size: 1rem;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin-right: 2rem;
  a {
    text-decoration: none;
    color: black;
  }
  &:hover {
    background-color: skyblue;
  }
}
`

export default function Header() {
  return (
    <HeaderStyle className="ui centered">
      <div className = "buttons">
        <button><Link to="/">Home</Link></button>
        <button><Link to="/characters">Characters</Link></button>
      </div>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      
    </HeaderStyle>
  );
}