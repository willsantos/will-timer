import { useState } from "react";
import Button from "../Button";

function Form(){

  const [task, setTask] = useState('');
  const [time, setTime] = useState('00:00:00');

  console.log(task, time);

  return(
    <form >
    <div >
      <label htmlFor="tarefa">
        Adicione uma tarefa
      </label>
      <input
        type="text"
        name="tarefa"
        id="tarefa"
        value={task}
        onChange={event => setTask(event.target.value)}
        placeholder="O que você quer fazer?"
        required
      />
    </div>
    <div >
      <label htmlFor="tempo">
        Tempo
      </label>
      <input
        type="time"
        step="1"
        name="tempo"
        value={time}
        onChange={event => setTime(event.target.value)}
        id="tempo"
        min="00:00:00"
        max="01:30:00"
        required
      />
    </div>
    <Button value="Adicionar" type="submit" hasNotify={false} ></Button>
  </form>
  );
}

export default Form;