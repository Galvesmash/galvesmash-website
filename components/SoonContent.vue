<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import { useGeneralStore } from '~/store'
  
  const { t } = useI18n()
  const generalStore = useGeneralStore()

  const { isMobileView } = storeToRefs(generalStore)
</script>

<template>
  <section class="d-flex justify-center">
    <div class="align-center d-flex flex-column position-relative py-1 py-md-0">
      <galvesmash-logo
        color="secondary"
        :height="isMobileView ? '52' : '101'"
        :width="isMobileView ? '140' : '368'"
      />

      <div>
        <v-hover v-slot="{ isHovering, props }">
          <v-btn
            v-bind="props"
            :color="isHovering ? 'primary' : 'secondary'"
            :style="{ transition: 'all .3s' }"
            density="compact"
            icon="mdi-linkedin"
            variant="plain"
          />
        </v-hover>

        <v-hover v-slot="{ isHovering, props }">
          <v-btn
            v-bind="props"
            :color="isHovering ? 'primary' : 'secondary'"
            :style="{ transition: 'all .3s' }"
            density="compact"
            icon="mdi-github"
            variant="plain"
          />
        </v-hover>

        <v-hover v-slot="{ isHovering, props }">
          <v-btn
            v-bind="props"
            :color="isHovering ? 'primary' : 'secondary'"
            :style="{ transition: 'all .3s' }"
            density="compact"
            icon="mdi-itch-io"
            variant="plain"
          />
        </v-hover>

        <v-hover v-slot="{ isHovering, props }">
          <v-btn
            v-bind="props"
            :color="isHovering ? 'primary' : 'secondary'"
            :style="{ transition: 'all .3s' }"
            density="compact"
            icon="mdi-behance"
            variant="plain"
          />
        </v-hover>

        <v-hover v-slot="{ isHovering, props }">
          <v-btn
            v-bind="props"
            :color="isHovering ? 'primary' : 'secondary'"
            :style="{ transition: 'all .3s' }"
            density="compact"
            icon="mdi-twitch"
            variant="plain"
          />
        </v-hover>

        <v-hover v-slot="{ isHovering, props }">
          <v-btn
            v-bind="props"
            :color="isHovering ? 'primary' : 'secondary'"
            :style="{ transition: 'all .3s' }"
            density="compact"
            icon="mdi-youtube"
            variant="plain"
          />
        </v-hover>

        <v-hover v-slot="{ isHovering, props }">
          <v-btn
            v-bind="props"
            :color="isHovering ? 'primary' : 'secondary'"
            :style="{ transition: 'all .3s' }"
            density="compact"
            icon="mdi-steam"
            variant="plain"
          />
        </v-hover>
      </div>
    </div>
  </section>
</template>
