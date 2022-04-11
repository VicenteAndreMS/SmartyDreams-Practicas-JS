/*Dado un array de strings devolver otro con valores que
estén formados por más de dos palabras*/

function dosPalabras(elementos){
    let nuevos_elementos=[];
    for (palabra of elementos){
        console.log(palabra);
        if(palabra.split(' ').length >= 2){
            nuevos_elementos.push(palabra);
        }
    }
    return nuevos_elementos;
}


console.log(dosPalabras(["hola","estoy en Mexico","mi nombre es Vicente"]));