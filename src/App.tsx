import { useState } from "react"
import './App.css'
import Board from "./Board"

function App() {
  const [board, setBoard] = useState([
    ["s0", "s0", "m0", "s0", "s0"],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["s1", "s1", "m1", "s1", "s1"],
  ])

  return (
    <>
      <Board board={board}/>
    </>
  )
}

export default App
