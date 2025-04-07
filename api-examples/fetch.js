// simple fetch example

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => {
        return response.json()
    })
    .then(responseAsJson => {
        console.log(responseAsJson)
    })
    .catch(error => {
        console.error(error)
    })