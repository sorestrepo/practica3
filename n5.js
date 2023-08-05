
const areaMetrosCuadrados = prompt("Ingrese el área a pintar en metros cuadrados:");
const precioPorMetroCuadrado = 25;
const costoTotal = areaMetrosCuadrados * precioPorMetroCuadrado;
console.log(`Presupuesto: $${costoTotal.toFixed(2)}`);