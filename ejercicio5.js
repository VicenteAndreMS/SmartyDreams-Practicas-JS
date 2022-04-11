/*VICENTE ANDRE MINERO SALAZAR*/
/* ¿Cuánto es el X por ciento de X numero? */
function porcentajeFuncion(porcentaje,numero){
    console.log(porcentaje);
    let resultado = ((porcentaje*.01)*numero);
    let resultadoTexto = "El " + porcentaje + "%" + " de " + numero + " es: " + resultado;
    return resultadoTexto;
}

console.log(porcentajeFuncion(30,320));