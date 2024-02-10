const pokeApi = {}

function convertPokeApeDeatilToPokemons(pokeDetails){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetails.id
    pokemon.nome = pokeDetails.name
    
    const types = pokeDetails.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.tipes = types
    pokemon.type = type
    pokemon.photo = pokeDetails.sprites.other.dream_world.front_default

    return pokemon

}

pokeApi.getPokemonsDeatil = (pokemon) =>{
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApeDeatilToPokemons)
}

pokeApi.getPokemons = function (offSet = 0, limit = 5) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`

    //fazendo requizição usando fetch  
    return fetch(url)
        //Convertendo o responseBody em json
        .then((response) => {
            return response.json()
        })

        .then((jsonBody) => {
            return jsonBody.results
        })

        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDeatil))

        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        

        //catch caso a requisição de errado
        .catch((error) => {
            console.log(error)
        })

}

Promise.all([

])