/*Dadas dos cadenas de texto, crear un algoritmo que compruebe
si son anagramas entre sí

Una cadena es un anagrama de otro si usa los mismos caracteres 
en la misma cantidad

No cuenta tener espacios, símbolos raros, puntos, etc*/

function limpiarTexto(texto){
    return texto
    .replace(/[^\w]/gi,'')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

function anagramas(texto1,texto2){
    return limpiarTexto(texto1) === limpiarTexto(texto2);
}

console.log(anagramas("Hola soy - Vicente !!","Vicente HolaSoy ...,,, '"));