<script setup lang="ts">
  import { useThemeStore } from '~/store'
    
  definePageMeta({
    layout: 'default'
  })
  
  const themeStore = useThemeStore()

  const coverImage = computed(() => '_nuxt/assets/images/me.png')
  const lazyImage = computed(() => '_nuxt/assets/images/lazy-me.png')

  themeStore.setCurrentLayout('default')
</script>

<template>
  <section class="py-8 py-md-12">
    <v-row class="ma-0">
      <v-col class="d-flex flex-column pb-8 pt-0 px-0 pb-md-0" sm="12" md="4" cols="12">
        <v-img
          :lazy-src="lazyImage"
          :src="coverImage"
          :style="{ filter: 'contrast(0.8)' }"
          aspect-ratio="1"
          class="mb-6 mb-md-8 mx-auto mx-md-0"
          cover
          max-width="400px"
          width="100%"
        />

        <v-container
          class="mx-auto mx-md-0 my-0 pa-0 text-center text-md-start"
          max-width="400px"
          width="100%"
        >
          <p class="font-italic text-headline-general">
            Frontend Developer with 8+ years of experience. Skilled in JavaScript, Vue.js, React.js, Vuetify.js, Nuxt.js, Next.js, and CSS preprocessors like LESS, SASS, and SCSS. Additionally, I have proficiency with Git, Scrum, SEO and Agile methodologies. For frontend testing, I have experience with Vue-Test-Utils, Jest, and Cypress.
            <br /><br />
            As a Fullstack Developer, I possess 4 years of experience in Node.js, PHP, and Laravel. I also have 3 years of experience in Unity3D using C# and Blender3D.
            <br /><br />
            I hold a degree in Games Development from Senac and Games Design from Fecap College. My professional background and dedication enables me to deliver high-quality solutions and contribute to innovative projects.
          </p>
        </v-container>
      </v-col>

      <v-col class="d-flex flex-column pa-0 pl-md-12" sm="12" md="8" cols="12">
        <v-container
          class="mx-auto mx-md-0 my-0 pa-0 text-center text-md-start"
        >
          TESTE CV
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>
