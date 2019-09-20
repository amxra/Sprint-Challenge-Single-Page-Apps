import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import Form from "./components/searchForm";
import styled from "styled-components"

const MainStyle = styled.main `
background-color: powderblue;
border-radius: 2rem;
padding: 2rem;

`



export default function App() {

  const [characters, setCharacters] = useState([]);

  const search = (formValue, actions) => {
    const rightCharacters = characters.filter( chr => {
      if(chr.name.toLowerCase().includes(formValue.name)){
        return chr
      }
    })
    setCharacters(rightCharacters);
    actions.resetForm();
  }

  const validationSchema = {a:'boy'};

  return (
    <MainStyle>
      <Header />
      <Route exact path='/' render={props => <WelcomePage {...props} />} />
      <Route path='/characters' 
        render={props => <Form 
        {...props} 
        search={search} 
        validationSchema={validationSchema} />}
      />
      <Route path='/characters' 
        render={props => <CharacterList 
        {...props} 
        characters={characters} 
        setCharacters={setCharacters} />}
      />
    </MainStyle>
  );
}