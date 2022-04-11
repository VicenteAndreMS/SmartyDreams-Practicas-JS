/* Dado un string y un núero, repetir el string tantas veces como
el numero indique */

function ciclo(cadena,numero){
    let texto = "";
    let i=0;
    while(i<numero){
        texto+=cadena;
        i++;
    }return texto;
}

console.log(ciclo('Vicente',2));