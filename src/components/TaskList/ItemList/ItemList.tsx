import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
interface Iprops{
    task: string,
    time: string
}

function ItemList({task,time}: Iprops){
    return(
        <div>
          <ListItemButton>
            <ListItemText primary={task} secondary={time}/>
            <DeleteIcon/>

          </ListItemButton>
        </div>
    )
}

export default ItemList;