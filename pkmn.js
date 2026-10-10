function mostrarEstadisticas(pokemon) {
    const statsBox = document.getElementById("statsBox");

    nombrePokemon = pokemon.name;

    if (!statsBox) {
        console.error("No se encontró el elemento #statsBox en el HTML");
        return;
    }

    statsBox.innerHTML = "";

    const img = document.createElement("div")
    img.innerHTML = '<img src="' + pokemon.sprites.front_default + '" alt="' + nombrePokemon + '">'

    const titulo = document.createElement("h3");
    titulo.textContent = "Estadísticas: " + nombrePokemon.charAt(0).toUpperCase() + nombrePokemon.slice(1) ;
    statsBox.appendChild(titulo);

    const listaEstadisticas = document.createElement("div");
    listaEstadisticas.classList.add("stats-list");
        
    pokemon.stats.forEach(statItem => {

        const fila = document.createElement("div");
        fila.classList.add("stat-row");

        const etiqueta = document.createElement("span");
        etiqueta.textContent = abreviarEstadistica(statItem.stat.name) + ": ";

        const valor = document.createElement("strong");
        valor.textContent = statItem.base_stat;

        fila.appendChild(etiqueta);
        fila.appendChild(valor);
        listaEstadisticas.appendChild(fila);
    });

    statsBox.appendChild(listaEstadisticas);
} 

function abreviarEstadistica(nombreStat) {
    const nombres = {
        'hp': 'HP',
        'attack': 'Ataque',
        'defense': 'Defensa',
        'special-attack': 'At. Esp.',
        'special-defense': 'Def. Esp.',
        'speed': 'Velocidad'
    };
    return nombres[nombreStat] || nombreStat;
}