<template>
  <div class="w-full px-3 py-5 mt-3 border border-white border-opacity-10">
    <!-- pokemon id -->
    <div class="flex items-center justify-between text-sm">
        <p>#{{ stats.id }}</p>
    </div>

    <!-- pokemon image -->
    <div class="w-[30%] h-[30%] mx-auto mt-8">
        <img :src="stats.sprite" alt="" class="w-full h-full">
    </div>

    <!-- pokemon details -->
    <div class="mt-8">
      <p class="capitalize">Name: {{ name }}</p> 
      <div class="flex  justify-between items-center"> 
        <p>weight: {{ stats.weight }} (Kg)</p>
        <p>height: {{ stats.height }} (m)</p>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import getPokemonStats  from '../../composition/getPokemonStats'

const props = defineProps(['name'])

let { stats, load } = getPokemonStats(props.name)
onMounted( async () => {
  await load();
})

</script>

<style>

</style>