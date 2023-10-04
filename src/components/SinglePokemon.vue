<template>
  <div class="w-full px-3 py-1 mt-3 border border-white border-opacity-10">
    <!-- pokemon id -->
    <div class="flex items-center justify-between text-sm">
        <p>#{{ status.id }}</p>
        <p>🔖</p>
    </div>

    <!-- pokemon image -->
    <div class="w-[30%] h-[30%] mx-auto mt-5">
        <img :src="status.sprite" alt="" class="w-full h-full">
    </div>

    <!-- pokemon details -->
    <div class="mt-5">
      <p class="capitalize">Name: {{ name }}</p> 
      <div class="flex  justify-between items-center"> 
        <p>weight: {{ status.weight }} (Kg)</p>
        <p>height: {{ status.height }} (m)</p>
      </div>
    </div>
    
  </div>
</template>

<script>
import getPokemonStatus  from '../composition/getPokemonStatus'

export default {
  props: ["name"],

  setup(props) {
    let { status, load } = getPokemonStatus(props.name)
    load()
    return { status }
  }
}
</script>

<style>

</style>