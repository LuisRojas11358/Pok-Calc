const resultBox = document.querySelector(".resultBox");
const inputBox = document.getElementById("inputBox");
    
async function searchPkmn() {
    let pokemons = await getData();

    inputBox.onkeyup = function(){
        let results = [];
        let input = inputBox.value;

        if(input.length){
            results = pokemons.filter((keyword)=>{
                return keyword[0].toLowerCase().includes(input.toLowerCase());
            });
            console.log(results);
        }
        resultBox.style.width = `${inputBox.offsetWidth}px`;
        addEventListener("resize", () => resultBox.style.width = `${inputBox.offsetWidth}px`);
        
        show(results);
    }

    function show(result){
        const content = result.map((list) => {
            let img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + list[1] + ".png"

            return "<li onclick=\"selectInput(this)\" data-pkdx=" + list[1] + " >" + "<img alt= \"" + list[0] + "\" src= " + img + ">" + list[0].charAt(0).toUpperCase() + list[0].slice(1) + "</li>";
        });

        resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
    }
    
}

async function selectInput(list){

    const url = "https://pokeapi.co/api/v2/pokemon/" + list.dataset.pkdx; 
    
    try { 
        const response = await fetch(url); 
        
        if (!response.ok) { 
            throw new Error("No se pudo obtener el Pokémon"); 
        } 
        
        const pokemon = await response.json(); 
        
        colocarPokemon(pokemon); 

        inputBox.value='';
    } catch (error) { 
        console.error(error); 
    } 
}



async function getData() {
    const url = "https://pokeapi.co/api/v2/pokedex/champions";
    let source = [];

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();

        source = result.pokemon_entries.map((pokemon) => {
            return [pokemon.pokemon_species.name, pokemon.entry_number];
        });

    } catch (error) {
        console.error(error.message);
    }
    //console.log(source);
    return source;
}


searchPkmn();