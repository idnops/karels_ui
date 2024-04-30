<template>
  <div class="p-8">
    <div class="py-8">
      <h1 class="text-4xl text-white text-wrap w-[80px] font-medium">
        Karels CRM
      </h1>
    </div>
    <div>
      <TabGroup v-model="selected" v-slot="{ toggle }">
        <TabItem
          @selected="toggle(i)"
          @click="monthlyActual = tag.value"
          v-for="(tag, i) in tags"
          :key="i"
          :class="{ 'is-active': selected === i }"
        >
          {{ tag.label }}
        </TabItem>
      </TabGroup>
    </div>
    <div class="mt-6">
      <TheScoreMeter :actual="monthlyActual" :target="monthlyTarget" />
    </div>
    <div class="mt-8 pa-6 flex flex-col">
      <div class="text-white font-light text-lg">-1 pts</div>
      <div class="flex justify-between items-end">
        <div class="flex items-end">
          <h2 class="text-8xl font-semibold text-white">
            <TheStepper :duration="500" :start="0" :end="monthlyActual" />
          </h2>
          <p
            class="line-clamp-3 text-sm text-neutral-500 w-[80px] leading-tight ml-4 pb-2"
          >
            Excellent Checked Daily
          </p>
        </div>
        <div>
          <button class="rounded-full ring-1 p-5 mb-2 ring-neutral-500">
            <ArrowUpRightIcon class="text-white size-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpRightIcon } from "@heroicons/vue/24/solid";
import { onMounted, ref } from "vue";
import TabGroup from "../components/TabGroup.vue";
import TabItem from "../components/TabItem.vue";
import TheScoreMeter from "../components/TheScoreMeter.vue";
import TheStepper from "../components/TheStepper.vue";

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
