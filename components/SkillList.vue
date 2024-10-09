
<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useGeneralStore, useSkillStore } from '~/store'

  const { t } = useI18n()
  const generalStore = useGeneralStore()
  const skillStore = useSkillStore()
  const { isMobileView } = storeToRefs(generalStore)
  const { skillList } = storeToRefs(skillStore)

  onMounted(() => {
    skillStore.setSkillList([
      { icon: 'mdi:mdi-language-html5', translation: 'html' },
      { icon: 'mdi:mdi-language-javascript', translation: 'javascript' },
      { icon: 'mdi:mdi-language-typescript', translation: 'typescript' },
      { icon: 'mdi:mdi-vuejs', translation: 'vue' },
      { icon: 'mdi:mdi-react', translation: 'react' },
      { icon: 'mdi:mdi-nuxt', translation: 'nuxt' },
      { icon: 'mdi:mdi-language-css3', translation: 'css' },
      { icon: 'mdi:mdi-sass', translation: 'sass' },
      { icon: 'fa:fa-brands fa-less', translation: 'less' },
      { icon: 'mdi:mdi-vuetify', translation: 'vuetify' },
      { icon: 'mdi:mdi-tailwind', translation: 'tailwind' },
      { icon: 'mdi:mdi-responsive', translation: 'responsive' },
      { icon: 'fa:fa-brands fa-searchengin', translation: 'seo' },
      { icon: 'mdi:mdi-git', translation: 'git' },
      { icon: 'mdi:mdi-github', translation: 'github' },
      { icon: 'mdi:mdi-jira', translation: 'jira' },
      { icon: 'mdi:mdi-unity', translation: 'unity' },
      { icon: 'mdi:mdi-blender-software', translation: 'blender' }
    ])
  })
</script>

<template>
  <section class="w-100">
    <v-row class="ma-0">
      <v-col
        v-for="(skill, index) in skillList"
        :key="index"
        class="mb-2 mb-md-6 pa-0 text-center"
        cols="3"
        md="2"
      >
        <v-icon color="secondary" :icon="skill.icon" :size="isMobileView ? 32 : 80" />

        <h4 class="font-italic text-caption text-md-h6 text-secondary">{{ t(`about.skills.list.${skill.translation}`) }}</h4>
      </v-col>
    </v-row>
  </section>
</template>
