let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log(juegos);

console.log('Largo: ', juegos.length);

let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1]

console.log({ primero, ultimo });

juegos.forEach((element, index, arr) => {
  console.log({ element, index, arr });
});

let nuevaLongitud = juegos.push('F-Zero'); // Colocar un nuevo elemento al final del arreglo
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('Fire Embed'); // Colocar un nuevo elemento al inicio del arreglo
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop(); // Eliminar el ultimo elemento del arreglo
console.log({ juegoBorrado, juegos });

let posicion = 1;
let juegosBorrados = juegos.splice(posicion, 2);
console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf('Metroid');
console.log({ metroidIndex });