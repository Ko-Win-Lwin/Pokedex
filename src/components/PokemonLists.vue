<template>
  <div class="px-3 mt-4">
    <h1 class="text-xl font-extrabold">Pokemons List</h1>
    <div v-for="name in names" :key="name">
      <router-link :to="{name:'detail', params: {name: name}}">
        <SinglePokemon :name="name"></SinglePokemon>
      </router-link>
      
    </div>
  </div>
</template>

<script>
import SinglePokemon from '../components/SinglePokemon.vue';
import getPokemonNames from '../composition/getPokemonNames'

export default {
  components: {
    SinglePokemon,
  },

  setup() {
    let { names , load } = getPokemonNames();
    load();
    return { names }
  }
}
</script>

<style>

</style>