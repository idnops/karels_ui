<template>
  <div class="flex items-center justify-center pt-6">
    <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="0%" y1="100%" id="a">
          <stop offset="0%" stop-color="#45c8cb" />
          <stop offset="80%" stop-color="#12333a" />
        </linearGradient>
        <linearGradient x1="0%" y1="100%" id="b">
          <stop offset="0%" stop-color="#234e56" />
          <stop offset="60%" stop-opacity="0" stop-color="#12333a" />
        </linearGradient>
      </defs>

      <circle
        cx="50%"
        cy="0"
        :r="radius"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        fill="none"
        :stroke-dasharray="targetStroke"
        :stroke-dashoffset="targetOffset"
        style="transform: rotate(180deg); transform-origin: center"
        class="transition-all duration-500 stroke-karels-300"
      />
      <circle
        cx="50%"
        cy="0"
        :r="radius"
        stroke="url(#a)"
        :stroke-width="strokeWidth"
        fill="none"
        :stroke-dasharray="scoreStroke"
        style="transform: rotate(180deg); transform-origin: center"
        class="transition-all duration-500"
      />

      <circle
        cx="50%"
        cy="0"
        :r="radius - 46"
        stroke="url(#b)"
        :stroke-width="50"
        fill="none"
        :stroke-dasharray="scoreStroke2"
        style="transform: rotate(180deg); transform-origin: center"
        class="transition-all duration-700"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

onMounted(() => {
  setTimeout(() => {
    value.value = 65;
  }, 500);
});

const radius = ref(170);
const target = ref(100);
const value = ref(10);

const strokeWidth = ref(40);

const primaryC = computed(() => Math.PI * 2 * radius.value);
const secondaryC = computed(
  () => Math.PI * 2 * (radius.value - strokeWidth.value - 7)
);

const targetStroke = computed(() => {
  return [
    primaryC.value / 2.1 - (primaryC.value / 2) * (value.value / target.value),
    primaryC.value - (primaryC.value / 2) * (value.value / target.value),
  ];
});

const targetOffset = computed(() => {
  return (primaryC.value / 2) * (value.value / target.value) * -1;
});

const scoreStroke = computed(() => {
  return [
    (primaryC.value / 2) * (value.value / target.value),
    primaryC.value - (primaryC.value / 2) * (value.value / target.value),
  ];
});

const scoreStroke2 = computed(() => {
  return [
    (secondaryC.value / 2) * (value.value / target.value),
    secondaryC.value - (secondaryC.value / 2) * (value.value / target.value),
  ];
});
</script>

<style scoped></style>
