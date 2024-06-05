<script setup lang="ts">
import { ref } from "vue";
import { useChannelStore } from "@/stores/useChannelStore";
import { getRandomItemInArray } from "@/util/get-random-item-in-array";
import { iconList } from "@/const/icon-list";
import { v4 as generateId } from "uuid";
import FavoriteList from "@/components/molecules/FavoriteList.vue";
import FavoriteListControls from "@/components/molecules/FavoriteListControls.vue";
import CrossButton from "@/components/atoms/CrossButton.vue";
import ListItem from "@/components/atoms/ListItem.vue";
import FormFieldset from "@/components/molecules/FormFieldset.vue";

const channelStore = useChannelStore();

const isDialogOpen = ref(false);

const addFavorite = (id: string) => {
  const isAdded = channelStore.addFavorite(id);
  if (!isAdded) return;
  isDialogOpen.value = false;
};

const createEntry = (name: string) => {
  const icon = getRandomItemInArray(iconList);
  const newEntry = {
    id: generateId(),
    name,
    icon,
  };
  channelStore.createEntry(newEntry);
};
</script>

<template>
  <h1 class="text-xl font-semibold mx-auto mb-4 w-10/12 max-w-4xl">Channels</h1>
  <main class="mx-auto w-10/12 max-w-4xl shadow-lg p-4 rounded-lg">
    <div>
      <FormFieldset
        placeholder="Add channel"
        description="Please provide a channel name"
        name="popup"
        @enter="createEntry"
        @click="isDialogOpen = true"
      >
      </FormFieldset>
      <dialog
        aria-modal="true"
        ref="dialog"
        id="popup"
        class="relative w-full"
        :open="isDialogOpen"
      >
        <div
          class="absolute bg-white overflow-y-auto max-h-80 p-4 rounded-md shadow-md w-full min-w-80"
        >
          <CrossButton @click="isDialogOpen = false" />
          <ListItem
            @add="addFavorite(channel.id)"
            v-for="channel in channelStore.channels"
            :key="channel.id"
          >
            {{ channel.name }}
          </ListItem>
        </div>
      </dialog>
    </div>
    <div>
      <FavoriteList />
      <FavoriteListControls />
    </div>
  </main>
</template>
