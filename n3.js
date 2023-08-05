function calcularEdad (anioDeNacimiento) {
    const anioActual = new Date (). getFullYear()
    const edad = anioActual - anioDeNacimiento
    return  edad
}
    const anioDeNacimiento = prompt ("ingrese el año de nacimiento")
    const anioDeNacimientoNumero = parseInt (anioDeNacimiento)
    if(isNaN (anioDeNacimientoNumero)) {
        console.log("Año de nacimiento invalido, por favor ingrese uno valido"); 
    } else {
        const edad = calcularEdad (anioDeNacimientoNumero)
        if (edad < 0 ) {
            console.log("Año de nacimiento invalido, debe ser menor o igual al año actual"); 
        } else {
            console.log ("Tu edad es: " + edad)
        }    
    }
