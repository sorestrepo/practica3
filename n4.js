function calcularCobroEstacionamiento(horas) {
    const tarifaPorHora = 10000; 
    const horasCompletas = Math.ceil(horas);
  
   
    const costoTotal = horasCompletas * tarifaPorHora;
  
    return costoTotal;
  }
  
  const horasUtilizadas = parseFloat(prompt("Ingrese la cantidad de horas utilizadas:"));
  const cobroTotal = calcularCobroEstacionamiento(horasUtilizadas);
  console.log(`El cobro total por ${horasUtilizadas} horas de estacionamiento es: ${cobroTotal} pesos.`);
  