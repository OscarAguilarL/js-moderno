const natalia = {
  name: 'Natalia',
  age: 20,
  cursosAprobados: [
    'Curso Definitivo de HTML y CSS',
    'Curso Practico de HTML y CSS',
  ],
  aprobarCurso(curso) {
    this.cursosAprobados.push(curso);
  },
};

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (curso) {
  this.cursosAprobados.push(curso);
};

const juanita = new Student('Juanita', 15, [
  'Curso Definitivo de HTML y CSS',
  'Curso Practico de HTML y CSS',
]);

class Estudiante {
  constructor({ name, age, email, cursosAprobados = [] }) {
    this.name = name;
    this.age = age;
    (this.email = email), (this.cursosAprobados = cursosAprobados);
  }

  aprobarCurso(curso) {
    this.cursosAprobados.push(curso);
  }
}

const oscar = new Student({
  name: 'Oscar',
  age: 15,
  email: 'oscar@mail.com',
  cursosAprobados: [
    'Análisis de Negocios para Ciencia de Datos',
    'Visualización de Datos para Bussisnes Inteligence',
  ],
});
