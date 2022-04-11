/*Dada un array de enteros y un número, detectar si esa lista
de números es una permutación del 1 al número aportado

Una permutación es una secuencia de números en orden sin que falte ninguno entre ellos

Ejemplo:
permutacion([1,2,3,4,5],5)  //Devuelve true
permutacion([1,2,3,5],5)  //Devuelve false   */

function permutacion(secuencia,numero){
    for(let i=0;i<numero;i++){
      if(secuencia.indexOf(i+1) < 0){
        return false;
      }
    }
    return true;
}

console.log(permutacion([1,2,3,4,5],5));