
<script setup lang="ts">
  import moment from 'moment';
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  const listLength = ref(8)
</script>

<template>
  <section class="w-100">
    <v-container class="pa-0 px-md-10" max-width="1008">
      <v-row
        v-for="index in listLength"
        :key="index"
        class="ma-0"
      >
        <v-col
          class="mb-4 mb-md-0 pa-0 pr-md-0 pr-lg-6 text-md-right"
          color="secondary"
          cols="12"
          md="3"
        >
          <h3 class="font-italic font-weight-bold text-h6 text-secondary">{{ t(`about.experience.list[${index-1}].role`) }}</h3>
          <h4 class="font-italic font-weight-bold text-secondary">{{ t(`about.experience.list[${index-1}].company`) }}</h4>
          <p class="font-italic text-caption text-secondary">
            {{
              moment(t(`about.experience.list[${index-1}].start`)).format('MMM YYYY')
            }} - {{
              t(`about.experience.list[${index-1}].end`) ? moment(t(`about.experience.list[${index-1}].end`)).format('MMM YYYY') : t('general.present')
            }}
          </p>
        </v-col>

        <v-col
          class="pa-0 pl-md-6 pl-lg-0"
          color="secondary"
          cols="12"
          md="9"
        >
          <p class="font-italic mt-0 mt-md-2 text-headline-general text-secondary">{{ t(`about.experience.list[${index-1}].text`) }}</p>
        </v-col>

        <v-divider v-if="index < listLength" class="my-4 my-md-6" />
      </v-row>
    </v-container>
  </section>
</template>
