import { emptyC, nilPos } from "./constants"
import { Position } from "./types"
import "./css/Cell.css"

type Props = {
  selected: boolean
  highlighted: boolean
  cell: string
  position: Position
  turn: number
  selectedCell: Position
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>
  board: string[][]
  setSelectedCell: React.Dispatch<React.SetStateAction<Position>>
  nextTurn: () => void
}

function Cell({selected, highlighted, cell, position, selectedCell, setSelectedCell, turn, nextTurn, setBoard, board}: Props) {

  function handleClick() {
    // selects cell and returns on clicking onw player's pieces
    if (parseInt(cell.substring(1, 2)) === turn) {
      setSelectedCell(position)
      return
    }

    // return on clicking cell that does not belong to current player while not having selected a piece
    if (selectedCell === nilPos) {
      return
    }

    // return on clicking cell that the player cannot move to
    if (!highlighted) {
      return
    }

    // moves selected piece to desired location
    const newBoard = [...board]

    let pieceName = newBoard[selectedCell[1]][selectedCell[0]] // current cell
    newBoard[selectedCell[1]][selectedCell[0]] = emptyC
    newBoard[position[1]][position[0]] = pieceName

    nextTurn()

    setBoard(
      newBoard
    )
  }

  return <>
    <div className={
      "cell" + (
        highlighted && cell === emptyC ? " highlighted-cell" :
        highlighted && cell !== emptyC && cell !== board[selectedCell[1]][selectedCell[0]] && parseInt(cell.substring(1, 2)) !== turn ? " to-be-attacked-cell" :
        selected ? " selected-cell" : "")
      }
      onClick={handleClick}
    >
      {cell}
    </div>
  </>
}

export default Cell
