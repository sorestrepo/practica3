function calcularPromedio(examen1, examen2, examen3) {
    const ponderacionExamen1 = 0.25;
    const ponderacionExamen2 = 0.25;
    const ponderacionExamen3 = 0.5;
  
    const promedioPonderado = (examen1 * ponderacionExamen1) + (examen2 * ponderacionExamen2) + (examen3 * ponderacionExamen3);
    return promedioPonderado;
  }
  
  const calificacionExamen1 = parseFloat(prompt("Ingrese la calificación del primer examen:"));
  const calificacionExamen2 = parseFloat(prompt("Ingrese la calificación del segundo examen:"));
  const calificacionExamen3 = parseFloat(prompt("Ingrese la calificación del tercer examen:"));
  const promedio = calcularPromedio(calificacionExamen1, calificacionExamen2, calificacionExamen3);
  
  console.log(`El promedio ponderado del alumno es: ${promedio.toFixed(2)}`);
  