/**
 * C = Clubs (Tréboles)
 * D = Diamonds (Diamantes)
 * H = Hearts (Corazones)
 * S = Spades (Picas)
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

const createDeck = () => {
  for (let i = 0; i <= 10; i++) {
    for (let type of types) {
      deck.push(`${i}${type}`);
    }
  }

  for (let type of types) {
    for (special of specials) {
      deck.push(`${special}${type}`);
    }
  }

  deck = _.shuffle(deck);

  return deck;
};

createDeck();
