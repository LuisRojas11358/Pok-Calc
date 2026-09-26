async function getData() {
  const url = "https://pokeapi.co/api/v2/pokedex/champions";
  let source = [];
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    const pokemons = result.pokemon_entries.map((pokemon) => {
      return pokemon.pokemon_species.name;
    });
  } catch (error) {
    console.error(error.message);
  }
  console.log(pokemons)
}

getData();