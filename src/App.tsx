import { useState } from "react"
import Board from "./Board"
import { initialCards } from "./constants"
import { Card, CardDeck, Cards, Position} from "./types"
import CardShower from "./CardShower"
import './css/App.css'

function App() {
  const [board, setBoard] = useState([
    ["s0", "s0", "m0", "s0", "s0"],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["s1", "s1", "m1", "s1", "s1"],
  ])

  const [turn , setTurn] = useState(0)

  const [cards, setCards] = useState(generateCards(initialCards))

  const [selectedCell, setSelectedCell] = useState<Position>([NaN, NaN])
  const [selectedCard, setSelectedCard] = useState<Card>([[NaN]])

  return (
    <>
      <Board board={board} turn={turn} setSelectedCell={setSelectedCell}  selectedCell={selectedCell} selectedCard={selectedCard} />
      <div className="turn-text" onClick={() => nextTurn(turn, setTurn, setSelectedCell, setSelectedCard)}>turn: {turn}</div>
      <CardShower cards={cards} selectedCardIndex={cards.playerCards[turn].findIndex(card => {
        return card === selectedCard
      })} turn={turn} setSelectedCard={setSelectedCard} />
    </>
  )
}

function nextTurn(turn: number, setTurn: React.Dispatch<React.SetStateAction<number>>, setSelectedCell: React.Dispatch<React.SetStateAction<Position>>, setSelectedCard: React.Dispatch<React.SetStateAction<Card>>) {
  setTurn(turn === 0 ? 1 : 0)
  setSelectedCell([NaN, NaN])
  setSelectedCard([[NaN]])
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
