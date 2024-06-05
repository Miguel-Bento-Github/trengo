<script setup lang="ts">
import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/vue";
import { useChannelStore } from "@/stores/useChannelStore";
import { storeToRefs } from "pinia";
import { watch } from "vue";
import ChannelItem from "@/components/ChannelItem.vue";

const channelStore = useChannelStore();
const { favorites: favoritesRef } = storeToRefs(channelStore);
const [favoriteRef, favoriteList] = useDragAndDrop(favoritesRef.value, {
  plugins: [animations()],
  dragHandle: ".drag-handle",
});

// Updates store list on hook list change
channelStore.$subscribe(
  () => {
    favoriteList.value = favoritesRef.value;
  },
  { detached: true }
);

// Keeps order on list change
watch(favoriteList, (newList) => {
  channelStore.favorites = newList;
});
</script>

<template>
  <ul ref="favoriteRef" class="max-h-96 overflow-y-auto rounded-md">
    <TransitionGroup name="content">
      <li v-for="favorite in favoriteList" :key="favorite" class="min-h-5">
        <ChannelItem
          :item="channelStore.getChannelById(favorite)"
          @remove="channelStore.removeFavorite(favorite)"
        />
      </li>
    </TransitionGroup>
  </ul>
</template>

<style scoped>
ul {
  scrollbar-gutter: stable;
}
</style>
