<template>
  <span>
    {{ count }}
  </span>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const count = ref(0);
const stepInterval = ref(50);
const interval = ref();
const props = defineProps<{
  duration: number;
  start: number;
  end: number;
}>();

const startCount = (decrease = false) => {
  const step = decrease
    ? (count.value - props.end) / (props.duration / stepInterval.value)
    : (props.end - count.value) / (props.duration / stepInterval.value);

  interval.value = setInterval(() => {
    if (decrease) {
      count.value -= step;
    } else {
      count.value += step;
    }
  }, stepInterval.value);
};

onMounted(() => {
  startCount();
});

watch(count, (val) => {
  if (val === props.end) {
    clearInterval(interval.value);
  }
});

watch(
  () => props.end,
  (val, oldVal) => {
    clearInterval(interval.value);
    if (oldVal > val) {
      startCount(true);
    } else {
      startCount();
    }
  }
);
</script>

<style scoped></style>
