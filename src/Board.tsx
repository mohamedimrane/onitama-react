import Cell from "./Cell"
import "./css/Board.css"
import { Position } from "./types"

type Props = {
  board: string[][];
  turn: number;
  setSelectedCell: React.Dispatch<React.SetStateAction<Position>>
}

function Board({board, setSelectedCell, turn}: Props) {
  return <>
    <div className="board">
      {board.map((row, iRow) => (<div className="row" key={iRow}>
        {row.map((cell, iCell) => (<Cell cell={cell} position={[iCell, iRow]} setSelectedCell={setSelectedCell} turn={turn} key={iCell} />))}
      </div>)) }
    </div>
  </>
}

export default Board
