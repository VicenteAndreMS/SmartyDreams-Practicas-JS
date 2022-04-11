/*VICENTE ANDRE MINERO SALAZAR*/
/*Dada una cadena de texto, comprobar si es un palíndromo o no.
Los palidromos son palabras que se leen igual aún estando invertidas
Por ejemplo: ana, bob, otto, allivessevilla

No tener en cuenta espacios o símbolos raros

*/
function palindromo(word){
    let wordI = word.split('').reverse().join('');
    console.log(word);
    console.log(wordI);
    if(wordI === word){
        return true;
    }else{
        if(wordI !== word){
        return false;
        }
    }
}


console.log(palindromo('joloj'));
