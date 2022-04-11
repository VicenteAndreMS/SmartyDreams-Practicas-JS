/*Dado un número, mostrar todos los números desde ese al 0 de 8 en 8 en
una lista con guiones donde cada número debe empezar por n°*/
function conteo(numero){
    let resultado =`--- Del ${numero} al 0 ---\n`;

    while(numero>0){
        resultado += `- n°${numero}\n`;
        numero -= 8;
    }

    resultado += "--- FIN ---";
    return resultado;
}

console.log(conteo(50));