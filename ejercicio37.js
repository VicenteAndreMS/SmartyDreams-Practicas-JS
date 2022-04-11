/*Dado un array o un texto, devolver el elemento o palabras 
que más aparecen*/
function elQueMasAparece(datos){
    let mapeo={},
    mas_frecuente = "",
    valor_mas_frecuente = 0;
    

    if(typeof datos === "string"){
        datos = datos.split(" ");
    }
    for(let elemento of datos){
        if(mapeo[elemento]){
            mapeo[elemento]++;
        }else{
            mapeo[elemento] = 1;
        }
    }
    for(let elemento in mapeo){
        console.log(elemento);
        if(mapeo[elemento] > valor_mas_frecuente){
            mayor_valor = mapeo[elemento];
            mas_frecuente = elemento;
        }
    }
    return{
        "mas_frecuente": mas_frecuente,
        "mayor_valor":mayor_valor

    };
}

console.log(elQueMasAparece([1,2,3,4,4,4]));
console.log(elQueMasAparece("hola que tal, qué mas ve"));