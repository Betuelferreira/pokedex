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
const maximo = 11
let limit = 5
let offset = 0


/* function pokemonListHTML(pokemon) {
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
} */


function loadPokemonItens(offSet, limit){
    pokeApi.getPokemons(offSet, limit).then((pokemons = []) => {

        const newHTML = pokemons.map((pokemon) => `
        <li class="Pokemon ${pokemon.type}" >
        <span class="number">#${pokemon.number}</span>
        <span class="name">  ${pokemon.nome}</span>
    
        <div class="detail">
            <ol class="types">
            ${pokemon.types.map((type) =>`<li class="type">${type}</li>`).join(" ")}
            </ol>
    
            <img src="${pokemon.photo}"
                alt="imagem do ${pokemon.name} ">
        </div>
    
    </li>    
        `).join(' ')
        pokemonOl.innerHTML += newHTML
        
        
    })
    
}

loadPokemonItens(offset, limit)

botaoMais.addEventListener("click", ()=>{
    offset += limit
    
    
    const qtdRecord = offset + limit


    if(qtdRecord >= maximo){
        const newLimit = maximo - offset
        loadPokemonItens(offset, newLimit)

        botaoMais.parentElement.removeChild(botaoMais)
    }else{
        loadPokemonItens(offset, limit)
    }

   
})

/* pokeApi.getPokemons().then((pokemonList = []) => {

    const newList = pokemonList.map((pokemon) => {
        return pokemonListHTML(pokemon)
    })

    const newHTML = newList.join("")
    pokemonOl.innerHTML += newHTML
    
}) */
