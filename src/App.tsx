import { useState } from "react"
import Board from "./Board"
import { initialCards, nilCard, nilPos } from "./constants"
import { Card, CardDeck, Cards, Position} from "./types"
import CardShower from "./CardShower"
import './css/App.css'

function App() {
  const [board, setBoard] = useState([
    ["d0", "d0", "m0", "d0", "d0"],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["d1", "d1", "m1", "d1", "d1"],
  ])

  const [turn , setTurn] = useState(0)

  const [cards, setCards] = useState(generateCards(initialCards))

  const [selectedCell, setSelectedCell] = useState<Position>(nilPos)
  const [selectedCard, setSelectedCard] = useState<Card>(nilCard)

  const nextTurnFn = () => nextTurn(turn, setTurn, setSelectedCell, setSelectedCard)

  return (
    <>
      <Board board={board} setBoard={setBoard} turn={turn} setSelectedCell={setSelectedCell}  selectedCell={selectedCell} selectedCard={selectedCard} nextTurn={nextTurnFn} />
      <div className="turn-text" onClick={nextTurnFn}>turn: {turn}</div>
      <CardShower cards={cards} selectedCardIndex={cards.playerCards[turn].findIndex(card => {
        return card === selectedCard
      })} turn={turn} setSelectedCard={setSelectedCard} />
    </>
  )
}

function nextTurn(turn: number, setTurn: React.Dispatch<React.SetStateAction<number>>, setSelectedCell: React.Dispatch<React.SetStateAction<Position>>, setSelectedCard: React.Dispatch<React.SetStateAction<Card>>) {
  setTurn(turn === 0 ? 1 : 0)
  setSelectedCell(nilPos)
  setSelectedCard(nilCard)
}

function generateCards(cards: CardDeck): Cards {
  return {
    playerCards: [
      [cards[0], cards[1]],
      [cards[2], cards[3]]
    ],
    fifthCard: cards[4]
  }
}

export default App
