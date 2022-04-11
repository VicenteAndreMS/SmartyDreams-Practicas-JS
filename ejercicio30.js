/*Dado un array de números, devolver el array sin elementos duplicados
Si hay un string, eliminarlo del array*/
function eliminarDuplicados(elementos){
    elementos=elementos.filter(elemento=>{
        return typeof elemento === "number";
    });
    let sin_duplicados = new Set(elementos);

    return Array.from(sin_duplicados);
}

console.log(eliminarDuplicados(["uno","dos",1,2,2,3,3,1,4,"hola",5]));