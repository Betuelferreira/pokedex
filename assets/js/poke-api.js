const pokeApi = {}

pokeApi.getPokemonsDeatil = (pokemon) =>{
    return fetch(pokemon.url)
    .then((response) => response.json())
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