let a = 5;

if (a >= 10) {
  console.log('A es mayor o igual a 10');
} else {
  console.log('A es menor a 10');
}

// console.log('Fin de programa');
const hoy = new Date();
let dia = hoy.getDay();

console.log({ dia });

if (dia === 0) {
  console.log('domingo');
} else {
  console.log('Hoy no es domingo');
}

// Sin usar if else o switch, unicamente objetos

const diaLetras = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sabado',
};

dia = 9;

console.log(diaLetras[dia] || 'Dia no encontrado');
