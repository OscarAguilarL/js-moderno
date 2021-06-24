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

// Interacción con el HTML
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
