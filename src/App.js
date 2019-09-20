import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import Form from "./components/Form";


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
    <main>
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
    </main>
  );
}