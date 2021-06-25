const esPar = (num) => num % 2 === 0;

const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return sumaLista / lista.length;
};

const medianaSalarios = (lista) => {
  let mediana;
  const mitadLista = parseInt(lista.length / 2);
  if (esPar(lista.length)) {
    const elem1 = lista[mitadLista];
    const elem2 = lista[mitadLista - 1];
    const promedio = calcularMediaAritmetica([elem1, elem2]);
    mediana = promedio;
  } else {
    mediana = lista[mitadLista];
  }
  return mediana;
};

const salarioMex = mexico
  .map((persona) => persona.salary)
  .sort((a, b) => a - b);

const medianaGeneralMex = medianaSalarios(salarioMex);

// Mediana del top 10
const spliceStart = (salarioMex.length * 90) / 100;
const spliceCount = salarioMex.length - spliceStart;

const salariosTop10 = salarioMex.splice(spliceStart, spliceCount);
const medianaTop10 = medianaSalarios(salariosTop10);

console.log({ medianaGeneralMex, medianaTop10 });
