<template>
    <div class="text-sm flex justify-between gap-5">
        <div class="flex flex-col  w-[30%] gap-5">
          <p>Hp</p>
          <p>Attack</p>
          <p>Defense</p>
          <p>Special-Attack</p>
          <p>Special-Defence</p>
          <p>Speed</p>
        </div>

        <div class="flex flex-col gap-5 w-[60%]">
          <div class="flex gap-4 items-center">
            <p>{{ stats.stats.hp }}</p> 
            <ProgressBar>
              <div class="flex flex-col justify-center overflow-hidden bg-orange-500" role="progressbar"  :style="{width: stats.stats.hp + '%'}"  aria-valuemin="0" aria-valuemax="100"></div>
            </ProgressBar>
          </div>


          <div class="flex gap-4 items-center">
            <p>{{ stats.stats.attack }}</p> 
            <ProgressBar>
                <div class="flex flex-col justify-center overflow-hidden bg-orange-500" role="progressbar"  :style="{ width: stats.stats.attack + '%' }" aria-valuemin="0" aria-valuemax="100"></div>
            </ProgressBar>
          </div>

          <div class="flex gap-4 items-center">
            <p>{{ stats.stats.defense }}</p> 
            <ProgressBar>
                <div class="flex flex-col justify-center overflow-hidden bg-orange-500" role="progressbar"  :style="{ width: stats.stats.defense + '%' }" aria-valuemin="0" aria-valuemax="100"></div>
            </ProgressBar>
          </div>

          <div class="flex gap-4 items-center">
            <p>{{ stats.stats["special-attack"] }}</p> 
            <ProgressBar>
                <div class="flex flex-col justify-center overflow-hidden bg-orange-500" role="progressbar"  :style="{ width: stats.stats['special-attack'] + '%' }"  aria-valuemin="0" aria-valuemax="100"></div>
            </ProgressBar>
          </div>

          <div class="flex gap-4 items-center">
            <p>{{ stats.stats["special-defense"] }}</p> 
            <ProgressBar>
                <div class="flex flex-col justify-center overflow-hidden bg-orange-500" role="progressbar"  :style="{ width: stats.stats['special-defense'] + '%' }"  aria-valuemin="0" aria-valuemax="100"></div>
            </ProgressBar>
          </div>          

          <div class="flex gap-4 items-center">
            <p>{{ stats.stats.speed }}</p> 
            <ProgressBar>
                <div class="flex flex-col justify-center overflow-hidden bg-orange-500" role="progressbar"  :style="{ width: stats.stats.speed + '%' }"  aria-valuemin="0" aria-valuemax="100"></div>
            </ProgressBar>
          </div>       
        </div>
  

    
      </div>
</template>

<script setup>
import ProgressBar from "../ProgressBar.vue";
import getPokemonStats from "../../composition/getPokemonStats";
import { onMounted } from "vue";
const props = defineProps(['name'])

let { stats, load } = getPokemonStats(props.name);

onMounted(async () => {
  await load()

})

</script>

<style>

</style>