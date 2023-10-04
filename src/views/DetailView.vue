<template>
    <div class="mt-4 px-3">
        <h1 class="text-xl font-extrabold capitalize">{{ name }}</h1>
    </div>

    <!-- image of pokemon -->
    <div class="px-3 mt-3">
        <div class="w-full py-2 border border-white border-opacity-50 bg-zinc-700 bg-opacity-30 grid place-items-center">
            <!-- pokemon image -->
            <div class="w-[50%] h-[50%] mx-auto mt-5">
                <img :src="status.sprite" alt="" class="w-full h-full">
            </div>  
        </div>
    </div>

    <!-- detail of pokemon -->
    <div class="px-3 mt-5 mb-5">
        <div class="w-full border border-white border-opacity-10 px-2 py-3">
            <div class="flex items-center gap-5 pb-2 border-b mb-2">
                <button @click="details('isAboutBtn')">About</button>
                <button @click="details('isStatusBtn')">Basic Status</button>
                <button @click="details('isMoveBtn')">Moves</button>
            </div>

            <div v-if="true">
                <PokemonAbout :name="name"></PokemonAbout>
            </div>

            <div v-if="false">
                <PokemonStatus></PokemonStatus>
            </div>

            <div v-if="false">
                <PokemonMoves></PokemonMoves>
            </div>
            
        </div>
    </div>
    
    
    
</template>

<script>
import PokemonMoves from '../components/Pokemon/PokemonMoves.vue'
import PokemonStatus from '../components/Pokemon/PokemonStatus.vue'
import PokemonAbout from '../components/Pokemon/PokemonAbout.vue'
import { ref } from 'vue'
import getPokemonStatus from '../composition/getPokemonStatus'
export default {
  components: {
    PokemonMoves,
    PokemonStatus, PokemonAbout },
    props: ['name'],

    setup(props) {
        let isAboutBtn = ref(false)
        let isStatusBtn = ref(false)
        let isMoveBtn = ref(false)
        let { status, load } = getPokemonStatus(props.name)
        load()
        return { status, isAboutBtn, isMoveBtn, isStatusBtn }
    }

}
</script>

<style>

</style>