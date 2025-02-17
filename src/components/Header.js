import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.header `
display: flex;
flex-direction: column;
align-items: center;
font-size: 2rem;
padding: 0 2rem;

h1{
  font-family: 'Cute Font', cursive;
  
  text-shadow: -1px 0 #00FF7F, 0 1px #00FF7F, 1px 0 #00FF7F, 0 -1px #00FF7F;
  color: #58CCED;
}


div {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  
 }

 .links{
   display: flex;
   justify-content: flex-end;
   font-family: 'Cute Font', cursive;
 }
a {
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  margin-right: 2rem;
  color: grey;
  text-decoration: none;

  &:hover{
    text-decoration: underline;
    text-decoration-color: #00FF7F;
    color: #58CCED;
    
  }
}
`

export default function Header() {
  return (
    <HeaderStyle className="ui centered">
      
      <div className = "links">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </div>

      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      
    </HeaderStyle>
  );
}