/*Dada un array de objetos, devolver cuáles son las aficiones
más comunes de los usuarios*/
function aficiones(arrObj){
    let mapeo={};
    
    for(objeto of arrObj){

        for(aficion of objeto.aficiones){
            if(mapeo[aficion]){
                mapeo[aficion]++;
            }else{
                mapeo[aficion]=1;
            }
        }
    }return mapeo;
}

const usuarios = [
{nombre: "Vicente",aficiones: ["Informatica","Cine","Videojuegos"]},
{nombre: "Iliana",aficiones: ["Informatica","Series","Maquillaje"]},
{nombre: "Gael",aficiones: ["Viajar", "Musica","Videojuegos"]},
{nombre: "Pilar",aficiones: ["Yoga","Cine","Television"]}
];

console.log(aficiones(usuarios));