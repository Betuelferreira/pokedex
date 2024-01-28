const pokeApi = {}
pokeApi.getPokemons = function (offSet = 0, limit = 10) {
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

        //catch caso a requisição de errado
        .catch((error) => {
            console.log(error)
        })

}