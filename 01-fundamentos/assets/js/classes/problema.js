const fher = {
  nombre: 'Fernando',
  edad: 30,
};

const oscar = {
  nombre: 'Oscar',
  edad: 21,
};

function Person(name, age) {
  console.log('Se ejecutó esta linea');

  this.name = name;
  this.age = age;

  this.imprimir = function () {
    console.log(`Nombre: ${this.name} - edad: ${this.age}`);
  };
}

const maria = new Person('maria', 18);
const melissa = new Person('melissa', 25);
console.log({ maria });

maria.imprimir();
