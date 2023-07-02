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

export const emptyC: string = "" // empty cell
export const m0C: string = "m0"  // master 0
export const m1C: string = "m1"  // master 1
export const d0C: string = "d0"  // disciple 0
export const d1C: string = "d1"  // disciple 1
