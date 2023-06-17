import Cell from "./Cell"
import "./css/Board.css"

type Props = {
    board: string[][]
}

function Board({board}: Props) {
  return <>
    <div className="board">
      {board.map((row, iRow) => (<div className="row" key={iRow}>
        {row.map((cell, iCell) => (<Cell cell={cell} key={iCell} />))}
      </div>)) }
    </div>
  </>
}

export default Board
