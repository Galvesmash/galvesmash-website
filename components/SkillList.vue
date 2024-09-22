
<script setup lang="ts">
  import { useGeneralStore, useSkillStore } from '~/store'

  const generalStore = useGeneralStore()
  const skillStore = useSkillStore()
  const { isMobileView } = storeToRefs(generalStore)
  const { skillList } = storeToRefs(skillStore)

  onMounted(() => {
    skillStore.setSkillList([
      {
        icon: 'mdi:mdi-language-html5',
        title: 'HTML5'
      },
      {
        icon: 'mdi:mdi-language-javascript',
        title: 'JavaScript'
      },
      {
        icon: 'mdi:mdi-language-typescript',
        title: 'TypeScript'
      },
      {
        icon: 'mdi:mdi-vuejs',
        title: 'Vue.js'
      },
      {
        icon: 'mdi:mdi-react',
        title: 'React'
      },
      {
        icon: 'mdi:mdi-nuxt',
        title: 'Nuxt'
      },
      {
        icon: 'mdi:mdi-language-css3',
        title: 'CSS3'
      },
      {
        icon: 'mdi:mdi-sass',
        title: 'Sass'
      },
      {
        icon: 'fa:fa-brands fa-less',
        title: 'Less'
      },
      {
        icon: 'mdi:mdi-vuetify',
        title: 'Vuetify'
      },
      {
        icon: 'mdi:mdi-tailwind',
        title: 'Tailwind CSS'
      },
      {
        icon: 'mdi:mdi-responsive',
        title: 'Responsive Design'
      },
      {
        icon: 'fa:fa-brands fa-searchengin',
        title: 'SEO'
      },
      {
        icon: 'mdi:mdi-git',
        title: 'Git'
      },
      {
        icon: 'mdi:mdi-github',
        title: 'Github'
      },
      {
        icon: 'mdi:mdi-jira',
        title: 'Jira'
      },
      {
        icon: 'mdi:mdi-unity',
        title: 'Unity'
      },
      {
        icon: 'mdi:mdi-blender-software',
        title: 'Blender'
      }
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

        <h4 class="text-caption text-md-h6 text-secondary">{{ skill.title }}</h4>
      </v-col>
    </v-row>
  </section>
</template>
