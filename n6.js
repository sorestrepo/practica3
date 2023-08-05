
function calcularHipotenusa(cateto1, cateto2) {
    const hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
    return hipotenusa;
  }
  
  const catetoA = parseFloat(prompt("Ingrese la longitud del primer cateto:"));
  const catetoB = parseFloat(prompt("Ingrese la longitud del segundo cateto:"));
  const hipotenusaResultado = calcularHipotenusa(catetoA, catetoB);
  
  console.log(`La hipotenusa del triángulo rectángulo es: ${hipotenusaResultado.toFixed(2)}`);
  