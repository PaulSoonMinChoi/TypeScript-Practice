"use strict";
exports.__esModule = true;
exports.Stack = exports.CardNumbers = exports.Suits = void 0;
var Suits;
(function (Suits) {
    Suits[Suits["Spades"] = 0] = "Spades";
    Suits[Suits["Clubs"] = 1] = "Clubs";
    Suits[Suits["Diamonds"] = 2] = "Diamonds";
    Suits[Suits["Hearts"] = 3] = "Hearts";
})(Suits = exports.Suits || (exports.Suits = {}));
var CardNumbers;
(function (CardNumbers) {
    CardNumbers[CardNumbers["Ace"] = 0] = "Ace";
    CardNumbers[CardNumbers["Two"] = 1] = "Two";
    CardNumbers[CardNumbers["Three"] = 2] = "Three";
    CardNumbers[CardNumbers["Four"] = 3] = "Four";
    CardNumbers[CardNumbers["Five"] = 4] = "Five";
    CardNumbers[CardNumbers["Six"] = 5] = "Six";
    CardNumbers[CardNumbers["Seven"] = 6] = "Seven";
    CardNumbers[CardNumbers["Eight"] = 7] = "Eight";
    CardNumbers[CardNumbers["Nine"] = 8] = "Nine";
    CardNumbers[CardNumbers["Ten"] = 9] = "Ten";
    CardNumbers[CardNumbers["Jack"] = 10] = "Jack";
    CardNumbers[CardNumbers["Queen"] = 11] = "Queen";
    CardNumbers[CardNumbers["King"] = 12] = "King";
})(CardNumbers = exports.CardNumbers || (exports.CardNumbers = {}));
var testCard = [Suits.Spades, CardNumbers.Queen];
// console.log(testCard)
function createDeck() {
    var cards = [];
    for (var s = 0; s < Object.keys(Suits).length; s += 2) {
        for (var c = 0; c < Object.keys(CardNumbers).length; c += 2) {
            cards.push([s / 2, c / 2]);
        }
    }
    return cards;
}
var Dealer = /** @class */ (function () {
    function Dealer() {
        this.cards = [];
        this.cards = createDeck();
    }
    Dealer.prototype.getLegnth = function () {
        return this.cards.length;
    };
    return Dealer;
}());
// console.log(createDeck())
function orderSandwich(bread, name) {
    var toppings = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        toppings[_i - 2] = arguments[_i];
    }
    console.log(toppings);
    console.log(bread + " " + name + " " + toppings);
}
function cashier() {
    var items = [];
    return {
        get length() {
            return items.reduce(function (acc, cartItem) {
                return acc + cartItem.qty;
            }, 0);
        },
        get total() {
            return items.reduce(function (acc, cartItem) {
                return acc + (cartItem.qty * cartItem.price);
            }, 0);
        },
        addItem: function (item) {
            items.push(item);
            return this;
        },
        add: function (name, price, qty) {
            if (qty === void 0) { qty = 1; }
            items.push({
                name: name,
                price: price,
                qty: qty
            });
            return this;
        },
        list: function () {
            return items;
        }
    };
}
var cart = cashier();
cart
    .add('Apple', 0.99)
    .add('Pear', 2.99, 4);
var Stack = /** @class */ (function () {
    function Stack() {
        this.headNode = null;
    }
    Stack.prototype.push = function (itemOrArray) {
        var _this = this;
        if (itemOrArray instanceof Array) {
            itemOrArray.forEach(function (item) {
                _this.push(item);
            });
        }
        else {
            var node = {
                data: itemOrArray,
                nextNode: this.headNode
            };
            this.headNode = node;
        }
        return this;
    };
    Stack.prototype.pop = function () {
        var node = this.headNode;
        if (!node)
            return undefined;
        this.headNode = this.headNode.nextNode;
        return node.data;
    };
    Stack.prototype.length = function () {
        var node = this.headNode;
        var l = 0;
        while (node) {
            l++;
            node = node.nextNode;
        }
        return l;
    };
    Stack.prototype.print = function () {
        var node = this.headNode;
        while (node) {
            console.log('This is the node = ', node.data);
            node = node.nextNode;
        }
    };
    return Stack;
}());
exports.Stack = Stack;
var newLinkList = new Stack();
newLinkList
    .push([10, 20, 30, 40]);
console.log(newLinkList.pop());
console.log(newLinkList.print());
