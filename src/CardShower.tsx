import { Card as TCard, Cards } from "./types"
import "./css/CardShower.css"
import { Card } from "./Card.tsx"

type Props = {
  cards: Cards
  selectedCardIndex: number
  turn: number
  setSelectedCard: React.Dispatch<React.SetStateAction<TCard>>
}

function CardShower({ cards, selectedCardIndex, turn, setSelectedCard }: Props) {
  function handleClick(card: TCard) {
    return () => { setSelectedCard(card) }
  }

  return (
    <div className="card-container">
      {cards.playerCards[turn].map((card, iCard) => (
        <Card className={selectedCardIndex === iCard ? "selected-card": ""}  card={card} handleClick={handleClick} key={iCard} />
      ))}
    </div>
  )
}

export default CardShower
