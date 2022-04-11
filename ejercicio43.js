/*Dado un array de números, sacar la media de todos ellos*/
function mediaFuncion(numeros){
    console.log(numeros);
    let suma=0;
    let resultado=0;
    /*let suma = numeros.reduce((valorAcumulado,numeroActual) => {
        return valorAcumulado + numeroActual;
    });

    let media = suma / (numeros.length-1)
    return media;*/

    for(let i=0;i<=numeros.length-1;i++){
        suma+=numeros[i];
    }
    resultado = suma/numeros[numeros.length-1];
    return resultado;
}

console.log(mediaFuncion([1,2,3,4,5]));