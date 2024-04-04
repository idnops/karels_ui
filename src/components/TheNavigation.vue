<template>
  <div
    class="fixed bottom-0 z-20 p-4 w-full flex justify-center"
    :style="style"
    ref="navigation"
  >
    <div
      class="backdrop-blur bg-karels-800/30 rounded-full flex items-center p-1 gap-1 text-xl font-semibold uppercase"
    >
      <NavigationItem v-for="route in routes" :key="route.to" :to="route.to">
        <!-- <BeakerIcon class="size-6" /> -->
        <component :is="route.icon" class="size-6" />
      </NavigationItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useHideOnScroll } from "../composables/useHideOnScroll";
import NavigationItem from "./NavigationItem.vue";
import {
  Squares2X2Icon,
  UserIcon,
  PlusIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/vue/24/solid";

const navigation = ref<HTMLElement | null>(null);
const { scroll } = useHideOnScroll(navigation, 0, -128);

const style = computed(() => {
  return `transform: translateY(${scroll.value * -1}px)`;
});

const routes = [
  { to: "/", icon: Squares2X2Icon },
  { to: "/orders", icon: InboxIcon },
  { to: "/add", icon: PlusIcon },
  { to: "/accounts", icon: UsersIcon },
  { to: "/profile", icon: UserIcon },
];
</script>

<style scoped></style>
