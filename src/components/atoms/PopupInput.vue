<script setup lang="ts">
defineProps<{ placeholder: string; description: string; name: string }>();
</script>

<template>
  <label
    for="channel"
    class="block text-sm font-medium leading-6 text-gray-900"
  >
    <div class="relative mt-2 rounded-md shadow-sm">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <FontAwesomeIcon
          class="text-gray-400"
          icon="search"
          aria-label="search"
          data-cy="form-fieldset-search"
        />
      </div>
      <input
        type="text"
        :name="name"
        id="channel"
        class="block w-full rounded-full border-0 py-1.5 pl-8 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        :placeholder="placeholder"
        aria-labelledby="name-description"
        data-cy="form-fieldset-input"
      />
      <p data-cy="form-fieldset-description" id="name-description">
        {{ description }}
      </p>
    </div>
  </label>
</template>

<style scoped>
#name-description {
  position: absolute;
  overflow: hidden;
  height: 0;
  width: 0;
}
</style>
