/*Dado un objeto, comprobar si existe una propiedad en concreto*/
function existePropiedad(objeto,propiedad){
    return typeof objeto === 'object' && typeof propiedad === "string" && hasOwnProperty.call(objeto,propiedad);

}

const usuario = {nombre:"Vicente",edad:24};
console.log(existePropiedad(usuario,'nombre'));