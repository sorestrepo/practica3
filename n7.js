function calcularPrecioConDescuento(precio, descuentoPorcentaje) {
    const descuento = (precio * descuentoPorcentaje) / 100;
    const precioConDescuento = precio - descuento;
    return precioConDescuento;
  }
  
  function calcularPrecioFinal(precioConDescuento, ivaPorcentaje) {
    const iva = (precioConDescuento * ivaPorcentaje) / 100;
    const precioFinal = precioConDescuento + iva;
    return precioFinal;
  }
  
  const precioOriginal = parseFloat(prompt("Ingrese el precio del artículo:"));
  const precioConDescuento = calcularPrecioConDescuento(precioOriginal, 20);
  const precioFinal = calcularPrecioFinal(precioConDescuento, 15);
  
  console.log(`Precio con descuento (20%): $${precioConDescuento.toFixed(2)}`);
  console.log(`Precio final (incluyendo IVA 15%): $${precioFinal.toFixed(2)}`);
  