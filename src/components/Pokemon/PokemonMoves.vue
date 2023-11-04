<template>
    <div v-for="move in stats.moves" :key="move" class="inline-flex flex-wrap ">
        <span class="border rounded-md px-2 py-[2px] mr-5 mb-5 border-opacity-10 border-gray-50">{{ move }}</span>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import getPokemonStats from '../../composition/getPokemonStats'

const props = defineProps(['name'])

let { stats, load } = getPokemonStats(props.name)


onMounted( async () => {
    await load()
})


</script>

<style></style>