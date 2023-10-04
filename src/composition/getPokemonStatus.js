import { ref } from "vue"

let getPokemonStatus = (name) => {
    let status =ref({id: 0, weight: 0, height: 0, sprite: "", types: [], abilities: []})
    let details = ref({})
    let type = ref([])
    let abilities = ref([])
    
    let load = async () => {
        try {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            let data = await response.json()
            details.value = {...data}



            // get pokemon status dynamically
            status.value['id'] = data.id
            status.value['weight'] = data.weight
            status.value['height'] = data.height
            status.value['sprite'] = data.sprites.other.dream_world['front_default']

            // get pokemon types
            type.value = details.value.types
            type.value.forEach((pokemon) => status.value.types.push(pokemon.type.name))

            // get pokemon ability
            abilities.value = details.value.abilities
            abilities.value.forEach((pokemon) => { status.value.abilities.push(pokemon.ability['name'])})



        } catch (err) {
            console.log(err.message)
        }
    }


    return { status, load }

}

export default getPokemonStatus;