/*VICENTE ANDRE MINERO SALAZAR*/
/*Dada una cadena de texto, darle la vuelta en invertir el orden
de sus caracteres sin usar métodos propios del lenguaje, 
sólo estructuras de control*/

//MI INTENTO
/*function cadenaInvertida(texto){
    let textoAcomodado = texto.split('');
    console.log(textoAcomodado);
    let tectoReves="";
    for(let i=textoAcomodado.length-1;i>=0;i--){
        var textoReves = textoAcomodado[i];
        console.log(textoReves);
    }
    
}

console.log(cadenaInvertida('Que tal'));
*/

function invertir(texto){
    let invertido = "";

    for(let letra of texto){
        invertido = letra + invertido;
    }
    return invertido;
}

console.log("Texto invertido: ",invertir("hola que tal"));