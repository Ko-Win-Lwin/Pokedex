<template>
    <!-- pokemon lists -->
    <div class="mt-5 px-3 flex items-center">
        <input 
        v-model="searchPokemon" @input="loadPokemon"
        type="text" placeholder="search..." class="bg-transparent border w-full border-white border-opacity-10 px-3 h-12 text-sm focus:outline-none">
        <button @click="loadPokemon" class="bg-zinc-700 bg-opacity-50 px-3 h-12 text-sm">Search</button>
      </div>
      <div class="flex px-3 mt-2 items-center gap-3 text-[12px]">
          <p>Eg.</p>
          <p>bulbasaur</p>
          <p>ivysaur</p>
          <p>venusaur</p>
      </div>

    <div class="px-3 mt-4">
        <h1 class="text-xl font-extrabold">Pokemons List</h1>
            <template v-if="pokemons">
                <div v-for="name in pokemons" :key="name">
                  <router-link :to="{ name: 'detail', params: { name: name } }">
                    <PokemonCard :name="name"></PokemonCard>
                  </router-link>
                </div>
            </template>
      </div>
</template>


<script setup>
import { ref } from 'vue';
import getPokemonNames from '../composition/getPokemonNames';
import PokemonCard from "../components/pokemon/PokemonCard.vue";


let searchPokemon = ref("")
let pokemons = ref([])

let { names, load } = getPokemonNames();
load();

// load pokemon on input
const loadPokemon = () => {
    pokemons.value = names.filter( name => name.startsWith(searchPokemon.value))
    console.log(pokemons.value)
}









</script>
