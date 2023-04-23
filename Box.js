function Box(props){
    return(
        <div onClick={props.handle_click}>
            <h1>
                Toi la {props.name} va toi {props.old} tuoi
            </h1>
        </div>
    )
}
export default Box;