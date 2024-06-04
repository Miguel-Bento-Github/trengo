<script setup lang="ts">
const options: string[] = [];
</script>

<template>
  <select data-cy="channel-control">
    <option v-for="option in options" :key="`option-${option}`" :value="option">
      {{ option }}
    </option>
  </select>
</template>
