<template>
    <SearchBox></SearchBox>
    <div class="flex px-3 mt-2 items-center gap-3 text-[12px]">
        <p>Eg.</p>
        <p>bulbasaur</p>
        <p>ivysaur</p>
        <p>venusaur</p>
    </div>

    <!-- nav btn -->
    <div id="nav_btn" class="px-3 mt-3 text-sm font-bold flex items-center gap-5">
        <button>Home 🏠</button>
        <button>Bookmark 🔖</button>
    </div>

    <!-- pokemon lists -->
    <PokemonLists></PokemonLists>
</template>


<script setup>
import SearchBox from '../components/SearchBox.vue';
import PokemonLists from '../components/PokemonLists.vue';
</script>
