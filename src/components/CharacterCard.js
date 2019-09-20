import React from "react";
import styled from "styled-components";

const StyledDiv = styled.main`
  border-radius: 15px;
  width: 29%;
  text-align: center;
  font-family: 'Cute Font', cursive;
  background-color: powderblue;
  box-shadow: 5px 10px rgba(0,255,127, 0.5);


  h2{
    color: grey;
    
  }
  
  img {
    width: 100%;
    border-radius: 15px;
  }
  `

export default function CharacterCard(props) {
  const {character} = props

  return (
    <StyledDiv>
      <h2>{character.name}</h2>
      <img src ={character.image} alt = {character.name}/>
      <p>Gender : {character.gender}</p>
      <p>Origin : {character.origin.name}</p>
      <p>Location : {character.location.name}</p>
      <p>Specie : {character.species}</p>
      <p>Status : {character.status}</p>
      <p>Created : {character.created}</p>


    </StyledDiv>
  )
}
