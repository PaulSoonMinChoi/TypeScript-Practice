export enum Suits {
  Spades, Clubs, Diamonds, Hearts
}

export enum CardNumbers {
  Ace, Two, Three, Four, Five,
  Six, Seven, Eight, Nine, Ten,
  Jack, Queen, King
}

type Card = [Suits, CardNumbers];


let testCard: Card = [Suits.Spades, CardNumbers.Queen];

// console.log(testCard)

function createDeck(): Card[] {
  let cards: Card[] = [];
  for (let s = 0; s < Object.keys(Suits).length; s+=2) {
    for (let c = 0; c < Object.keys(CardNumbers).length; c+=2) {
      cards.push([ s/2, c/2 ])
    }
  }
  return cards;
}

class Dealer {
  cards: Card[] = [];

  constructor() {
    this.cards = createDeck();
  }

  getLegnth(): number {
    return this.cards.length;
  }


}

// console.log(createDeck())


function orderSandwich(bread: string, name: string, ...toppings: string[]) {
  console.log(toppings)
  console.log(`${bread} ${name} ${toppings}`)
}

// orderSandwich('italian', 'paul', 'salami', 'ham')


interface CartItem {
  name: string
  price: number
  qty: number
}

interface CartApi {
  length: number;
  total: number;
  addItem(item: CartItem): CartApi;
  add(name: string, price: number, qty?: number): CartApi;
  list(): CartItem[];
}

function cashier(): CartApi  {
  let items: CartItem[] = [];
  return {
    get length() {
      return items.reduce((acc, cartItem) => {
        return acc + cartItem.qty;
      }, 0)
    },
    get total() {
      return items.reduce((acc, cartItem) => {
        return acc + (cartItem.qty * cartItem.price);
      }, 0)
    },
    addItem(item): CartApi {
      items.push(item);
      return this;
    },
    add(name, price, qty = 1): CartApi {
      items.push({
        name,
        price,
        qty
      });
      return this;
    },
    list(): CartItem[] {
      return items;
    }
  };
}

let cart = cashier();

cart
  .add('Apple', 0.99)
  .add('Pear', 2.99, 4)

  // console.log(cart.list())

interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T): IStack<T>;
  pop(): T | undefined;
  length(): number;
  print(): void;
}

interface IStackNode<T> {
  data: T;
  nextNode: IStackNode<T>;
}

export class Stack<T> implements IStack<T> {
  private headNode: IStackNode<T> = null;

  //function overloading
  push(item: T): Stack<T>;
  push(items: T[]): Stack<T>;
  push(itemOrArray: T | T[]): Stack<T> {
    if (itemOrArray instanceof Array) {
      itemOrArray.forEach((item) => {
        this.push(item);
      })
    } else {
      let node = {
        data: itemOrArray as T,
        nextNode: this.headNode
      }
      this.headNode = node;
    }

    return this;
  }

  pop(): T | undefined {
    let node = this.headNode;
    if (!node) return undefined;
    this.headNode = this.headNode.nextNode;
    return node.data;
  }

  length(): number {
    let node = this.headNode;
    let l = 0;
    while(node) {
      l++;
      node = node.nextNode;
    }
    return l;
  }

  print(): void {
    let node = this.headNode;
    while(node) {
      console.log('This is the node = ', node.data)
      node = node.nextNode;
    }
  }
}

let newLinkList = new Stack<number>();
newLinkList
  .push([10, 20, 30, 40])

  console.log(newLinkList.pop())

console.log(newLinkList.print())



