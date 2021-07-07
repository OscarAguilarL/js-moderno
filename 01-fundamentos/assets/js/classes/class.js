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

const spiderman = new Persona(
  'Peter Parker',
  'Spider',
  'Soy tu amigable vecino Spiderman'
);

const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy IronMan');

// console.log(ironman);

spiderman.miFrase();

spiderman.setComidaFavorita = 'El pay de cereza de la tía may';

// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';

console.log(Persona.propiedadExterna);
