<template>
  <button class="ring-1 rounded-full px-8 py-3 text-sm" @click="update">
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(["selected"]);
const update = () => {
  emit("selected");
};
</script>

<style scoped></style>
