<script setup lang="ts">
import MainButton from "./MainButton.vue";

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <span class="relative flex justify-end">
    <MainButton
      @click="emit('click')"
      class="cross text-xl fixed -translate-y-4 translate-x-6 hover:text-red-900"
      aria-label="close popup"
    >
      <FontAwesomeIcon aria-hidden="true" icon="times-circle" />
    </MainButton>
  </span>
</template>

<style scoped>
/* increases hit point ratio for better accessibility */
.cross::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  padding: 1rem;
  cursor: pointer;
}
</style>
