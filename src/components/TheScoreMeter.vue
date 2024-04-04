<template>
  <div class="flex items-center justify-center pt-6 relative">
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="0%" y1="100%" id="primaryStrokeGradient">
          <stop offset="0%" stop-color="#45c8cb" />
          <stop offset="80%" stop-color="#171717" />
        </linearGradient>
        <linearGradient x1="0%" y1="100%" id="secondaryStrokeGradient">
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
        class="transition-all duration-500 stroke-karels-200"
      />
      <circle
        cx="50%"
        cy="0"
        :r="radius"
        stroke="url(#primaryStrokeGradient)"
        :stroke-width="strokeWidth"
        fill="none"
        :stroke-dasharray="scoreStroke"
        style="transform: rotate(180deg); transform-origin: center"
        class="transition-all duration-500"
      />

      <circle
        cx="50%"
        cy="0"
        :r="radius - 48"
        stroke="url(#secondaryStrokeGradient)"
        :stroke-width="55"
        fill="none"
        :stroke-dasharray="scoreStroke2"
        style="transform: rotate(180deg); transform-origin: center"
        class="transition-all duration-700"
      />

      <circle
        cx="50%"
        cy="0"
        :r="radius"
        :stroke-width="60"
        fill="none"
        :stroke-dasharray="indicatorStroke"
        :stroke-dashoffset="targetOffset"
        style="transform: rotate(180deg); transform-origin: center"
        class="transition-all duration-500 stroke-karels-200"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 36.7 50"
      class="absolute bottom-[-25px] size-12 -rotate-90 transition-all duration-500 fill-karels-200"
      :style="arrowStyle"
    >
      <polygon class="st0" points="18.3,0 36.7,50 18.3,37.3 0,50 " />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  target: number;
  actual: number;
}>();

const radius = ref(180);

const strokeWidth = ref(40);

const primaryC = computed(() => Math.PI * 2 * radius.value);
const secondaryC = computed(
  () => Math.PI * 2 * (radius.value - strokeWidth.value - 8)
);

const targetStroke = computed(() => {
  return [
    primaryC.value / 2.1 - (primaryC.value / 2) * (props.actual / props.target),
    primaryC.value - (primaryC.value / 2) * (props.actual / props.target),
  ].toString();
});

const targetOffset = computed(() => {
  return (primaryC.value / 2) * (props.actual / props.target) * -1;
});

const scoreStroke = computed(() => {
  return [
    (primaryC.value / 2) * (props.actual / props.target),
    primaryC.value - (primaryC.value / 2) * (props.actual / props.target),
  ].toString();
});

const scoreStroke2 = computed(() => {
  return [
    (secondaryC.value / 2) * (props.actual / props.target),
    secondaryC.value - (secondaryC.value / 2) * (props.actual / props.target),
  ].toString();
});

const indicatorStroke = computed(() => {
  return [2, primaryC.value - 2].toString();
});

const arrowStyle = computed(() => {
  const degree = -90 + (180 * props.actual) / props.target;
  const limit = degree > 90 ? 90 : degree < -90 ? -90 : degree;
  return `transform: rotate(${limit}deg)`;
});
</script>

<style scoped></style>
