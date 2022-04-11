/*Dados dos números, devolver resultados de las operaciones
básicas entre ellos (suma, resta, producto, división)*/

function calcular(numero1,numero2){
    let resultados= 
    "La suma es: " + (numero1 + numero2) + "\n" +
    "La resta es: " + (numero1 - numero2) + "\n" + 
    "La multiplicación es: " + (numero1 * numero2) + "\n" +
    "La división es: " + (numero1 / numero2) + "\n";

    return resultados;
}


console.log(calcular(55,6));
