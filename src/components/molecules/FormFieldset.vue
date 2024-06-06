<script setup lang="ts">
import PopupInput from "@/components/atoms/PopupInput.vue";

const emit = defineEmits<{
  (e: "enter", value: string): void;
}>();

defineProps<{ placeholder: string; description: string; name: string }>();
</script>

<template>
  <form @submit.prevent="">
    <fieldset>
      <PopupInput
        @keydown.enter="emit('enter', $event.target.value)"
        :name="name"
        :placeholder="placeholder"
        :description="description"
      />
    </fieldset>
  </form>
</template>
