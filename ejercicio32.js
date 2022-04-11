/*Dado un array de números, devolver el array con sus números
elevados al cuadrado*/
function alCuadrado(numeros){
    let numerosCuadrados = numeros.filter(numero => typeof numero === "number").map(numero => Math.pow(numero,2));

    return numerosCuadrados;
}

console.log(alCuadrado([12,56,77,"hola",true,["hola"],80]));