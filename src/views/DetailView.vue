<template>
    <div class="mt-4 px-3">
        <h1 class="text-xl font-extrabold capitalize">{{ name }}</h1>
    </div>

    <!-- image of pokemon -->
    <div class="px-3 mt-3">
        <div class="w-full py-2 border border-white border-opacity-50 bg-zinc-700 bg-opacity-30 grid place-items-center">
            <p class="ml-auto mr-5 mt-3 text-4xl cursor-pointer" @click="bookmark">🔖</p>
            <!-- pokemon image -->
            <div class="w-[50%] h-[50%] mx-auto mt-5">
                <img :src="stats.sprite" alt="" class="w-full h-full">
            </div>  
        </div>
    </div>

    <!-- detail of pokemon -->
    <div class="px-3 mt-5 mb-5">
        <div class="w-full border border-white border-opacity-10 px-2 py-3">
            <div class="flex items-center justify-between pb-2 border-b mb-2">
                <button @click="details('isAboutBtn')" :class="{ 'active': isAboutBtn }" class="font-bold px-5 py-2">About</button>
                <button @click="details('isStatsBtn')" :class="{ 'active': isStatsBtn }" class="font-bold px-5 py-2">Basic Stat</button>
                <button @click="details('isMoveBtn')" :class="{ 'active': isMoveBtn }" class="font-bold px-5 py-2">Moves</button>
            </div>

            <div v-if="isAboutBtn">
                <PokemonAbout :name="name"></PokemonAbout>
            </div>

            <div v-if="isMoveBtn">
                <PokemonStats :name="name"></PokemonStats>
            </div>

            <div v-if="isStatsBtn" >
                <PokemonMoves :name="name"></PokemonMoves>
            </div>
            
        </div>
    </div>
    
    
    
</template>

<script setup>
import PokemonMoves from '../components/Pokemon/PokemonMoves.vue'
import PokemonStats from '../components/Pokemon/PokemonStats.vue'
import PokemonAbout from '../components/Pokemon/PokemonAbout.vue'
import getPokemonStats from '../composition/getPokemonStats'
import { onMounted, ref } from 'vue'

const props = defineProps(['name'])



let isAboutBtn = ref(true)
let isStatsBtn = ref(false)
let isMoveBtn = ref(false)
let { stats, load } = getPokemonStats(props.name)

const details = (btn) => {
    btn === "isAboutBtn" ? isAboutBtn.value = true : isAboutBtn.value = false;
    btn === "isStatsBtn" ? isStatsBtn.value = true : isStatsBtn.value = false;
    btn === "isMoveBtn" ? isMoveBtn.value = true : isMoveBtn.value = false;
}

onMounted( async () => {
    await load()
})

const bookmark = () => {
    console.log("saved")
}

</script>

<style>
.active {
    background-color: dimgrey;
}

</style>