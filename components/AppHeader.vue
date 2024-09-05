<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useGeneralStore } from '~/store'
  import { storeToRefs } from 'pinia'

  const { t } = useI18n()
  const router = useRouter()
  const generalStore = useGeneralStore()
  const { drawerMenu, isMobileView } = storeToRefs(generalStore)

  const setDrawerMenu = generalStore.setDrawerMenu

  const changeRoute = (page = '') => {
    router.push(`/${page}`)
  }
</script>

<template>
  <v-toolbar
    :height="isMobileView ? 60 : 203"
    color="background"
    dark
    flat
  >
    <v-container class="align-self-start px-5 py-0" max-width="1440">
      <div class="d-flex flex-row flex-md-column-reverse justify-space-between w-100">
        <div class="d-flex">
          <div class="align-center d-flex justify-center mx-auto">
            <v-hover v-slot="{ isHovering, props }">
              <v-btn
                v-bind="props"
                :color="isHovering ? 'primary' : 'secondary'"
                :style="{ transition: 'all .3s' }"
                class="d-none d-md-block font-italic mb-2 mr-md-12 opacity-100 pl-3 pr-1 text-headline"
                variant="plain"
                @click="changeRoute('about')"
              >
                {{ t('general.menu.about') }}
              </v-btn>
            </v-hover>

            <v-app-bar-nav-icon
              v-if="isMobileView"
              class="mr-5"
              height="24px"
              width="24px"
              @click.stop="setDrawerMenu(!drawerMenu)"
            />

            <responsive-logo @handle-interaction="changeRoute">
              <template v-slot:before>
                <div v-if="!isMobileView" class="position-absolute right-0 top-0 w-66 mr-1 pt-1 pt-md-0">
                  <h6 class="font-italic text-headline text-no-wrap text-secondary text-uppercase w-100">
                    {{ t('general.headline.gameDeveloper') }}
                  </h6>
                </div>
              </template>
            </responsive-logo>

            <v-hover v-slot="{ isHovering, props }">
              <v-btn
                v-bind="props"
                :color="isHovering ? 'primary' : 'secondary'"
                :style="{ transition: 'all .3s' }"
                class="d-none d-md-block font-italic mb-2 ml-md-12 opacity-100 pl-3 pr-1 text-headline"
                variant="plain"
                @click="changeRoute('contact')"
              >
                {{ t('general.menu.contact') }}
              </v-btn>
            </v-hover>
          </div>
        </div>

        <div class="align-center d-flex justify-end ml-6 ml-md-0 my-0 my-md-3">
          <toggle-theme />
        </div>
      </div>
    </v-container>
  </v-toolbar>
</template>
