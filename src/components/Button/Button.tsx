import  './ButtonStyle.css';
interface IProps{
    type?: "button" | "submit" | "reset"  |undefined,
    value: string,
    notifyMessage?: string,
    hasNotify:boolean
}

function Button(props:IProps,){
    const notify = () => {
        alert(!props.notifyMessage? "Tá vazio" : props.notifyMessage );
    }
    return(
        <button 
            className="ripple"
            onClick={props.hasNotify? notify : undefined}
            type={props.type}
        >
            {props.value}
        </button>
    )
}

export default Button;