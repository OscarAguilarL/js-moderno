import { buscarHeroe as buscarHeroeCallback } from './callbacks';
import { buscarHeroe } from './promises';

import './styles.css';

const heroeId = 'spider';
const heroeId2 = 'iron1';
const heroeId3 = 'capi';

// buscarHeroe(heroeId, (err, heroe) => {
//   if (err) {
//     return console.error(err);
//   }
//   buscarHeroe(heroeId2, (err, heroe2) => {
//     if (err) {
//       return console.error(err);
//     }
//     buscarHeroe(
//       heroeId3,
//       (err,
//       (heroe3) => {
//         if (err) {
//           return console.error(err);
//         }
//         console.log(
//           `Enviando a ${heroe.nombre}, ${heroe3.nombre} y ${heroe2.nombre}`
//         );
//       })
//     );
//   });
// });

// buscarHeroe(heroeId).then((heroe) => {
//   buscarHeroe(heroeId2).then((heroe2) => {
//     console.log(`Enviando a ${heroe.nombre} y a ${heroe2.nombre} a la misión`);
//   });
// });

Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)])
  .then(([heroe, heroe2]) => {
    console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la misión`);
  })
  .catch((err) => {
    alert(err);
  })
  .finally(() => {
    console.log('se termino promise.all');
  });
