import { emptyBoard } from "./constants"
import { matchCells } from "./functions"
import { Card as TCard } from "./types"

type Props = {
  card: TCard
  className?: string
  onClick?: Function
}

export function Card({card, className, onClick}: Props) {
  return (
    <div className={"card " + className} onClick={onClick?.(card)}>
      {emptyBoard.map((row, iRow) => (
        <div className="card-row" key={iRow}>
          {row.map((_, iCell) => (
            <div className="card-cell" key={iCell}>
              {matchCells(card, [iCell, iRow]) ? "X" : ""}
              {iCell === 2 && iRow === 2 ? "O" : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}