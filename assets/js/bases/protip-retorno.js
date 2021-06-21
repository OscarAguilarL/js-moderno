// function crearPersona(nombre, apellido) {
//   return { nombre, apellido };
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Oscar', 'Aguilar');

console.log(persona);

function crearArgumentos() {
  console.log(arguments);
}

const crearArgumentos2 = (...args) => {
  // console.log(args);
  return args;
};

const [numero, numero2, saludo, booleano] = crearArgumentos2(
  2,
  3,
  'Hola',
  false
);
console.log(booleano);
