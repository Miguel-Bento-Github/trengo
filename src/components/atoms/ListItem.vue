<script setup lang="ts">
import ListButton from "@/components/atoms/ListButton.vue";

const emit = defineEmits<{
  (e: "add"): void;
}>();
</script>

<template>
  <div class="flex justify-between items-center p-1 pe-4 hover:bg-gray-200">
    <slot />
    <ListButton type="button" @click="emit('add')"> Add </ListButton>
  </div>
</template>
