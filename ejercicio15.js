/*Dao una cadena de texto, devolver el caracter más usado*/
function masUsado(texto){
    let mapeoLetras = {};
    let maximoRep = 0;
    let letraMasRepetida = "";
    for(let letra of texto){
        if(!mapeoLetras[letra]){
            mapeoLetras[letra] = 1;
        }else{
            mapeoLetras[letra]++;
        }
    }
    for(let letra in mapeoLetras){
        if(mapeoLetras[letra]>maximoRep){
            maximoRep = mapeoLetras[letra];
            letraMasRepetida = letra;
        }
    }
    return(letraMasRepetida);
}

console.log("La letra más repetida es: ",masUsado('Buenas noches hasta manana'));