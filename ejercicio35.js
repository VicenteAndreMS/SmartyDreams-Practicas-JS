/*Dada un array, crear otro con el primer y último elemento del original*/

function nuevoArray(cadena){
    let cadenaNueva = [];
    cadenaNueva.push(cadena[0],cadena[cadena.length-1]);

    return cadenaNueva
}

console.log(nuevoArray([100,200,300,700]));
