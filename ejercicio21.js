/*Dada una cadena de texto y un número, recortar el string mostrando
los X primeros caracteres
*/

function recortar(texto, hasta){
    let resultado = "";

    if(typeof texto==='string' && typeof hasta=== 'number'){
        console.log(typeof texto, typeof hasta);
        resultado = texto.substr(0,11);
    }else{
        resultado = "Introduce bien los datos";
    }
    return resultado;
}

console.log(recortar("Capacitacion Becario",3));