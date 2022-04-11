/*Dado un número, indicar qué tipo de ángulo es*/

function angulo(abertura){
    let resultado = "Ángulo Completo";

    if(abertura<90){
        resultado = "Ángulo Agudo";
    }
    else if(abertura === 90){
        resultado="Ángulo Recto";
    }
    else if(abertura > 90 && abertura < 180){
        resultado = "Ángulo Obtuso";
    }
    else if(abertura === 180){
        resultado = "Ángulo Llano";
    }
    else if(abertura > 180 && abertura < 360){
        resultado = "Ángulo Concavo";
    }

    return resultado;
}

console.log(angulo(124));