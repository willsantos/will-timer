import { useState } from "react";
import {TextField, Button} from '@material-ui/core';



function Form(){

  const [task, setTask] = useState('');
  const [time, setTime] = useState('00:00:00');

  console.log(task, time);

  return(
    <form >
    <div >
      <TextField 
        id="tarefa" 
        label="Adicione uma tarefa" 
        value={task}
        onChange={event => setTask(event.target.value)}
        placeholder="O que você quer fazer?"
        required
        variant="outlined" />
      
    </div>
    <div >
      
      <TextField
        id="tempo"
        label="Quanto tempo vai levar?"
        type="time"
        value={time}
        onChange={event => setTime(event.target.value)}
        required
      />
      
    </div>
    <Button variant="contained" type="submit" >Adicionar &nbsp;<i className="material-icons">send</i></Button>
  </form>
  );
}

export default Form;