import Cell from "./Cell"
import { Board as TBoard, Card, Position } from "./types"
import "./css/Board.css"
import { isHighlighted, isSelected } from "./functions"

type Props = {
  board: TBoard
  selectedCell: Position
  selectedCard: Card
  turn: number
  nextTurn: () => void
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>
  setSelectedCell: React.Dispatch<React.SetStateAction<Position>>
  isPlaying: boolean
}

function Board({board, selectedCell, selectedCard, turn, nextTurn, setBoard, setSelectedCell, isPlaying}: Props) {
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
              isPlaying={isPlaying}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
