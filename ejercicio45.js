/*Dado un array de alumnos mostrar cuántos alumnos
están suspendidos y cuantos aprobados*/

function suspensos(alumnos){
    let aprobados=0;
    let suspendidos=0;
    for(let alumno of alumnos){
        console.log(alumno[1]);
        if(alumno[1] > 5){
            aprobados++;
        }else{
            suspendidos++;
        }
    }let resultado = "Aprobados: " + aprobados + "\n" +
                     "Suspendidos: " + suspendidos;
    return resultado;
}

console.log(suspensos([
    ['Vicente',3],
    ['Gael',9],
    ['Pilar',10],
    ['Alberto',5],
    ['Erick',4],
    ['Susana',7],
    ['Luis',1]
]))