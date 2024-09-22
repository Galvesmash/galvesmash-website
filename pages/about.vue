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
      <v-col class="mb-8 mb-md-0 pa-0" sm="12" md="4" cols="12">
        <v-img
          :lazy-src="lazyImage"
          :src="coverImage"
          :style="{ filter: 'contrast(0.8)' }"
          alt="Foto de Gabriel Galves Taliatti"
          aspect-ratio="1"
          class="mx-auto mx-md-0"
          cover
          max-height="400px"
          max-width="400px"
          rounded="lg"
          width="100%"
        />
      </v-col>

      <v-col class="pa-0 pl-md-12" sm="12" md="8" cols="12">
        <h2 class="mb-6 text-h4 text-md-h3 text-secondary">Nice to meet you!</h2>

        <p class="font-italic text-headline-general text-secondary">
          Over 8 years developing web apps and sites with the best user experience for start-ups and companies. My professional background and dedication enables me to deliver high-quality solutions and contribute to innovative projects.
          <br /><br />
          More experienced as a frontend I'm skilled in JavaScript, TypeScript, Vue.js, Nuxt.js, Vuetify.js, Vuex, SEO, Pinia, React.js, Next.js, Redux, Tailwind CSS and CSS preprocessors like LESS, SASS, and SCSS. Additionally, I have proficiency with Git, Scrum, SEO and Agile methodologies.
          <br /><br />
          For testing I have experience with Vue-Test-Utils, Jest, Vitest, and Cypress.
          <br /><br />
          I also worked for about 4 years as a Fullstack Developer, my experiences are with Node.js, PHP, and Laravel.
          <br /><br />
          As a game developer I have about 4 years of experience in Unity3D using C# and 3 years with Blender3D.
          <br /><br />
          I hold a degree in Games and Software Development from Senac and Game Design from Fecap College.
        </p>
      </v-col>

      <v-col class="mt-12 mt-md-16 pa-0" cols="12">
        <h3 class="mb-6 text-center text-h4 text-md-h3 text-secondary">Skills</h3>

        <skills-list />
      </v-col>

      <v-col class="mt-12 mt-md-16 pa-0" cols="12">
          <h3>Experience</h3>
          Lista de experiencias
      </v-col>

      <v-col class="mt-12 mt-md-16 pa-0" cols="12">
          <h3>Contact</h3>
          Formulário de contato
      </v-col>
    </v-row>
  </section>
</template>
