const offSet = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}limit=${limit}`


//fazendo requizição usando fetch  
fetch(url)
    //Convertendo o responseBody em json
    .then((response) => {
        return response.json()
    })
    //recebendo o jsonBody ja convertido
    .then((jsonBody) => {
        console.log(jsonBody)
    })

    //catch caso a requisição de errado
    .catch((error) => {
        console.log(error)
    })

/* //finally vai dar uma resposta quando quando chegar ao final da requisição idependente do resultado
.finally(()=>{
    console.log("Requisição concluida!!")
})
 */
