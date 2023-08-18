import React from 'react';
import './App.css';
// import favicon from "./favicon.png"
// import logo from "./Logo Site.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Header from './header/header';
import Footer from './footer/footer';
import Formulaire from './formulaire/formulaire';
import Cards from './cards/cards';

function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <h3>Vous n`avez pas choisi votre travail, choisissez votre retraite</h3>
      <h2>Nos résidences sénior en Tunisie</h2>
      <br></br>
      <Cards />
      <br></br>
      <hr></hr>
      <br></br>
      <Formulaire />
      <Footer />
    </div>
  );
}
export default App;
