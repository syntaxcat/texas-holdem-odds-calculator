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

const isFlush = (cards: Card[]): boolean => {
  // Map the cards array to get an array of suits
  const suits = cards.map((card) => card.suit)
  // Check if all suits are the same by comparing each suit to the first suit
  return suits.every((suit) => suit === suits[0])
}

// const hand1: Card[] = [
//   {rank: "A", suit: "Hearts"},
//   {rank: "K", suit: "Hearts"},
//   {rank: "Q", suit: "Hearts"},
//   {rank: "J", suit: "Hearts"},
//   {rank: "10", suit: "Hearts"}
// ]

// const hand2: Card[] = [
//   {rank: "A", suit: "Hearts"},
//   {rank: "K", suit: "Diamonds"},
//   {rank: "Q", suit: "Hearts"},
//   {rank: "J", suit: "Hearts"},
//   {rank: "10", suit: "Hearts"}
// ]

// console.log(isFlush(hand1)) // Output: true
// console.log(isFlush(hand2)) // Output: false

function App() {
  return (
    <>
      <h1>let's get coding</h1>
    </>
  )
}

export default App
