import { emptyC } from "./constants"
import { Position } from "./types"

type Props = {
  cell: string;
  position: Position;
  turn: number;
  setSelectedCell: React.Dispatch<React.SetStateAction<Position>>
}

function Cell({cell, position, setSelectedCell, turn}: Props) {

  function handleClick() {
    if (cell === emptyC) return
    if (!(parseInt(cell.substring(1, 2)) === turn)) return
    setSelectedCell(position)
  }

  return <>
    <div className="cell" onClick={handleClick}>
      {cell}
    </div>
  </>
}

export default Cell
