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
        console.log("jioeof");
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

    espacioSeleccionado.innerHTML = '<img src="' + pokemon.sprites.front_default + '" alt="' + pokemon.name + '">';

    if (estabaVacio){
        crearEspacio();
    } 
}

crearEspacio();
