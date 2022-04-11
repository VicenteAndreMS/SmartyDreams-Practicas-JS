/*Dado un número, mostrar su serie de fibonacci.
La serie de fibonacci es un orden de números donde
cada número es la suma de los dos anteriores*/

/*Ejemplos: fib(10)[0]
            fib(10)[0]*/

function fibonacci(numero){
    let serie=[0,1];

    for(let i=2;i<=numero;i++){
        serie.push(serie[i-1] + serie[i-2]);
    }
    return [serie,serie[numero]];
}

console.log(fibonacci(5)[0]);