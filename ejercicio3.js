/*VICENTE ANDRE MINERO SALAZAR*/
/*Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella
La frase y la palabra deben ser parámetros de una función*/

function incidencias(frase,palabraBuscar){
    console.log(frase,palabraBuscar);
    let fraseLimpiar = frase.toLowerCase().replace(/[_,.!¡¿?-]/gi,'');
    let numero=0;
    let contador = fraseLimpiar.includes(palabraBuscar);
    console.log(contador);
    console.log(fraseLimpiar);
    if(contador){
        let palabras = fraseLimpiar.split(" ");
        let mapa = {};

        for(let palabra of palabras){

            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }
        }
        numero = mapa[palabraBuscar];
        console.log(palabras);
        console.log(mapa);
    }else{
        numero=0;
    }
    return numero;
    
}

console.log("Numero de incidencias:",incidencias('hola, que tal hola','hola'));