<template>
  <NuxtLayout
    :name="layout"
  >
    <v-app
      :theme="theme.global.name.value"
    >
      <AppHeader />

      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { useTheme } from 'vuetify';

  const layout = 'default';
  const theme = useTheme();
</script>