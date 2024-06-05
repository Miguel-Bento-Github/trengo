<script setup lang="ts">
import type { ChannelItem } from "@/types/ChannelItem";
import ListButton from "@/components/atoms/ListButton.vue";

defineProps<{ item?: ChannelItem }>();
const emit = defineEmits<{
  (e: "remove"): void;
}>();
</script>

<template>
  <div class="flex items-center justify-between my-4">
    <span class="flex mx-2">
      <span class="drag-handle cursor-grab">
        <FontAwesomeIcon
          class="text-gray-300 mx-2"
          icon="grip-vertical"
          aria-label="grab item"
        />
      </span>
      <span
        class="aria-hidden text-gray-800 grid place-items-center w-8 h-8 p-1 mx-1.5 bg-gray-100 rounded"
      >
        <FontAwesomeIcon :icon="item?.icon" />
      </span>
      {{ item?.name }}
    </span>
    <ListButton @click="emit('remove')"> Remove </ListButton>
  </div>
</template>
