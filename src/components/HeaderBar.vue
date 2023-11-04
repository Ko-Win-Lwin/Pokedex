<template>
    <nav class="flex items-center justify-between  px-4 py-2 border-b border-white border-opacity-10">
        <div class="rounded-full border border-slate-700 p-1.5 w-9 h-9 cursor-pointer">
            <router-link :to="{name : 'home'}">
                <img src="../assets/images/pokeball.png" alt="" class="pokemon__ball">
            </router-link>
        </div>

        <div class="flex items-center gap-5 ">
            <i class="fa-brands fa-linkedin-in text-sm opacity-50 bg-zinc-700 px-1.5 py-0.5 text-center text-slate-300 rounded-full cursor-pointer"></i>
            <span>/</span>
            <i class="fa-brands fa-github text-xl cursor-pointer"></i>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.pokemon__ball:hover {
    animation-name: rotate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>