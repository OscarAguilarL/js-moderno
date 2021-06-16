function saludar(nombre) {
  console.log(arguments);
  console.log('Hola', nombre);
  return 1;
}

const saludar2 = function (nombre) {
  console.log('Hola', nombre);
};

const saludarFlecha = () => {
  console.log('Hola flecha');
};

const saludarFlecha2 = (nombre) => {
  console.log('Hola', nombre);
};

const retornoDeSaludar = saludar('Oscar');
console.log({ retornoDeSaludar });
saludar2('Oscar');
saludarFlecha();
saludarFlecha2('Melisa');

const getAleatorio = () => Math.random();
console.log(getAleatorio());
