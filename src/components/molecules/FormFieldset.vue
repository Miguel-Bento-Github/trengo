<script setup lang="ts">
import InputPopup from "../InputPopup.vue";

const emit = defineEmits<{
  (e: "enter", value: string): void;
}>();

defineProps<{ placeholder: string; description: string; name: string }>();
</script>

<template>
  <form @submit.prevent="">
    <fieldset>
      <InputPopup
        @keydown.enter="emit('enter', $event.target.value)"
        :name="name"
        :placeholder="placeholder"
        :description="description"
      />
    </fieldset>
  </form>
</template>
