"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
//   console.log(newLinkList.pop())
// console.log(newLinkList.print())
function getFibSequence() {
    var twoAgo, oneAgo, nextValue;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                twoAgo = 0;
                oneAgo = 1;
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                nextValue = twoAgo + oneAgo;
                return [4 /*yield*/, nextValue];
            case 2:
                _a.sent();
                twoAgo = oneAgo;
                oneAgo = nextValue;
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var it = getFibSequence();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
