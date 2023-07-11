import { emptyC, nilPos } from "./constants"
import { Board, Position } from "./types"
import "./css/Cell.css"
import { playerOfCell } from "./functions"
import m0_img from "./assets/m0.png"
import m1_img from "./assets/m1.png"
import d0_img from "./assets/d0.png"
import d1_img from "./assets/d1.png"

type Props = {
  board: Board
  cell: string
  position: Position
  selectedCell: Position
  selected: boolean
  highlighted: boolean
  turn: number
  nextTurn: () => void
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>
  setSelectedCell: React.Dispatch<React.SetStateAction<Position>>
  isPlaying: boolean
}

function Cell({board, cell, position, selectedCell, selected, highlighted, turn, nextTurn, setBoard, setSelectedCell, isPlaying}: Props) {

  function handleClick(): void {
    if (!isPlaying) return

    // selects cell and returns on clicking onw player's pieces
    if (playerOfCell(cell) === turn) {
      setSelectedCell(position)
      return
    }

    // return on clicking cell that does not belong to current player while not having selected a piece
    if (selectedCell === nilPos) return

    // return on clicking cell that the player cannot move to
    if (!highlighted) return

    // moves selected piece to desired location
    const newBoard = [...board]

    const pieceName = newBoard[selectedCell[1]][selectedCell[0]] // current cell
    newBoard[selectedCell[1]][selectedCell[0]] = emptyC
    newBoard[position[1]][position[0]] = pieceName

    nextTurn()

    setBoard(
      newBoard
    )
  }

  const className = "cell" + (
    highlighted && cell === emptyC ? " highlighted-cell" :
    highlighted && cell !== emptyC && cell !== board[selectedCell[1]][selectedCell[0]] && playerOfCell(cell) !== turn ? " to-be-attacked-cell" :
    selected ? " selected-cell" : ""
  )

  let imgSource = null
  if (cell === "m0") imgSource = m0_img
  else if (cell === "m1") imgSource = m1_img
  else if (cell === "d0") imgSource = d0_img
  else if (cell === "d1") imgSource = d1_img

  return (
    <div className={className} onClick={handleClick}>
      {imgSource ? <img src={imgSource as string} /> : ""}
    </div>
  )
}

export default Cell
