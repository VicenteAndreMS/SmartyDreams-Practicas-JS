/*Dado un número mostrar a cuantos años, meses y días equivalen*/
function calcularDias(dias){
    let anios = Math.floor(dias/365);
    let meses = Math.floor(dias/30);
    let dias_restantes  = (dias%365);
    dias_restantes = dias_restantes%30;
    console.log(dias_restantes);

    return `Equivale a ${anios} años, ${meses} meses y ${dias_restantes}`;
}

console.log(calcularDias(990));