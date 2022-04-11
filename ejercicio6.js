/*VICENTE ANDRE MINERO SALAZAR*/
/*Dibujar un cuadrado hueco con asteriscos*/
//Se crea la función Cuadrado en donde se hará el ciclo para los asteriscos superiores e inferiores
function ladosCuadrado(numero){
    let lado = "";
    //En este for se hace el ciclo de los asteriscos
    for(let i=0;i<numero;i++){
        lado += "*";
    }
    return lado;
}
//Se crea a función en donde se hará el llamado de los lados superiores e inferiores, además aquí se
//crearán los lados junto con los huecos
function cuadrado(numero){
    //llamamos a la funcion ladosCuadrado para la parte superior del dibujo
    let dibujo = ladosCuadrado(numero) + "\n";
    
    let lateral="";
    //En este for colocamos los laterales, primero dibujamos el primer asterisco, seguido de espacios,
    //después cerramos con el último asterisco
    for(let i=0;i<numero/2;i++){
        lateral = "*";
        for(let a=0;a<numero-2;a++){
            lateral += " ";
        }
        lateral += "*";
    //Guardamos lo hecho con la variable lateral en dibujo
        dibujo += lateral + "\n";
    }
    //Concatenamos el dibujo junto con la función para el lado inferior
    dibujo += ladosCuadrado(numero);
    return dibujo;
}

console.log(cuadrado(12));