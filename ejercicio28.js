/*Dado un número, devolver su factorial. El factorial de un número
es la multiplicación de todos los números hasta llegar a él
*/
function factorial(numero){
    let resultado=1;

    for(let i=1;i<=numero;i++){
        resultado*=i;
    }

    return resultado;
}

console.log("El factorial de ese número es:" ,factorial(4));