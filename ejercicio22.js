/*Dados dos números indicar cuál es el mayor y cuál es el menor*/
function comparar(numero1,numero2){
    let resultado="";
    if(numero1 > numero2){
        resultado = "El número 1: " + numero1 + " es mayor que " + "el número 2: " +numero2;
    }
    if(numero1 < numero2){
        resultado = "El número 2: " + numero2 + " es mayor que " + "el número 1: " +numero1;
    }
    if(numero1 === numero2){
        resultado = "El número 1: " + numero2 + " es igual que " + "el número 2: " +numero2;
    }
    return resultado;
}

console.log(comparar(30,30));