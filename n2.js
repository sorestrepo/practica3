function convertirPesosADolares(pesos, tasaCambio) {
   
    var dolares = pesos * tasaCambio;
    return dolares;
  }
  var cantidadPesos = 100000; 
  var tasaCambioActual = 0.00027; 
  
  var cantidadDolares = convertirPesosADolares(cantidadPesos, tasaCambioActual);
  
  console.log(cantidadPesos + " pesos colombianos equivalen a " + cantidadDolares + " dólares");
  