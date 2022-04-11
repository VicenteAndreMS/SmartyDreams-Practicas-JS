/*Dada una cadena de texto, devolver cuantas vocales tiene*/
function vocales(texto){
    let texto_limpio = texto.toLowerCase().replace(/[!¡_¿?,.-]/gi,'').split('');
    let contador=0;
    for(let i=0;i<=texto_limpio.length;i++){
        switch (texto_limpio[i]){
            case 'a': contador=contador+1;
                      break;
            case 'e': contador=contador+1;
                      break;
            case 'i': contador=contador+1;
                      break;
            case 'o': contador=contador+1;
                      break;
            case 'u': contador=contador+1;
                      break;          
            default:  break;
        }
    }return contador;
}

console.log(vocales('Junta tu rostro mojado con el mio'));