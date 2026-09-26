const resultBox = document.querySelector(".resultBox");
const inputBox = document.getElementById("inputBox");
    
async function start() {
    let pokemons = await getData();

    inputBox.onkeyup = function(){
        let results = [];
        let input = inputBox.value;

        if(input.length){
            results = pokemons.filter((keyword)=>{
                return keyword.toLowerCase().includes(input.toLowerCase());
            });

            console.log(results);
        }

        show(results);
    }

    function show(result){
        const content = result.map((list) => {
            return "<li onclick=\"selectInput(this)\">" + list.charAt().toUpperCase() + list.slice(1) + "</li>";
        });

        resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
    }
    
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
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
            return pokemon.pokemon_species.name;
        });

    } catch (error) {
        console.error(error.message);
    }

    return source;
}

start();