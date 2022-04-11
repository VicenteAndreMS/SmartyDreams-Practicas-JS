/*Dado un texto, comprobar que sea un Email*/
function comprobarEmail(email){
    return /^\w+@\w+\.\w+$/gi.test(email);
}

console.log(comprobarEmail('vicente@gmail.com'));