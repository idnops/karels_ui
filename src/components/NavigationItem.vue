<template>
  <RouterLink :to="props.to">
    <div
      class="rounded-full bg-neutral-500/30 text-white size-16 flex items-center justify-center"
    >
      <slot />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string;
}>();
</script>

<style scoped>
.router-link-active > div {
  @apply bg-white;
  @apply text-black;
}
</style>
