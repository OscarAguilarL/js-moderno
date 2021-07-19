import { buscarHeroeAsync, buscarHeroe } from './promises';

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map(buscarHeroe);

// export const obtenerHeroesArr = async () => {
//   const heroesArr = [];

//   for (const id of heroesIds) {
//     heroesArr.push(buscarHeroe(id));
//   }

//   return await Promise.all(heroesArr);
// };

export const obtenerHeroesArr = async () => {
  return await Promise.all(heroesIds.map(buscarHeroe));
};

export const obtenerHeroeAwait = async (id) => {
  try {
    const heroe = await buscarHeroeAsync(id);
    return heroe;
  } catch (err) {
    console.log('CATCH');
    return {
      nombre: 'Sin nombre',
      poder: 'Sin poder',
    };
  }
};

export const heroesCiclo = async () => {
  console.time('HeroesCiclo');

  for await (const heroe of heroesPromesas) {
    console.log(heroe);
  }

  console.timeEnd('HeroesCiclo');
  // const heroes = await Promise.all(heroesPromesas);
  // heroes.forEach(console.log);
};

export const heroeIfAwait = async (id) => {
  if ((await buscarHeroeAsync(id)).nombre === 'Ironman') {
    console.log('Es el mejor de todos');
  } else {
    console.log('Naaaa');
  }
};
