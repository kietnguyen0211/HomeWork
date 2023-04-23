import Box from "./Box"
import BoxGame from "./BoxGame";
import { useState } from "react";
function App1() {
    const [show, setShow] = useState(true);
    function handle_click() {
        alert("Click");
    }
    const [check, setCheck] = useState(true);
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

    const handle_play = (index) => {
        if (board[index] !== "") {
            return;
        }
        let newBoard = [...board];
        newBoard[index] = check ? "X" : "O";
        setBoard(newBoard);
        setCheck(!check);
    }
    return (
        <div>
            {show ? <Box old={8} name={"Le Meo"} handle_click={handle_click} /> : ""}
            <button onClick={() => setShow(!show)} >Toggle Mount</button>
            <div className="game">
                {
                    board.map((value, key) => {
                        return (
                            <BoxGame value={board[key]}
                                handle_play={handle_play}
                                key={key}
                                index={key} />
                        );
                    })
                }
            </div>
        </div>
    )
}
export default App1;