<template>
  <button
    class="ring-1 rounded-full px-8 py-3 text-sm text-neutral-500 ring-neutral-500 transition-all duration-500"
    @click="update"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(["selected"]);
const update = () => {
  emit("selected");
};
</script>

<style scoped>
.is-active {
  @apply text-white;
  @apply ring-white;
}
</style>
