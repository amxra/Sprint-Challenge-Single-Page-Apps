import React from "react";
import styled from "styled-components";

const StyledDiv = styled.main`
  border-radius: 15px;
  width: 30%;
  text-align: center;
  font-family: 'Cute Font', cursive;
  
  img {
    width: 100%;
    border-radius: 15px;
  }
  `

export default function CharacterCard(props) {
  const {character} = props

  return (
    <StyledDiv>
      <h3>{character.name}</h3>
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
