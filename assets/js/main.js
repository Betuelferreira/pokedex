const offSet = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`

function pokemonListHTML(pokemon) {
    return `
    <li class="Pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>

    <div class="deteil">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">Poison</li>
        </ol>

        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
            alt="imagem do ${pokemon.name} ">
    </div>

</li>    
    `
}

const pokemonOl = (document.getElementById("pokemonsList"))

pokeApi.getPokemons().then((pokemonList) => {
    const listeItens = []
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            listeItens.push( pokemonListHTML(pokemon))
        }
        console.log(listeItens)
    })

  
