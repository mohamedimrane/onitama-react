import { useEffect, useState } from "react"
import Board from "./Board"
import { initialCards, m0C, m1C, nilCard, nilPos } from "./constants"
import { Board as TBoard, Card, Cards, Position} from "./types"
import CardShower from "./CardShower"
import './css/App.css'
import { generateCards } from "./functions"

function App() {
  const [isPlaying, setIsPlaying] = useState(true)

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

    setTurn(turn === 0 ? 1 : 0)

    unselectEverything()
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
      setIsPlaying(false)
      unselectEverything()
    } else if (p0Wins) {
      console.log("0 wins")
      setIsPlaying(false)
      unselectEverything()
    }
  }

  function unselectEverything(): void {
    setSelectedCell(nilPos)
    setSelectedCard(nilCard)
  }

  useEffect(checkWin, [board])

  return (
    <div className="container">
      <div>
        <h1 className="text-center">ONITAMA</h1>
        <Board
          board={board}
          selectedCell={selectedCell}
          selectedCard={selectedCard}
          turn={turn}
          nextTurn={nextTurn}
          setBoard={setBoard}
          setSelectedCell={setSelectedCell}
          isPlaying={isPlaying}
        />
        <div className="turn-text">{turn === 0 ? "Red player's turn" : turn === 1 ? "Blue player's turn" : ""}</div>
        <CardShower
          cards={cards}
          selectedCardIndex={cards.playerCards[turn].findIndex(card => (card === selectedCard))}
          turn={turn}
          setSelectedCard={setSelectedCard}
          isPlaying={isPlaying}
        />
      </div>
    </div>
  )
}

export default App
