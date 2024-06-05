<script setup lang="ts">
import MainButton from "./MainButton.vue";

defineProps<{ isDark?: boolean }>();
const classNames = {
  light:
    "hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-100",
  dark: "bg-black text-white hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300",
};
</script>

<template>
  <MainButton :class="isDark ? classNames.dark : classNames.light">
    <slot />
  </MainButton>
</template>
