<script setup lang="ts">
import { useChannelStore } from "@/stores/useChannelStore";
import PopupButton from "@/components/atoms/PopupButton.vue";

const channelStore = useChannelStore();
</script>

<template>
  <Transition name="content" mode="out-in">
    <div
      v-if="channelStore.isStateChanged"
      class="mt-2 flex justify-end gap-x-2"
    >
      <PopupButton @click="channelStore.reset()" data-cy="cancel-button">
        Cancel
      </PopupButton>
      <PopupButton
        :isDark="true"
        @click="channelStore.save()"
        data-cy="apply-button"
      >
        Apply
      </PopupButton>
    </div>
  </Transition>
</template>
