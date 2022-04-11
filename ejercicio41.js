/*Dado un número, mostrar un triángulo de esteriscos
con ese número de filas*/

function triangulo(numero){
    let resultado = "";
    for(let fila=0;fila<numero;fila++){
            let nivel="";
            let mitad = Math.floor(numero - 1);
            for(let columna = 0; columna < (2 * numero - 1); columna++){

                if(mitad - fila <= columna && mitad + fila >=columna){
                    nivel+="*";
                }else{
                    nivel+=" "
                }
            }resultado +=nivel + "\n";
        }
        return resultado;
}
console.log(triangulo(6));