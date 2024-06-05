<script setup lang="ts">
import ListButton from "@/components/atoms/ListButton.vue";

const emit = defineEmits<{
  (e: "add"): void;
}>();
</script>

<template>
  <div class="flex justify-between items-center pe-4">
    <slot />
    <ListButton type="button" @click="emit('add')"> Add </ListButton>
  </div>
</template>
