import { useEffect, useState } from "react"
import Board from "./Board"
import { initialCards, m0C, m1C, nilCard, nilPos } from "./constants"
import { Board as TBoard, Card, Cards, Position} from "./types"
import CardShower from "./CardShower"
import './css/App.css'
import { generateCards } from "./functions"

function App() {
  const [board, setBoard] = useState<TBoard>([
    ["d0", "d0", "m0", "d0", "d0"],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["d1", "d1", "m1", "d1", "d1"],
  ])

  const [turn , setTurn] = useState(0)

  const [cards, setCards] = useState<Cards>(generateCards(initialCards))

  const [selectedCell, setSelectedCell] = useState<Position>(nilPos)
  const [selectedCard, setSelectedCard] = useState<Card>(nilCard)

  function nextTurn(): void {
    // card switching
    const toSwitch = selectedCard
    const fifthCard = cards.fifthCard
    const toSwitchIndex = cards.playerCards[turn].findIndex(card => {
      return card === toSwitch
    })

    const newCards = { ...cards }
    newCards.playerCards[turn][toSwitchIndex] = fifthCard
    newCards.fifthCard = toSwitch

    setCards(newCards)

    // turn changing
    setTurn(turn === 0 ? 1 : 0)

    // variable reseting
    setSelectedCell(nilPos)
    setSelectedCard(nilCard)
  }

  function checkWin(): void {
    let p0Wins = false
    let p1Wins = false

    p0Wins = board.every(row => {
      return row.every(cell => {
        return cell !== m1C
      })
    })

    p1Wins = board.every(row => {
      return row.every(cell => {
        return cell !== m0C
      })
    })

    if (!p0Wins && !p1Wins) {
      if (board[0][2] === m1C) p1Wins = true
      else if (board[4][2] === m0C) p0Wins = true
    }

    if (p1Wins) {
      console.log("1 wins");
    } else if (p0Wins) {
      console.log("0 wins")
    }
  }

  useEffect(checkWin, [board])

  return (
    <>
      <Board
        board={board}
        selectedCell={selectedCell}
        selectedCard={selectedCard}
        turn={turn}
        nextTurn={nextTurn}
        setBoard={setBoard}
        setSelectedCell={setSelectedCell}
      />
      <div className="turn-text" onClick={nextTurn}>turn: {turn}</div>
      <CardShower
        cards={cards}
        selectedCardIndex={cards.playerCards[turn].findIndex(card => (card === selectedCard))}
        turn={turn}
        setSelectedCard={setSelectedCard}
      />
    </>
  )
}

export default App
