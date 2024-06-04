<script setup lang="ts">
import ChannelControl from "@/components/ChannelControl.vue";
import { Route } from "@/router/routes.enum";
</script>

<template>
  <ChannelControl />
  <nav>
    <RouterLink :to="Route.Home">Home</RouterLink>
  </nav>
  <RouterView />
</template>
