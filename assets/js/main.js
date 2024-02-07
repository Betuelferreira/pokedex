/* const offSet = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}` */

/* function converte(pokemonTypes){
    return pokemonTypes.map((typeSlot)=>{
        return `<li class="type">${typeSlot.type.name}</li>`
        
    })
}
 */
const pokemonOl = (document.getElementById("pokemonsList"))
const botaoMais = (document.getElementById("Mais"))

function pokemonListHTML(pokemon) {
    return `
    <li class="Pokemon ${pokemon.type}" >
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.nome}</span>

    <div class="detail">
        <ol class="types">
        ${pokemon.types.map((type) =>`<li class="type">${type}</li>`).join(" ")}
        </ol>

        <img src="${pokemon.photo}"
            alt="imagem do ${pokemon.name} ">
    </div>

</li>    
    `
}


function loadPokemonItens(){
    pokeApi.getPokemons().then((pokemons = []) => {

        const newHTML = pokemons.map(pokemonListHTML).join(' ')
        pokemonOl.innerHTML += newHTML
        
        
    })
    
}

/* pokeApi.getPokemons().then((pokemonList = []) => {

    const newList = pokemonList.map((pokemon) => {
        return pokemonListHTML(pokemon)
    })

    const newHTML = newList.join("")
    pokemonOl.innerHTML += newHTML
    
}) */
