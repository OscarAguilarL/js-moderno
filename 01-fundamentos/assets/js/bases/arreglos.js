/**
 * Arreglos
 * Son un objeto muy parecido a una lista de información,
 * que contienen un grupo de elementos
 *
 * Toda la información dentro de un arreglo es del mismo dato
 * Aunque en javascript no siempre es así
 */

// const arr = new Array(10);
// const arr = [];
// console.log(arr);

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];

console.log({ videoJuegos });

console.log(videoJuegos[0]);

let arregloCosas = [
  true,
  123,
  'Oscar',
  1 + 2,
  function () { },
  () => { },
  { a: 1 },
  ['X', 'Megaman', 'Zero', 'Dr. Light', [
    'Dr. Willy',
    'Woodman'
  ]],
];

// console.log({ arregloCosas });
// console.log(arregloCosas[0]);
// console.log(arregloCosas[2]);
console.log(arregloCosas[7][4][1]);
