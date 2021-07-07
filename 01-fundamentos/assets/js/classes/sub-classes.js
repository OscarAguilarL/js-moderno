class Persona {
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + ' instancias';
  }

  static mensaje() {
    console.log(this.nombre);
    console.log('Hola soy un método estático');
  }

  comida = '';

  constructor(
    nombre = 'Sin nombre',
    codigo = 'Sin codigo',
    frase = 'Sin frase'
  ) {
    this.codigo = codigo;
    this.frase = frase;
    this.nombre = nombre;
    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

class Heroe extends Persona {
  clan = 'clan';

  constructor(nombre, codigo, frase, clan) {
    super(nombre, codigo, frase);
    this.clan = clan;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    super.quienSoy();
  }
}

const spiderman = new Heroe(
  'Peter Parker',
  'Spider',
  'Soy tu amigable vecino Spiderman',
  'Los Vengadores'
);

// const spiderman = new Heroe();

console.log(spiderman);
spiderman.quienSoy();
