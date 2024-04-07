<template>
  <div class="flex gap-1">
    <slot :toggle="update" />
  </div>
</template>

<script setup lang="ts">
const selected = defineModel();
function update(i: number) {
  selected.value = i;
}
</script>

<style scoped></style>
