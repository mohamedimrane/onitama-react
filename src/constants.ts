import { Board, Card, CardDeck, Position } from "./types"

export const nilPos: Position = [NaN, NaN] // nil position

export const nilCard: Card = [[NaN]] // empty card

export const initialCards: CardDeck = [
    [[-1, 0], [-1, -1], [1, 0], [1, 1]], // GOOSE
    [[-1, 0], [0, -1], [0, 1]],          // HORSE
    [[-1, 0], [1, 0], [0, -1]],          // BOAR
    [[1, 0], [-1, -1], [-1, 1]],         // ELL
    [[-1, 1], [1, -1], [2, 0]],          // RABBIT
]

export const emptyBoard: Board = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
]

export const emptyC = "" // empty cell
export const m0C = "m0"  // master 0
export const m1C = "m1"  // master 1
export const d0C = "d0"  // disciple 0
export const d1C = "d1"  // disciple 1
