/*Dado un texto y una busqueda, censurar todas las coincidencias de la
busqueda en el texto con [-CENSURADO-]

Si el texto y la busqueda están vacios mostrar
"No puedes leer el texto y la busqueda" en el caso de que ambos
parámetros no lleguen*/
function censurar(texto,busqueda){
    let resultado="";
    if(!texto && !busqueda){
        resultado = "No puedes leer el texto y la busqueda";
    }else
        if(!texto && busqueda){
            resultado = "No puedes leer el texto";
        
    }else
        if(texto && !busqueda){
            resultado="No puedes leer el texto y la busqueda";
    }else
        if(texto && busqueda){
            resultado = texto.replace(new RegExp(busqueda,'gi'),"[-CENSURADO-]");
            console.log(texto);
            console.log(busqueda);
        }

    return resultado;
}


console.log(censurar('Limpio liMpio Que tal','limpio'));