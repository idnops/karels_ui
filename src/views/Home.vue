<template>
  <div class="p-8">
    <div>
      <TabGroup v-model="selected" v-slot="{ toggle }">
        <TabItem
          @selected="toggle(i)"
          @click="monthlyActual = tag.value"
          v-for="(tag, i) in tags"
          :key="i"
          :class="[
            selected === i
              ? 'text-white ring-white'
              : 'text-neutral-600 ring-neutral-600',
          ]"
        >
          {{ tag.label }}
        </TabItem>
      </TabGroup>
    </div>
    <TheScoreMeter :actual="monthlyActual" :target="monthlyTarget" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import TabGroup from "../components/TabGroup.vue";
import TabItem from "../components/TabItem.vue";
import TheScoreMeter from "../components/TheScoreMeter.vue";

const monthlyTarget = ref(500);
const monthlyActual = ref(0);
const selected = ref(0);

const tags = ref([
  { label: "Orders", value: 300 },
  { label: "Turnover", value: 450 },
]);

onMounted(() => {
  setTimeout(() => {
    monthlyActual.value = 300;
  }, 0);
});
</script>

<style scoped></style>
