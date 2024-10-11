<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>

<template>
  <section class="w-100">
    <p class="font-italic no-user-select text-headline-general text-secondary" :style="{ whiteSpace: 'break-spaces' }">
      {{ t('about.aboutMe.text') }}
    </p>
  </section>
</template>
