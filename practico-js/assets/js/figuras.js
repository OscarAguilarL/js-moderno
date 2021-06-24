// Cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

// Triángulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

// Circulo
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => PI * radio ** 2;

// *****************************************

// Interacciónes con el HTML
// CUADRADO
const calcularPerimetroCuadrado = () => {
  const input = document.getElementById('ladoCuadrado');
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  return alert(`El perimetro del cuadrado es: ${perimetro}`);
};

const calcularAreaCuadrado = () => {
  const input = document.getElementById('ladoCuadrado');
  const value = input.value;
  const area = areaCuadrado(value);
  return alert(`El area del cuadrado es: ${area}`);
};

// TRIANGULO
const calcularPerimetroTriangulo = () => {
  const inputLado1 = document.querySelector('#ladoTriangulo1'),
    inputLado2 = document.querySelector('#ladoTriangulo2'),
    inputBase = document.querySelector('#baseTriangulo');

  const valueLado1 = inputLado1.value * 1,
    valueLado2 = inputLado2.value * 1,
    valueBase = inputBase.value * 1;

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  return alert(`El perimetro del triangulo es: ${perimetro}`);
};
