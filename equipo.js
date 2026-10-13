const team = document.getElementById("team");

let cantidadPokemon = 0;
let espacioSeleccionado = null;

function crearEspacio() {
    
    if (cantidadPokemon >= 6) {
        return;
    }

    
    const espacio = document.createElement("div");

    espacio.classList.add("pokemon-slot");
    espacio.textContent = "+";

    espacio.addEventListener("click", function() {
        espacioSeleccionado = espacio;
        inputBox.focus();
    });
    
    if(cantidadPokemon === 0){
        espacioSeleccionado = espacio;
    }
    
    team.appendChild(espacio);
    
    
    cantidadPokemon++;
}

async function colocarPokemon(pokemon) {

    if (espacioSeleccionado === null) {
        return;
    }
    console.log(espacioSeleccionado.dataset.ocupado);
    const estabaVacio = !espacioSeleccionado.dataset.ocupado;
    espacioSeleccionado.dataset.ocupado = "true";

    espacioSeleccionado.dataset.num = cantidadPokemon;

    espacioSeleccionado.innerHTML = '<img src="' + pokemon.sprites.front_default + '" alt="' + pokemon.name + '">';

    mostrarEstadisticas(pokemon);

    espacioSeleccionado.addEventListener("click", () => mostrarEstadisticas(pokemon));

    if (estabaVacio){
        crearEspacio();
    } 
}

function borrarpokemon(){
    let espacioLibre = team.getElementsByClassName("pokemon-slot");
    espacioLibre.item
}

crearEspacio();
