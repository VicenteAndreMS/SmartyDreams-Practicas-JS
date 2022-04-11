/*Dado un array, dividirlo en tantos ubarrays basándonos
en un número que indique su tamaño*/
function subarrays(cadena_principal,numero){
    let cadenas = [];

    for(let elemento of cadena_principal){
        console.log(elemento);
        let ultimo = cadenas[cadenas.length-1];
        if(!ultimo || ultimo.length === numero){
            cadenas.push([elemento]);
        }else{
            ultimo.push(elemento);
        }

        console.log(cadenas);
    }
    return cadenas;
}

console.log(subarrays([7,8,9,10,5],2));