import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-family: 'Cute Font', cursive;
  
`

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const {characters, setCharacters, setError} = props

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response =>{
      setCharacters(response.data.results)
    })
    .catch(err =>{
      setError(err.message)
    })
  }, []);

  return (
    <StyledSection className="character-list">
      {characters.map(chr => (
        <CharacterCard 
        key ={chr.id}
        character ={chr}/>
      ))}
    </StyledSection>
  );
}
