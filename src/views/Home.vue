<template>
  <div class="p-8">
    <div class="flex gap-1 mb-8">
      <button
        class="ring-1 ring-white rounded-full px-8 py-3 text-sm text-white"
        @click="monthlyActual = 320"
      >
        Turnover
      </button>
      <button
        class="ring-1 ring-neutral-400 rounded-full px-8 py-3 text-sm text-neutral-400"
        @click="monthlyActual = 280"
      >
        Orders
      </button>
    </div>
    <TheScoreMeter :actual="monthlyActual" :target="monthlyTarget" />
    <!-- <h1 class="text-7xl font-bold text-white">831</h1> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheScoreMeter from "../components/TheScoreMeter.vue";

const monthlyTarget = ref(450);
const monthlyActual = ref(185);
</script>

<style scoped></style>
