/*Dado un texto, devolver cuantas consonantes y 
cuantas vocales tiene*/

function catalogar(texto){
    let textoLimpio = texto.replace(/[!-._;¡¿? ]/gi,'').split('');
    console.log(textoLimpio);
    let consonantes = 0;
    let vocales = 0;
    let textoJunto = "";
for(let i=0;i<textoLimpio.length;i++){
    console.log(i);
    switch(textoLimpio[i]){
        case 'a':   vocales+=1;
                    break;

        case 'e':   vocales +=1;
                    break;

        case 'i':   vocales = vocales+1;
                    break;
                
        case 'o':   vocales = vocales+1;
                    break;

        case 'u':   vocales = vocales+1;
                    break;                    
        
        default: consonantes = consonantes+1;
                     break;

    }
}textoJunto = "Consonantes: " + consonantes + "\n" 
             +"Vocales: "     + vocales;
return textoJunto;
    
}

console.log(catalogar('Vicente__Mine!!__ro'))