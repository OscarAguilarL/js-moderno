const heroes = {
  capi: {
    nombre: 'Capitán América',
    poder: 'Aguantar inyecciones sin morir',
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero',
  },
  spider: {
    nombre: 'SpiderMan',
    poder: 'La mejor reacción alergica a las picaduras de los aracnidos',
  },
};

export const buscarHeroe = (id) => {
  const heroe = heroes[id];
  return new Promise((resolve, reject) => {
    if (heroe) {
      resolve(heroe);
    } else {
      reject('No se encontró ningun heroe con el id: ' + id);
    }
  });
};

const promesaLenta = new Promise((resolve, reject) => {
  setTimeout(() => resolve('promesa lenta'), 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
  setTimeout(() => resolve('promesa media'), 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
  setTimeout(() => resolve('promesa rápida'), 1000);
});

export { promesaLenta, promesaMedia, promesaRapida };
