/*Hacer un reloj que en tiempo real vaya mostrando la hora a cada segundo*/
function relojRapido(){
    setInterval(()=>{
        const fecha = new Date();
        const horas = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();
        let tiempo = horas + ':' + minutos + ':' + segundos;
        console.log(`${tiempo}`);
    },1000)
}

relojRapido();