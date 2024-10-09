<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useGeneralStore } from '~/store'
  
  const { t } = useI18n()
  const router = useRouter()
  const generalStore = useGeneralStore()

  const { isMobileView } = storeToRefs(generalStore)

  const logoHeight = ref(isMobileView.value ? '52' : '101')
  const logoWidth = ref(isMobileView.value ? '140' : '368')

  const changeRoute = () => {
    router.push('/')
  }
</script>

<template>
  <section class="d-flex justify-center">
    <responsive-logo :height="logoHeight" :width="logoWidth" @handle-interaction="changeRoute">
      <template v-slot:before>
        <div v-if="!isMobileView" class="position-absolute right-0 top-0 w-66 mr-1 pt-1 pt-md-0">
          <h6 class="font-italic text-headline text-no-wrap text-secondary text-uppercase w-100">
            {{ t('general.headline.gameDeveloper') }}
          </h6>
        </div>
      </template>

      <template v-slot:after>
        <social-media-buttons class="mt-3 mb-2"/>

        <h1 class="mt-16 text-headline-title text-grey-darken-2">
          {{ t('general.soon').toUpperCase() }}
        </h1>
      </template>
    </responsive-logo>
  </section>
</template>
