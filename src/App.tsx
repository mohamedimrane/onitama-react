import { useState } from "react"
import './App.css'
import Board from "./Board"
import { initialCards } from "./constants"
import { CardDeck, Cards} from "./types"
import CardShower from "./CardShower"

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

  return (
    <>
      <Board board={board} />
      <div className="turn-text" onClick={() => nextTurn(turn, setTurn)}>turn: {turn}</div>
      <CardShower cards={cards} turn={turn} />
    </>
  )
}

function nextTurn(turn: number, setTurn: React.Dispatch<React.SetStateAction<number>>) {
  setTurn(turn === 0 ? 1 : 0)
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
