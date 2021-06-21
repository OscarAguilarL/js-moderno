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

// REFERENCIAS DEL HTML
// Botones
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
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

/**
 * Asigna a una carta su respectivo valor
 * @param {any} carta
 * @returns number
 */
const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};

// Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
  do {
    const carta = pedirCarta();

    puntosComputadora += valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;

    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/img/${carta}.png`;
    imgCarta.classList.add('carta');

    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
};

// Eventos
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta();

  puntosJugador += valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;

  const imgCarta = document.createElement('img');
  imgCarta.src = `./assets/img/${carta}.png`;
  imgCarta.classList.add('carta');

  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    console.warn('Lo siento mucho, perdiste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    console.warn('21, genial!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  }
});

btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;

  turnoComputadora(puntosJugador);
});
