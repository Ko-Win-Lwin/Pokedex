import { ref } from "vue"

let getPokemonStatus = (name) => {
    let status =ref({weight: 0, height: 0, sprite: ''})
    
    let load = async () => {
        try {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            let data = await response.json()

            // get pokemon status dynamically
            status.value['id'] = data.id
            status.value['weight'] = data.weight
            status.value['height'] = data.height
            status.value['sprite'] = data.sprites.other.dream_world['front_default']

        } catch (err) {
            console.log(err.message)
        }
    }


    return { status, load }

}

export default getPokemonStatus;