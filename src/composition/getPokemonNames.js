let getPokemonNames = () => {
    let names = []

    let load = async () => {
        try {
            let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
            let data = await response.json()
            data.results.forEach(pokemon => {
                // pokemon.name = pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1) //capatalized first name
                
                names.push(pokemon.name)
            });
            
        } catch (err) {
            console.log(err.message)
        }
    }
    
    return { names , load }
}

export default getPokemonNames;
