<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useGeneralStore } from '~/store'
  import { storeToRefs } from 'pinia'

  const { t } = useI18n()
  const router = useRouter()
  const generalStore = useGeneralStore()
  const { drawerMenu, isMobileView } = storeToRefs(generalStore)

  const setDrawerMenu = generalStore.setDrawerMenu

  const BOTTOM_THRESHOLD = 900
  const TOP_THRESHOLD = 32
  const DESKTOP_HEADER_HEIGHT = 203
  const DESKTOP_LOGO_HEIGHT = '101'
  const DESKTOP_LOGO_WIDTH = '368'
  const MOBILE_HEADER_HEIGHT = 60
  const MOBILE_LOGO_HEIGHT = '52'
  const MOBILE_LOGO_WIDTH = '140'

  const desktopHeaderHeight = ref(DESKTOP_HEADER_HEIGHT)
  const desktopLogoHeight = ref(DESKTOP_LOGO_HEIGHT)
  const desktopLogoWidth = ref(DESKTOP_LOGO_WIDTH)
  const isUserScrolling = ref(false)

  const changeRoute = (page = '') => {
    router.push(`/${page}`)
  }

  const scrollToBottom = () => {
    const body = document.body
    const html = document.documentElement

    var documentHeight = Math.max(
      body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight
    )

    window.scrollTo({ top: documentHeight - BOTTOM_THRESHOLD, behavior: "smooth" })
  }

  const handleScroll = () => {
    isUserScrolling.value = (window.scrollY > TOP_THRESHOLD)
    
    if (isMobileView.value) return

    desktopHeaderHeight.value = isUserScrolling.value ? MOBILE_HEADER_HEIGHT : DESKTOP_HEADER_HEIGHT
    desktopLogoHeight.value = isUserScrolling.value ? MOBILE_LOGO_HEIGHT : DESKTOP_LOGO_HEIGHT
    desktopLogoWidth.value = isUserScrolling.value ? MOBILE_LOGO_WIDTH : DESKTOP_LOGO_WIDTH
  }

  onMounted(() => {
    isUserScrolling.value = (window.scrollY > TOP_THRESHOLD)

    if (isUserScrolling.value) {
      handleScroll()
    }

    window.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
  <v-toolbar
    :class="[{ 'border-opacity-0': !isUserScrolling }, isMobileView || isUserScrolling ? 'bg-background' : 'bg-transparent' ]"
    :height="isMobileView ? MOBILE_HEADER_HEIGHT : desktopHeaderHeight"
    :style="{ transition: 'all .3s', zIndex: '10' }"
    class="border-b position-fixed"
    dark
    flat
  >
    <v-container class="align-self-start h-100 px-5 py-0" max-width="1440" >
      <div
        :class="{ 'flex-md-column': !isUserScrolling }"
        class="d-flex flex-row h-100 justify-space-between position-relative w-100"
      >
        <div
          :class="{ 'pt-md-15': !isUserScrolling }"
          class="d-flex pt-0"
        >
          <div class="align-center d-flex justify-center mx-auto">
            <v-app-bar-nav-icon
              v-if="isMobileView"
              :aria-label="t('general.ariaLabel.sideMenu')"
              class="mr-5"
              height="24px"
              width="24px"
              icon="fa-solid fa-bars"
              @click.stop="setDrawerMenu(!drawerMenu)"
            />

            <v-hover v-slot="{ isHovering, props }">
              <v-btn
                v-bind="props"
                :class="[ isUserScrolling ? 'ml-md-12 order-2' : 'mb-2 mr-md-12' ]"
                :color="isHovering && !isMobileView ? 'primary' : 'secondary'"
                class="d-none d-md-block font-italic opacity-100 pl-3 pr-1 text-headline"
                variant="plain"
                @click="changeRoute('about')"
              >
                {{ t('general.menu.about') }}
              </v-btn>
            </v-hover>

            <responsive-logo
              :class="{ 'order-1': isUserScrolling }"
              :height="isMobileView ? MOBILE_LOGO_HEIGHT : desktopLogoHeight"
              :width="isMobileView ? MOBILE_LOGO_WIDTH : desktopLogoWidth"
              @handle-interaction="changeRoute"
            >
              <template v-slot:before>
                <div
                  v-if="!isMobileView"
                  :class="{ 'opacity-0': isUserScrolling }"
                  class="position-absolute right-0 top-0 w-66 mr-1 pt-1 pt-md-0"
                >
                  <h6 class="d-flex font-italic justify-space-between no-letter-spacing no-user-select text-headline text-no-wrap text-secondary text-uppercase w-100">
                    <span v-for="(letter, index) in t('general.headline.frontendDeveloper')" :key="index">
                      {{ letter }}
                    </span>
                  </h6>
                </div>
              </template>
            </responsive-logo>

            <v-hover v-slot="{ isHovering, props }">
              <v-btn
                v-bind="props"
                :class="[ isUserScrolling ? 'order-3' : 'mb-2' ]"
                :color="isHovering && !isMobileView ? 'primary' : 'secondary'"
                class="d-none d-md-block font-italic ml-md-12 opacity-100 pl-3 pr-1 text-headline"
                variant="plain"
                @click="scrollToBottom"
              >
                {{ t('general.menu.contact') }}
              </v-btn>
            </v-hover>
          </div>
        </div>

        <v-container
          :class="{ 'position-absolute right-0': !isMobileView }"
          class="align-center d-flex h-100 justify-end mr-0 my-0 pa-0"
          max-height="60"
          max-width="100"
        >
          <lang-selector-button class="mr-5"/>

          <toggle-theme-button />
        </v-container>
      </div>
    </v-container>
  </v-toolbar>
</template>
