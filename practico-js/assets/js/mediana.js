const esPar = (numero) => (numero % 2 === 0 ? true : false);

const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return sumaLista / lista.length;
};

const calcularMediana = (lista) => {
  let mediana;

  lista.sort((a, b) => a - b);
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
