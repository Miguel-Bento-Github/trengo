<script setup lang="ts">
import MainButton from "./MainButton.vue";
</script>

<template>
  <MainButton class="hover:bg-gray-100 hover:text-gray-800 text-gray-600">
    <slot />
  </MainButton>
</template>
