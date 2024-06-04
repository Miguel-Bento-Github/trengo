<script setup lang="ts">
const isLoading = false;
const isError = false;
const data = {
  name: "Team@trengo.com",
};
</script>

<template>
  <h1>Welcome to Trengo</h1>
  <p :aria-busy="isLoading">
    <TransitionGroup name="content">
      <span key="loading" v-if="isLoading">Loading...</span>
      <div key="error" v-if="isError">Something went wrong</div>
      <span key="not-loading" data-cy="home-content" v-else>
        <div>
          <FontAwesomeIcon :icon="['fas', 'grip-vertical']" />
          <FontAwesomeIcon :icon="['fab', 'whatsapp']" />
          {{ data.name }}
          <button type="button">Remove</button>
        </div>
      </span>
    </TransitionGroup>
  </p>
</template>

<style lang="scss" scoped>
.content-move,
.content-enter-active {
  transition: all 0.5s ease;
}

.content-leave-active {
  transition-duration: 0.25s;
}

.content-enter-from,
.content-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.content-leave-active,
.content-enter-active {
  position: absolute;
}
</style>
