import { useState } from "react"
import './App.css'
import Board from "./Board"
import { initialCards } from "./constants"

function App() {
  const [board, setBoard] = useState([
    ["s0", "s0", "m0", "s0", "s0"],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["s1", "s1", "m1", "s1", "s1"],
  ])

  const [cards, setCards] = useState(generateCards(initialCards))

  return (
    <>
      <Board board={board} />
    </>
  )
}

type Card = number[][]

type CardDeck = Card[]

type Cards = {
  playerCards: CardDeck[];
  fifthCard: Card
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
