import React from 'react';
import './App.css';
import Button from "./components/Button";
import Form from './components/Form';



function App() {
  return (
    <div className="App">
      <h1>Hello World</h1> 
      <p>Aperta <Button value="Meu Botão" notifyMessage='Cade vc Gabi?!' hasNotify></Button></p>
      <Form></Form>
    </div>
  );
}

export default App;
