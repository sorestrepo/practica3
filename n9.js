// Función para calcular el monto del cheque
function calcularMontoCheque(numDias) {
    const costoHotelPorDia = 1000; 
    const costoComidaPorDia = 500; 
    const otrosGastosPorDia = 200;
  
    const totalHotel = costoHotelPorDia * numDias;
    const totalComida = costoComidaPorDia * numDias;
    const totalOtrosGastos = otrosGastosPorDia * numDias;
  
    const montoCheque = totalHotel + totalComida + totalOtrosGastos;
  
    return {
      hotel: totalHotel,
      comida: totalComida,
      otrosGastos: totalOtrosGastos,
      total: montoCheque,
    };
  }
  
  // Pedir al usuario el número de días de viaje
  const numDiasViaje = parseInt(prompt("Ingrese el número de días de viaje:"));
  
  // Calcular el monto del cheque usando la función
  const montoCheque = calcularMontoCheque(numDiasViaje);
  
  // Mostrar el desglose del monto del cheque en la consola
  console.log(`Desglose del monto del cheque:`);
  console.log(`Hotel: $${montoCheque.hotel}`);
  console.log(`Comida: $${montoCheque.comida}`);
  console.log(`Otros Gastos: $${montoCheque.otrosGastos}`);
  console.log(`Total: $${montoCheque.total}`);
  