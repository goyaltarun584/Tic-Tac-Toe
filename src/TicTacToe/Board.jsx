import { React, useState } from "react";
import Square from "./Square";


const Board = () => {

    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    // const [playAgain, setPlayAgain] = useState(false);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let logic of winnerLogic) {
            let [a, b, c] = logic;
            if (state[a] != null && state[a] === state[b] && state[b] === state[c]) {
                return state[a];
            }
        }
        return false;
    }

    let isWinner = checkWinner();
    console.log(isWinner)

    const handleClick = (index) => {
        if(state[index]!=null) return;
        const copyState = [...state];
        copyState[index] = isXTurn ? 'X' : 'O';
        setState(copyState);
        setIsXTurn(!isXTurn);
    }

    const playAgainFunc = () => {
        // isWinner = false;
        setState(Array(9).fill(null));
    }

    return (
        <div className="board-container">
            {isWinner ?
                (<>{isWinner} won the game
                <button onClick={()=>playAgainFunc()}>Play again</button></>) :
                (<><div className="board-row">
                    <Square onclick={() => handleClick(0)} value={state[0]} />
                    <Square onclick={() => handleClick(1)} value={state[1]} />
                    <Square onclick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Square onclick={() => handleClick(3)} value={state[3]} />
                        <Square onclick={() => handleClick(4)} value={state[4]} />
                        <Square onclick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onclick={() => handleClick(6)} value={state[6]} />
                        <Square onclick={() => handleClick(7)} value={state[7]} />
                        <Square onclick={() => handleClick(8)} value={state[8]} />
                    </div>
                </>)
            }
        </div>
    )
}

export default Board