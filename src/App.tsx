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
  const suits = cards.map((card) => card.suit)
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

const rankOrder: Rank[] = [
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

const sortByRank = (cards: Card[]): Card[] => {
  return cards.sort(
    (a, b) => rankOrder.indexOf(a.rank) - rankOrder.indexOf(b.rank)
  )
}

const isStraight = (cards: Card[]): boolean => {
  const sortedCards = sortByRank(cards)

  const rankIndices = sortedCards.map((card) => rankOrder.indexOf(card.rank))

  for (let i = 0; i < rankIndices.length - 1; i++) {
    if (rankIndices[i] + 1 !== rankIndices[i + 1]) {
      return false
    }
  }

  return true
}

// const hand1: Card[] = [s
//   {rank: "6", suit: "Hearts"},
//   {rank: "2", suit: "Diamonds"},
//   {rank: "3", suit: "Hearts"},
//   {rank: "4", suit: "Diamonds"},
//   {rank: "5", suit: "Hearts"}
// ]

// const hand2: Card[] = [
//   {rank: "7", suit: "Hearts"},
//   {rank: "K", suit: "Diamonds"},
//   {rank: "9", suit: "Diamonds"},
//   {rank: "10", suit: "Diamonds"},
//   {rank: "J", suit: "Hearts"}
// ]

// console.log(isStraight(hand1)) // Output: true
// console.log(isStraight(hand2)) // Output: false

function App() {
  return (
    <>
      <h1>let's get coding</h1>
    </>
  )
}

export default App
