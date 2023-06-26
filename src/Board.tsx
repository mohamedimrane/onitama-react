import Cell from "./Cell"
import "./css/Board.css"
import { Card, Position } from "./types"

type Props = {
  board: string[][]
  turn: number
  setSelectedCell: React.Dispatch<React.SetStateAction<Position>>
  selectedCell: Position
  selectedCard: Card
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>
  nextTurn: () => void
}

function Board({board, setSelectedCell, turn, selectedCell, selectedCard, setBoard, nextTurn}: Props) {
  return <>
    <div className="board">
      {board.map((row, iRow) => (<div className="row" key={iRow}>
        {row.map((cell, iCell) => (<Cell selected={isSelected([iCell, iRow], selectedCell)} highlighted={isHighlighted([iCell, iRow], selectedCell, selectedCard)} cell={cell} position={[iCell, iRow]} board={board} setBoard={setBoard} selectedCell={selectedCell} setSelectedCell={setSelectedCell} turn={turn} nextTurn={nextTurn} key={iCell} />))}
      </div>)) }
    </div>
  </>
}

function isSelected(cell: Position, selectedCell: Position) {
  return cell[0] === selectedCell[0] && cell[1] === selectedCell[1]
}

function isHighlighted(cell: Position, selectedCell: Position, selectedCard: Card): boolean {
  return selectedCard.some(move => {
    if (cell[0] === selectedCell[0] + move[0] && cell[1] === selectedCell[1] + move[1]) {
      return true
    }
  })
}

export default Board
