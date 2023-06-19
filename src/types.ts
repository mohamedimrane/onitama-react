export type Position = number[]

export type Card = Position[]

export type CardDeck = Card[]

export type Cards = {
  playerCards: CardDeck[];
  fifthCard: Card
}