/*Dado un string ponerlo completo en Mayúsculas o minúsculas
dependiendo si hay más mayúsculas o minúsculas por defecto
del string*/

function mayusMinus(texto){
    let mayusculas = 0;
    let minusculas = 0;

    for(letra of texto){
        console.log(letra);
        if(/[A-Z]/.test(letra)){
            mayusculas++;
        }else{
            minusculas++;
        }
    }
    console.log(mayusculas,minusculas);
}

mayusMinus("Vicente ANDRE");