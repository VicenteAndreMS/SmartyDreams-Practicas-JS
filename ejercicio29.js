/*Dado un número, indicar si es un número capicua o no. Los números
capicúa se leen igual de izquierda a derecha y viceversa*/
function capi(numero){
    let procesado = parseInt(numero.toString().split('').reverse().join(''));

    return numero === procesado;
}

console.log(capi(2002));