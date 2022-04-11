/*Dado un array de objetos de películas(título, director, vista)
mostrar todas las películas indicando cual has visto y cual no
*/

const coleccionPeliculas = [
    {
        titulo: "Halo",
        director: "William Dafoe",
        vista: true
    },
    {
        titulo: "Harry Potter",
        director: "Alfonso Cuarón",
        vista: true
    },
    {
        titulo: "Coraline",
        director: "Henry Selick",
        vista: false
    }
];

function misPeliculas(peliculas){
    for(pelicula of peliculas){
        let para_mostrar = `"${pelicula.titulo}" de ${pelicula.director}`;

        if(pelicula.vista){
            console.log("Ya has visto ", para_mostrar);
        }else{
            console.log("No has visto ", para_mostrar);
        }
    }
    return peliculas;
}

console.log(misPeliculas(coleccionPeliculas));