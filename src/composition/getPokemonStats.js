import { ref } from "vue"

let getPokemonStats = (name) => {
    let stats =ref({id: 0, weight: 0, height: 0, sprite: "", types: [], abilities: [], moves: [], stats: {} })
    let details = ref({})
    let type = ref([])
    let abilities = ref([])
    let moves = ref([])
    // let pokeStats = ref({})
    
    let load = async () => {
        try {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            let data = await response.json()
            details.value = {...data}

            // get pokemon status dynamically
            stats.value['id'] = data.id
            stats.value['weight'] = data.weight
            stats.value['height'] = data.height
            stats.value['sprite'] = data.sprites.other.dream_world['front_default']
            

            // get pokemon types
            type.value = details.value.types
            type.value.forEach((pokemon) => stats.value.types.push(pokemon.type.name))

            // get pokemon ability
            abilities.value = details.value.abilities
            abilities.value.forEach((pokemon) => { stats.value.abilities.push(pokemon.ability['name'])})

            //get moves 
            details.value.moves.forEach(move => {
                moves.value.push(move['move']['name'])
            })
            stats.value['moves'] = moves.value


            // get pokemon stats
            details.value.stats.forEach((stat) => {
                let name = stat["stat"]["name"];
                let val = stat["base_stat"];
                stats.value.stats[name] = val
            })


        } catch (err) {
            console.log(err.message)
        }
    }


    return { stats, load }

}

export default getPokemonStats;