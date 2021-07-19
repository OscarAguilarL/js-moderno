import { promesaLenta, promesaMedia, promesaRapida } from './js/promises';

// promesaLenta.then(console.log)
// promesaMedia.then(console.log)
// promesaRapida.then(console.log)

Promise.race([promesaLenta, promesaRapida, promesaRapida]).then(console.log);
