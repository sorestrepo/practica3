function calcularFormasDePago(valorTotalCompra) {
    let formasDePago = [];
  
    // Calculamos las formas de pago con sus recargos
    const cuota1 = valorTotalCompra;
    const cuota2 = valorTotalCompra * 1.05;
    const cuota6 = valorTotalCompra * 1.40;
  
    // Agregamos cada forma de pago al arreglo con su detalle
    formasDePago.push({
      cuotas: 1,
      valorPorCuota: cuota1,
      recargo: 0,
      total: cuota1,
    });
  
    formasDePago.push({
      cuotas: 2,
      valorPorCuota: cuota2 / 2,
      recargo: cuota2 - valorTotalCompra,
      total: cuota2,
    });
  
    formasDePago.push({
      cuotas: 6,
      valorPorCuota: cuota6 / 6,
      recargo: cuota6 - valorTotalCompra,
      total: cuota6,
    });
  
    return formasDePago;
  }
  
  // Datos de entrada
  const valorTotalCompra = 1000.0;
  
  // Calcular formas de pago
  const formasDePago = calcularFormasDePago(valorTotalCompra);
  
  // Mostrar resultados
  console.log("Formas de pago posibles:");
  console.log(formasDePago);
  