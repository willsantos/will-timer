import { List } from "@mui/material";
import ItemList from "./ItemList";
import { useState } from "react";

interface IProps {
  tasks: string[];
}

function TaskList({ tasks }: IProps) {
  const [tarefas, setTarefas] = useState([
    {
      task: "teste",
      time: "00:00:00",
    },
    {
      task: "teste2",
      time: "00:10:00",
    },
    {
      task: "teste3",
      time: "00:20:00",
    },
    {
      task: "teste4",
      time: "00:30:00",
    },
  ]);
  return (
    <>
      <h2 onClick={()=>{ setTarefas([...tarefas,{task:"nova tarefa",time:"04:03:01"}]) }}>Tarefas</h2>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {tarefas.map((item, index) => (
          <ItemList key={index} task={item.task} time={item.time} />
        ))}
      </List>
    </>
  );
}

export default TaskList;
