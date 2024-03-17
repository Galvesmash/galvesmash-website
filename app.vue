<template>
  <!-- <NuxtLayout :name="layout"> -->
    <NuxtLayout>
    <v-app
      theme="dark"
    >
      <AppHeader />
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
  // You might choose this based on an API call or logged-in status
  const layout = "default";
</script>