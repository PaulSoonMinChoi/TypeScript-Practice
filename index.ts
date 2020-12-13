enum Suits {
  Spades, Clubs, Diamonds, Hearts
}

enum CardNumbers {
  Ace, One, Two, Three, Four, Five,
  Six, Seven, Eight, Nine, Ten,
  Jack, Queen, King
}

type Card = [Suits, CardNumbers];


let testCard: Card = [Suits.Spades, CardNumbers.Queen];

console.log(testCard)

class Dealer {
  cards: Card[] = [];



}

console.log(Object.keys(Suits))