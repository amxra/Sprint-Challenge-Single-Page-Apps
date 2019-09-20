import React, {useState} from "react";
import Header from "./components/Header.js";
import {Route} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";


export default function App() {
  const [characters, setCharacters] = useState([])
  return (
    <main>
      <Header />
      <Route exact path='/' render={props => <WelcomePage {...props} />} />
      <Route path='/characters' render={props => <CharacterList {...props} characters={characters} setCharacters ={setCharacters}/>} />
    </main>
  );
}
