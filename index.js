var Suits;
(function (Suits) {
    Suits[Suits["Spades"] = 0] = "Spades";
    Suits[Suits["Clubs"] = 1] = "Clubs";
    Suits[Suits["Diamonds"] = 2] = "Diamonds";
    Suits[Suits["Hearts"] = 3] = "Hearts";
})(Suits || (Suits = {}));
var CardNumbers;
(function (CardNumbers) {
    CardNumbers[CardNumbers["Ace"] = 0] = "Ace";
    CardNumbers[CardNumbers["One"] = 1] = "One";
    CardNumbers[CardNumbers["Two"] = 2] = "Two";
    CardNumbers[CardNumbers["Three"] = 3] = "Three";
    CardNumbers[CardNumbers["Four"] = 4] = "Four";
    CardNumbers[CardNumbers["Five"] = 5] = "Five";
    CardNumbers[CardNumbers["Six"] = 6] = "Six";
    CardNumbers[CardNumbers["Seven"] = 7] = "Seven";
    CardNumbers[CardNumbers["Eight"] = 8] = "Eight";
    CardNumbers[CardNumbers["Nine"] = 9] = "Nine";
    CardNumbers[CardNumbers["Ten"] = 10] = "Ten";
    CardNumbers[CardNumbers["Jack"] = 11] = "Jack";
    CardNumbers[CardNumbers["Queen"] = 12] = "Queen";
    CardNumbers[CardNumbers["King"] = 13] = "King";
})(CardNumbers || (CardNumbers = {}));
var testCard = [Suits.Spades, CardNumbers.Queen];
console.log(testCard);
var Dealer = /** @class */ (function () {
    function Dealer() {
        this.cards = [];
    }
    return Dealer;
}());
console.log(Object.keys(Suits));
