/*VICENTE ANDRE MINERO SALAZAR*/

/*
Como hacerlo:
-Function con parámetro "numero"
-Variable con texto encabezado
-Bucle del 1 al 10
-Concatenar la variable string con multiplicación y su resultado

*/


//Creamos la función tablaMultiplicar y recibimos el parámetro numero
function tablaMultiplicar(numero){
    //Si número no es definido, entonces será 0
    if(!numero){
        numero=0;
    }
    /*Si el numero sí es definido, entonces imprime en consola el encabezado
    Y hace el ciclo imprimiendo la tabla de multiplicar del número definido*/
    let encabezado = "**** Tabla de Multiplicar del numero: " + numero + " ****";
    console.log(encabezado);
    for(let i=1;i<=10;i++){
        let resultado = i*numero;
        let textoResultado = numero + "X" + i + "=" + resultado;
        console.log(textoResultado);
    }
}
tablaMultiplicar(6);

