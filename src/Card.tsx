import { emptyBoard } from "./constants"
import { matchCells } from "./functions"
import { Card as TCard } from "./types"

type Props = {
  card: TCard
  className?: string
  onClick?: Function
}

export function Card({card, className, onClick}: Props) {
  const getClassNameForCell = (iCell: number, iRow: number) => (
    "card-cell" +
    (matchCells(card, [iCell, iRow]) ? " card-cell-move" : 
    iCell === 2 && iRow === 2 ? " card-cell-center" : "")
  )
  
  return (
    <div className={"card " + className} onClick={onClick?.(card)}>
      {emptyBoard.map((row, iRow) => (
        <div className="card-row" key={iRow}>
          {row.map((_, iCell) => (
            <div className={getClassNameForCell(iCell, iRow)} key={iCell}>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}