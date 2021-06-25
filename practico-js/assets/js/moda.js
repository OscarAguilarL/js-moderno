const calcularModa = (lista) => {
  const listaCount = {};
  lista.map((elem) => {
    listaCount[elem] ? (listaCount[elem] += 1) : (listaCount[elem] = 1);
  });

  const listaArray = Object.entries(listaCount).sort(
    (valorAcumulado, nuevoValor) => valorAcumulado[1] - nuevoValor[1]
  );
  return listaArray[listaArray.length - 1];
};
const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

// esta funcion es lo equivalente a la funcion de arriba
// const lista1Array = Object.entries(lista1Count).sort((a, b) => {
//   if (a > b) return 1;
//   if (a === b) return 0;
//   if (a < b) return -1;
// });

console.log(calcularModa(lista1));
