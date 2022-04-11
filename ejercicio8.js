/*VICENTE ANDRE MINERO SALAZAR*/
/*Dado un número entero, inviértelo y devuelve de nuevo el entero*/
function invertir(numero){
    let invertido = 0;
    let resto = numero;
    do{
        invertido=invertido*10 + (resto%10);
        resto = Math.floor(resto/10);
    }while(resto>0)
    return invertido;
}

console.log(invertir(24));
