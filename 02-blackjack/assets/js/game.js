// Función anonima autoinvocada
const miModulo = (() => {
  'use strict';

  let deck = [];
  const types = ['C', 'D', 'H', 'S'],
    specials = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];

  // REFERENCIAS DEL HTML
  // Botones
  const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
    puntosHTML = document.querySelectorAll('small');

  //Inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
    deck = createDeck();
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }
    deck = [];
    deck = createDeck();

    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ''));

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  /**
   * Crea una nueva baraja
   * @returns object
   */
  const createDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let type of types) {
        deck.push(`${i}${type}`);
      }
    }

    for (let type of types) {
      for (let special of specials) {
        deck.push(`${special}${type}`);
      }
    }

    return _.shuffle(deck);
  };

  /**
   * Devuelve una carta
   * @returns any
   */
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw new Error('No hay más cartas en el Deck');
    }
    return deck.pop();
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

  // TUrno: 0 = jugador1, ultimo será la computadora
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/img/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
  };

  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert('Nadie ganó :(');
      } else if (puntosMinimos > 21) {
        alert('La computadora gana');
      } else if (puntosComputadora > 21) {
        alert('Jugador gana');
      } else {
        alert('La computadora gana');
      }
    }, 100);
  };

  // Turno de la computadora
  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta();

      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
  };

  // Eventos
  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

    if (puntosJugador > 21) {
      // console.warn('Lo siento mucho, perdiste');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      // console.warn('21, genial!');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugadores[0]);
  });

  btnNuevo.addEventListener('click', () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();
