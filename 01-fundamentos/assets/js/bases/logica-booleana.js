const regresaTrue = () => {
  console.log('Regresa True');
  return true;
};

const regresaFalse = () => {
  console.log('Regresa False');
  return false;
};

// console.warn('not o la negación');
// console.log(true);
// console.log(!true); // false

// console.log(!regresaFalse());

// console.warn('And');
// console.log(true && true);
// console.log(true && false);

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// const a1 = true && 'Hola mundo' && 150;
const a1 = true && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy false';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy false';
const a5 = soyFalso || regresaTrue() || soyNull || 'Ya no soy false';

console.log({ a5 });
