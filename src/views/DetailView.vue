<template>
    <div class="mt-4 px-3">
        <h1 class="text-xl font-extrabold capitalize">{{ name }}</h1>
    </div>
    <div class="w-[92%] h-[200px] mx-auto px-3 py-1 mt-3 border border-white border-opacity-10 grid place-items-center">
        <!-- pokemon image -->
        <div class="w-[30%] h-[30%] mx-auto mt-5">
            <img :src="status.sprite" alt="" class="w-full h-full">
        </div>  
    </div>
</template>

<script>
import getPokemonStatus from '../composition/getPokemonStatus'
export default {
    props: ['name'],

    setup(props) {
        let { status, load } = getPokemonStatus(props.name)
        load()
        return { status }
    }

}
</script>

<style>

</style>