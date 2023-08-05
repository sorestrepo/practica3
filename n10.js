function calcularAreaCuadrado(lado) {
    return lado ** 2;
  }
  
  const longitudLado = parseFloat(prompt("Ingrese la longitud de un lado del cuadrado:"));
  const areaCuadrado = calcularAreaCuadrado(longitudLado);
  
  console.log(`El área del cuadrado es: ${areaCuadrado}`);
  