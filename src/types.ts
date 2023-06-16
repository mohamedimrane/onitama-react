export type Card = number[][]

export type CardDeck = Card[]

export type Cards = {
  playerCards: CardDeck[];
  fifthCard: Card
}