/**
 * C = Clubs (Tréboles)
 * D = Diamonds (Diamantes)
 * H = Hearts (Corazones)
 * S = Spades (Picas)
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

/**
 * Crea una nueva baraja
 * @returns object
 */
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
  console.log(deck);
  return deck;
};

createDeck();

/**
 * Devuelve una carta
 * @returns any
 */
const pedirCarta = () => {
  if (deck.length === 0) {
    throw new Error('No hay más cartas en el Deck');
  }

  let carta = deck.pop();

  console.log(carta);
  console.log(deck);
  return carta;
};

// pedirCarta();
