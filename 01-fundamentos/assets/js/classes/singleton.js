class Singleton {
  static instance; // undefined
  nombre = '';

  constructor(nombre = '') {
    if (!!Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
    this.nombre = nombre;

    return this;
  }
}

const instance1 = new Singleton('Ironman');
const instance2 = new Singleton('Spiderman');
const instance3 = new Singleton('Black Panther');

console.log(`Nombre en la instancia1 es: ${instance1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instance2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instance3.nombre}`);
