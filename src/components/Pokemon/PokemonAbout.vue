<template>
  <div class="text-sm flex justify-between">
      <div class="flex flex-col gap-5">
        <p>Species</p>
        <p>Weight</p>
        <p>Height</p>
        <p>Ability</p>
        <p>Types</p>
      </div>

      <div class="w-[60%]">
         <p class="mb-5">{{ name }}</p>
         <p class="mb-5">{{ stats.weight }} (kg)</p>
         <p class="mb-5">{{ stats.height }} (m)</p>

         <div v-for="ability in stats.abilities" :key="ability" class="inline-flex flex-col mr-5 mb-5">
            <p>{{ ability }}</p>
         </div>

         <div v-for="pokemonType in stats.types" :key="pokemonType" class="inline-flex flex-col mr-5"> 
           <p>{{ pokemonType }}</p>
         </div>
      </div>
  </div>

</template>

<script setup>
import getPokemonStats from '../../composition/getPokemonStats'

const props = defineProps(['name'])

let { stats, load } = getPokemonStats(props.name)
load()

</script>

<style>

</style>