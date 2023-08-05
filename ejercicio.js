function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  
  const baseTriangulo = 10;
  const alturaTriangulo = 5;
  const areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
  
  console.log("El área del triángulo es: " + areaTriangulo);