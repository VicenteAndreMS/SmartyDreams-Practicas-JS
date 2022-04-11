/*Dado un array de npumeros, devolver el valor más bajo y el 
más alto*/

function altoBajo(numeros){
    let ordenados = numeros.sort((a,b)=> a - b);
    console.log(ordenados);
    return{
        bajo: ordenados[0],
        alto: ordenados[ordenados.length-1]
    };
}

console.log(altoBajo([50,12,4,56,3,65,22,45]));