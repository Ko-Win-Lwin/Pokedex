<template>
  <div class="text-sm flex flex-col gap-2 w-50">
    <div class="flex items-center justify-between">
      <p>Species</p>
      <p>{{ name }}</p>
    </div>
                    
    <div class="flex items-center justify-between">
      <p>Weight</p>
      <p>{{ status.weight }}</p>
    </div>

    <div class="flex items-center justify-between">
      <p>Height</p>
      <p>{{ status.height }}</p>
    </div>

    <div class="flex items-center justify-between">
      <div v-for="ability in status.abilities" :key="ability">
        <span>{{ ability }}</span>
        
      </div>
    </div>

    <div class="flex items-center justify-between">
      <p>Types</p>
      <div v-for="pokemonType in status.types" :key="pokemonType"> 
        <span> {{ pokemonType }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getPokemonStatus from '../../composition/getPokemonStatus'
export default {
  props: ['name'],
  setup(props) {
    let { status, load } = getPokemonStatus(props.name)
    load()
    return { load, status }
  }
}
</script>

<style>

</style>