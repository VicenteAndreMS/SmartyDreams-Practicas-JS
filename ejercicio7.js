/*Dados dos números, devolver cuántos numeros IMPARES hay entre ellos*/

function impares(numero1,numero2){
    let resultado_final="";
    console.log(numero1,numero2);
    if(numero1 < numero2){
        let resultado="";
        for(let i=numero1;i<=numero2;i++){
            
            let residuo= (i%2!=0);

            if((residuo)!=0){
                resultado += i + ' ';
            }
        }
        resultado_final +=  resultado;
        return resultado_final;
    }

    if(numero1 > numero2){
        let resultado="";
        for(let i=numero2;i<=numero1;i++){
            let residuo= (i%2!=0);

            if((residuo)!=0){
                resultado += i + ' '
            }
        }
        resultado_final += resultado;   
        return resultado_final;
    }
    
}

console.log('Los números impares en ese intervalo son: ', impares(1,10));