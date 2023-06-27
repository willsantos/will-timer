import { useState } from "react";
import {TextField, Button, FormControl} from '@mui/material';
import SendIcon from '@mui/icons-material/ScheduleSend';


function Form(){

  const [task, setTask] = useState('');
  const [time, setTime] = useState('00:00:00');

  return(
    <FormControl>
    
      <TextField 
        sx={{width: '100%',mb: 2}}
        id="tarefa" 
        label="Adicione uma tarefa" 
        value={task}
        onChange={event => setTask(event.target.value)}
        placeholder="O que você quer fazer?"
        required
        variant="outlined" />
  
      
      <TextField
        sx={{width: '100%',mb: 2}}
        id="tempo"
        label="Quanto tempo vai levar?"
        type="time"
        value={time}
        onChange={event => setTime(event.target.value)}
        required
      />
      
   
    <Button variant="contained" endIcon={<SendIcon/>} color="success">
      Adicionar
    </Button>
  </FormControl>
  );
}

export default Form;