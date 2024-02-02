/* const offSet = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}` */

function converte(pokemonTypes){
    return pokemonTypes.map((typeSlot)=>{
        return `<li class="type">${typeSlot.type.name}</li>`
    })
}

function pokemonListHTML(pokemon) {
    return `
    <li class="Pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>

    <div class="deteil">
        <ol class="types">
        ${converte(pokemon.types).join(' ')}
        </ol>

        <img src="${pokemon.sprites.other.dream_world.front_default}"
            alt="imagem do ${pokemon.name} ">
    </div>

</li>    
    `
}

const pokemonOl = (document.getElementById("pokemonsList"))

pokeApi.getPokemons().then((pokemonList = []) => {

    const newList = pokemonList.map((pokemon) => {
        return pokemonListHTML(pokemon)
    })

    const newHTML = newList.join("")
    pokemonOl.innerHTML += newHTML
    
})


