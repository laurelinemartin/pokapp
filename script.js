function getInputPokemon(){
	inputPokemon = document.getElementById("inputUserPokemon").value;
	getPokemonJson(inputPokemon.toLowerCase());
}


function getPokemonJson(inputPokemon){
	let url = 'https://pokeapi.co/api/v2/pokemon/'+inputPokemon+'/';

	window.fetch(url)
	.then(res => res.json())
	.then(pokemon => screenCurrentWeather(pokemon))
	.catch(err => { throw err });
}

function screenCurrentWeather(pokemon){
	console.log("Pokemon : "+pokemon.name);
	document.getElementById("pokemonDivID")
 			.innerText="Le Pokémon sélectionné est "
 			+pokemon.name
 			+' (N° '+pokemon.id+')'
 			+".";
}

//getPokemonJson();