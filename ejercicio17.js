/*Dado un número, mostrar los números de 1 hasta el número
Pero para múltiplos de tres imprimir "buzz" en lugar del número
y para los múltiplos de cinco imprimir "lightyear".
Para múltiplos de tres y cinco imprimir "Buzzlightyear".

Ejemplos: buzz(5);

//Devuelve
1
2
buzz
4
lightyear
*/

function buzz(numero){
    let resultado = "";
    if(numero % 3===0 && numero % 5 ===0){
        resultado ="BuzzLightyear";
    }else if(numero % 3 === 0){
        resultado = "buzz";
    }else if(numero % 5 === 0){
        resultado = "lightyear";
    }else{
        return numero;
    }
    return resultado;
}

function imprimir(numero){
    for(let i=1;i<=numero;i++){
        console.log(buzz(i));
    }
}
imprimir(15);