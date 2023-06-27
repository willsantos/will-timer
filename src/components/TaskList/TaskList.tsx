import { List } from "@mui/material";
import ItemList from "./ItemList";

interface IProps{
  tasks : string[],
}


function TaskList({tasks}: IProps){
  const tarefas = [
    {
    task: "teste",
    time: "00:00:00"
    },
    {
    task: "teste2",
    time: "00:10:00"
    },
    {
    task: "teste3",
    time: "00:20:00"
    },
    {
    task: "teste4",
    time: "00:30:00"
    },
]
  return(
    <>
      <h2>Tarefas</h2>
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      >
      {tarefas.map((item, index) => (
                <ItemList key={index} task={item.task} time={item.time}/>
              ))}
      </List>
        
      
    </>
  );
}

export default TaskList;