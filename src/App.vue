<script setup>
import { RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue';
import NavBar from './components/NavBar.vue';
import SearchBox from './components/SearchBox.vue';





</script>

<template>
  <HeaderBar></HeaderBar>
  <SearchBox></SearchBox>
  <NavBar></NavBar>
  <RouterView />
</template>

<style scoped>

</style>
