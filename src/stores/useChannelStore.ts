import { defineStore } from "pinia";
import type { ChannelItem } from "@/types/ChannelItem";
import channels from "../../cypress/fixtures/channels.json";

interface State {
  channels: ChannelItem[];
  favorites: ChannelItem["id"][];
  savedFavorites: ChannelItem["id"][];
}

export const defaultFavorites = channels
  .map((channel) => channel.id)
  .slice(0, 5);

export const useChannelStore = defineStore({
  id: "channels",
  persist: true,
  state: (): State => ({
    channels: channels,
    // this mock method gets the first five ids in the array
    // ideally a server would provide these ids
    favorites: defaultFavorites,
    savedFavorites: defaultFavorites,
  }),
  getters: {
    getChannelById: (state) => {
      return (channelId: string) =>
        state.channels.find((channel) => channel.id === channelId);
    },
    isStateChanged: (state) => {
      return (
        JSON.stringify(state.favorites) !== JSON.stringify(state.savedFavorites)
      );
    },
  },
  actions: {
    createEntry(channel: ChannelItem) {
      this.channels.push(channel);
    },
    /**
     * Adds a favorite to the favorites if it isn't already there, no duplicates allowed.
     * @param favoriteId
     * @returns
     */
    addFavorite(favoriteId: ChannelItem["id"]) {
      const isDuplicated = this.favorites.find(
        (favorite) => favorite === favoriteId
      );
      if (isDuplicated) return;

      this.favorites.push(favoriteId);
      return favoriteId;
    },
    /**
     * With a favorite Id remove a favorite item
     * @param favoriteId
     */
    removeFavorite(favoriteId: ChannelItem["id"]) {
      this.favorites = this.favorites.filter(
        (favorite) => favorite !== favoriteId
      );
    },
    /**
     * Reset to previous state, not a full reset of the state, for that use $reset
     */
    reset() {
      this.favorites = this.savedFavorites;
    },
    /**
     * Saves current state to default
     */
    save() {
      this.savedFavorites = this.favorites;
    },
  },
});
