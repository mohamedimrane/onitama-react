import { Card, CardDeck, Cards, Position } from "./types"

export function generateCards(cards: CardDeck): Cards {
  return {
    playerCards: [
      [cards[0], cards[1]],
      [cards[2], cards[3]]
    ],
    fifthCard: cards[4]
  }
}

export function matchCells(card: Card, cell: Position): boolean {
  return card.some(i => {
    return i[0] === cell[0]-2 && i[1] === cell[1]-2
  })
}


export function playerOfCell(cell: string): number {
  return parseInt(cell.substring(1, 2))
}


export function isSelected(cell: Position, selectedCell: Position): boolean {
  return cell[0] === selectedCell[0] && cell[1] === selectedCell[1]
}

export function isHighlighted(cell: Position, selectedCell: Position, selectedCard: Card): boolean {
  return selectedCard.some(move => {
    if (cell[0] === selectedCell[0] + move[0] && cell[1] === selectedCell[1] + move[1]) {
      return true
    }
  })
}
