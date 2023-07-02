import { Card as TCard, Cards } from "./types"
import "./css/CardShower.css"
import { Card } from "./Card.tsx"

type Props = {
  cards: Cards
  selectedCardIndex: number
  turn: number
  setSelectedCard: React.Dispatch<React.SetStateAction<TCard>>
  isPlaying: boolean
}

function CardShower({cards, selectedCardIndex, turn, setSelectedCard, isPlaying}: Props) {
  function handleClick(card: TCard) {
    return () => {
      if (!isPlaying) return

      setSelectedCard(card)
    }
  }

  return (
    <div className="cards-container">
      <div className="playable-cards-container">
        {cards.playerCards[turn].map((card, iCard) => (
          <Card className={selectedCardIndex === iCard ? "selected-card": ""}  card={card} onClick={handleClick} key={iCard} />
        ))}
      </div>
      <div className="fifth-card-container">
        <Card card={cards.fifthCard} />
      </div>
    </div>
  )
}

export default CardShower
