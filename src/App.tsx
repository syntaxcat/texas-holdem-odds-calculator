import "./App.css"

type Suit = "Hearts" | "Diamonds" | "Clubs" | "Spades"
type Rank =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K"
  | "A"

interface Card {
  rank: Rank
  suit: Suit
}

const createDeck = (): Card[] => {
  const suits: Suit[] = ["Hearts", "Diamonds", "Clubs", "Spades"]
  const ranks: Rank[] = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]

  let deck: Card[] = []

  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push({rank, suit})
    }
  }
  // console.log(deck)
  return deck
}

// createDeck()

function App() {
  return (
    <>
      <h1>let's get coding</h1>
    </>
  )
}

export default App
