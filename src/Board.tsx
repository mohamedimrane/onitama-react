import Cell from "./Cell"
import "./css/Board.css"
import { Card, Position } from "./types"

type Props = {
  board: string[][];
  turn: number;
  setSelectedCell: React.Dispatch<React.SetStateAction<Position>>;
  selectedCell: Position;
  selectedCard: Card
}

function Board({board, setSelectedCell, turn, selectedCell, selectedCard}: Props) {
  return <>
    <div className="board">
      {board.map((row, iRow) => (<div className="row" key={iRow}>
        {row.map((cell, iCell) => (<Cell highlighted={isHighlighted([iCell, iRow], selectedCell, selectedCard)} cell={cell} position={[iCell, iRow]} setSelectedCell={setSelectedCell} turn={turn} key={iCell} />))}
      </div>)) }
    </div>
  </>
}

function isHighlighted(cell: Position, selectedCell: Position, selectedCard: Card): boolean {
  return selectedCard.some(move => {
    if (cell[0] === selectedCell[0] + move[0] && cell[1] === selectedCell[1] + move[1]) {
      return true
    }
  })
}

export default Board
