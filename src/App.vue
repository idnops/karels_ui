<template>
  <div class="min-h-[200vh] bg-slate-900">
    <RouterView />
    <TheNavigation />
  </div>
</template>

<script setup lang="ts">
import TheNavigation from "./components/TheNavigation.vue";
</script>

<style scoped></style>
