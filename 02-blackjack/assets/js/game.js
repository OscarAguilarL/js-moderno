/**
 * C = Clubs (Tréboles)
 * D = Diamonds (Diamantes)
 * H = Hearts (Corazones)
 * S = Spades (Picas)
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
  puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const divCartasJugador = document.querySelector('#jugador-cartas');
const puntosHTML = document.querySelectorAll('small');

/**
 * Crea una nueva baraja
 * @returns object
 */
const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
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
  return carta;
};

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};

// Eventos
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta();

  puntosJugador += valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;

  // <img class="carta" src="./assets/img/2C.png" alt="" />;
  const imgCarta = document.createElement('img');
  imgCarta.src = `./assets/img/${carta}.png`;
  imgCarta.classList.add('carta');

  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    console.warn('Lo siento mucho, perdiste');
    btnPedir.disabled = true;
  } else if (puntosJugador === 21) {
    console.warn('21, genial!');
    btnPedir.disabled = true;
  }
});
