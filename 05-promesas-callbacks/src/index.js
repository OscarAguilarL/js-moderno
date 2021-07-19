// import { promesaLenta, promesaMedia, promesaRapida } from './js/promises';
// import { buscarHeroe, buscarHeroeAsync } from './js/promises';
import { obtenerHeroesArr, obtenerHeroeAwait } from './js/await';

// promesaLenta.then(console.log)
// promesaMedia.then(console.log)
// promesaRapida.then(console.log)

// Promise.race([promesaLenta, promesaRapida, promesaRapida]).then(console.log);

// buscarHeroe('capi').then(console.log).catch(console.warn);
// buscarHeroe('capi2').then(console.log).catch(console.warn);
// buscarHeroeAsync('iron').then(console.log).catch(console.warn);
// buscarHeroeAsync('iron2').then(console.log).catch(console.warn);

// obtenerHeroesArr().then(console.table);

console.time('await');

obtenerHeroeAwait('capi2')
  .then((heroe) => {
    console.log(heroe);
    console.timeEnd('await');
  })
  .catch(console.warn);
