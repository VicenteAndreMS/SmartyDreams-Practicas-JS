/*Dada una cadena de texto, poner en mayúscula la primer letra de cada palabra
en la cadena y luego devolver la cadena*/

function enMayusculas(texto){
    let resultado="";

    for(letra in texto){
        console.log(letra);
        
        if(texto[letra-1]===" " || letra==0){
            resultado+=texto[letra].toUpperCase();
        }else{
            resultado+=texto[letra];
        }
        
    }
    return resultado ;
}

console.log(enMayusculas('hola que tal'));