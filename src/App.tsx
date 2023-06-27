import React, { useState } from 'react';
import './App.css';
import Button from "./components/Button";
import Form from './components/Form';
import TaskList from './components/TaskList';



function App() {

  const [tasks, setTasks] = useState(["teste", "teste2", "teste3", "teste4", "teste5"]);


  return (
    <div className="App">
      <h1>Hello World</h1> 
      <p>Aperta <Button value="Meu Botão" notifyMessage='Cade vc Gabi?!' hasNotify></Button></p>
      <Form/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
