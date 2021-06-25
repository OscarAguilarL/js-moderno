const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return sumaLista / lista.length;
};

console.log(calcularMediaAritmetica([100, 200, 300, 500]));
