import { buscarHeroeAsync, buscarHeroe } from './promises';

const heroesIds = ['capi', 'iron', 'spider'];

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
