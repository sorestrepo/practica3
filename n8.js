function calcularAhorroSemanal(sueldo, porcentajeAhorro) {
    return sueldo * porcentajeAhorro / 100;
  }
  
  // Datos del usuario
  const sueldoMensual = parseFloat(prompt("Ingrese su sueldo mensual:"));
  const semanasPorMes = 4;
  
  // Cálculo del ahorro mensual
  const ahorroMensual = calcularAhorroSemanal(sueldoMensual, 15) * semanasPorMes;
  
  // Cálculo del ahorro anual
  const ahorroAnual = ahorroMensual * 12;
  
  console.log(`El ahorro mensual es: $${ahorroMensual.toFixed(2)}`);
  console.log(`El ahorro anual es: $${ahorroAnual.toFixed(2)}`);
  