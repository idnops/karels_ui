<template>
  <div
    class="fixed bottom-0 z-20 p-4 w-full flex justify-center"
    :style="style"
    ref="navigation"
  >
    <div
      class="backdrop-blur-md bg-black/30 rounded-full flex items-center p-1 gap-1 text-xl font-semibold uppercase"
    >
      <NavigationItem v-for="item in 4" :key="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useHideOnScroll } from "../composables/useHideOnScroll";
import NavigationItem from "./NavigationItem.vue";

const navigation = ref<HTMLElement | null>(null);
const { scroll } = useHideOnScroll(navigation, 0, -128);

const style = computed(() => {
  return `transform: translateY(${scroll.value * -1}px)`;
});
</script>

<style scoped></style>
