class Comment {
  constructor({ content, studentName, studentRole = 'student' }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(`${this.studentName} (${this.studentRole}) ${this.likes}`);
    console.log(`${this.content}`);
  }
}

function videoPlay(id) {
  const urlSecreta = 'https://platziultrasecretomasquelanasa.com/' + id;
  console.log('Se está reproduciendo desde la url ' + urlSecreta);
}
function videoStop(id) {
  const urlSecreta = 'https://platziultrasecretomasquelanasa.com/' + id;
  console.log('Pausamos la url ' + urlSecreta);
}

class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }
  pausar() {
    videoStop(this.videoID);
  }
}

class Course {
  constructor({ name, classes = [], isFree = false, lang = 'es' }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

const cursoProgBasica = new Course({
  name: 'Curso gratis de Programación Básica',
  isFree: true,
});

const cursoDefinitivoHTML = new Course({
  name: 'Curso Definitivo de HTML y CSS',
  lang: 'en',
});

const cursoPracticoHTML = new Course({
  name: 'Curso Practico de HTML y CSS',
  lang: 'en',
});

class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: 'Escuela de Desarrollo Web',
  courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

const escuelaData = new LearningPath({
  name: 'Escuela de Data Science',
  courses: [cursoProgBasica, 'Curso de DataBusiness', 'Curso de Dataviz'],
});

const escuelaVG = new LearningPath({
  name: 'Escuela de Videojuegos',
  courses: [cursoProgBasica, 'Curso de Unity', 'Curso de Unreal Engine'],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super();
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.log(`Lo sentimos solo puedes tomar cursos gratis`);
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super();
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== 'en') {
      this.approvedCourses.push(newCourse);
    } else {
      console.log(`Lo sentimos no puedes tomar cursos en ingles`);
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super();
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const juan = new FreeStudent({
  name: 'JuanDC',
  username: 'juandc',
  email: 'juanito@juanito.com',
  twitter: 'fjuandc',
  learningPaths: [escuelaWeb, escuelaVG],
});

const miguelito = new BasicStudent({
  name: 'Miguelito',
  username: 'migelitofeliz',
  email: 'miguelito@juanito.com',
  instagram: 'migelito_feliz',
  learningPaths: [escuelaWeb, escuelaData],
});
