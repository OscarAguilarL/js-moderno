const calcularPrecioConDescuento = (precio, descuento) => {
  const porcentajePrecioConDescuento = 100 - descuento;
  return (precio * porcentajePrecioConDescuento) / 100;
};

const onClickButtonPriceDiscount = () => {
  const inputPrice = document.getElementById('precio');
  const inputDiscount = document.getElementById('descuento');

  const price = inputPrice.value;
  const discount = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(price, discount);

  const p = document.querySelector('#resultPrice');

  return (p.innerText = `El precio con descuento es: $${precioConDescuento}`);
};
