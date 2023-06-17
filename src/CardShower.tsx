import { emptyBoard } from "./constants"
import { Card, Cards } from "./types"
import "./css/CardShower.css"

type Props = {
  cards: Cards;
  turn: number
}

function CardShower({cards, turn}: Props) {
  return <>
    <div className="card-container">
      {cards.playerCards[turn].map((card, iCard) => (<div className="card" key={iCard}>
        {emptyBoard.map((row, iRow) => (<div className="card-row" key={iRow}>
          {row.map((cell, iCell) => (<div className="card-cell" key={iCell}>
            {matchCells(card, [iCell, iRow]) ? "X" : ""}
            {iCell === 2 && iRow === 2 ? "O" : ""}
          </div>))}
        </div>))}
      </div>))}
    </div>
  </>
}

function matchCells(card: Card, cell: number[]) {
  return card.some(i => {
    return i[0] === cell[0]-2 && i[1] === cell[1]-2
  })
}

export default CardShower
