/*Dado un número mostrar una escalera con escalones de "[-]
usando el número para los niveles de la escalera*/

function escalera(numero){
    let escalera_completa = "";

    for(let nivel = 1; nivel <= numero; nivel++){
        console.log("Nivel:", nivel);

        let escalones="";
        for(let escalon=1;escalon<=nivel;escalon++){
            escalones += "[-]";
        }
    }
}


console.log(escalera(5));