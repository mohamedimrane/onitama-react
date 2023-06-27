import Cell from "./Cell"
import { Board as TBoard, Card, Position } from "./types"
import "./css/Board.css"

type Props = {
  board: TBoard
  selectedCell: Position
  selectedCard: Card
  turn: number
  nextTurn: () => void
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>
  setSelectedCell: React.Dispatch<React.SetStateAction<Position>>
}

function Board({board, selectedCell, selectedCard, turn, nextTurn, setBoard, setSelectedCell}: Props) {
  return (
    <div className="board">
      {board.map((row, iRow) => (
        <div className="row" key={iRow}>
          {row.map((cell, iCell) => (
            <Cell
              board={board}
              cell={cell}
              position={[iCell, iRow]}
              selectedCell={selectedCell}
              selected={isSelected([iCell, iRow], selectedCell)}
              highlighted={isHighlighted([iCell, iRow], selectedCell, selectedCard)}
              turn={turn}
              nextTurn={nextTurn}
              setBoard={setBoard}
              setSelectedCell={setSelectedCell}
              key={iCell}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

function isSelected(cell: Position, selectedCell: Position): boolean {
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
