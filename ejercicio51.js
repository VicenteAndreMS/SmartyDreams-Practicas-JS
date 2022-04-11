/*Dado un array de números, devolver un array nuevo
con los números pares e impares separados*/

function pares(numeros){
    return {
        pares: 'Números pares: ' + numeros.filter(num => num % 2 === 0),
        impares: 'Números impares: ' + numeros.filter(num => num % 2 !== 0)
    }
}

console.log(pares([1,3,2,4,1,8]));