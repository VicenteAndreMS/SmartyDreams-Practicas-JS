/*Dado un string, devolver cuales son las letras que aparecen
sólo una vez y cual es la primera
*/
function soloUnaVez(texto){
    let contadores = {},
        resultado =  []
        letras = texto.split('').filter(letra => letra.trim().length >= 1);
    for(letra of letras){
        console.log(letras);
        if(!contadores[letra]){
            contadores[letra] = 1;
        }else{
            contadores[letra]++;
        }
    }
    for(letra in contadores){
        if(contadores[letra] === 1){
            resultado.push(letra);
        }
    }return [resultado,resultado[0]];
}

console.log(soloUnaVez("frase frase hoy"));