
<script setup lang="ts">
  import moment from 'moment';
  import { useExperienceStore } from '~/store'

  const experienceStore = useExperienceStore()
  const { experienceList } = storeToRefs(experienceStore)

  onMounted(() => {
    experienceStore.setExperienceList([
      {
        company: 'Atlas Technologies',
        end: '',
        role: 'Frontend Engineer',
        start: '04-01-2024',
        text: 'Working as a Frontend engineer with JavaScript, TypeScript, Vue.js, Nuxt, Tailwind CSS, SASS, BEM methodology, SEO, Jest, Vue-Test-Utils.\nResponsible for developing and the creation of new features in the register part for the main website at Atlas Technologies in Vue.js, JavaScript, TypeScript, Nuxt, Tailwind CSS, Jest, API integration, SEO optimization and responsible design.'
      },
      {
        company: 'Teladoc Health',
        end: '11-01-2023',
        role: 'Frontend Developer',
        start: '10-01-2020',
        text: 'Worked as a Frontend developer with Javascript, Vue.js, Vuetify.js, Jest, Vue-Test-Utils.\nAlso helping the Backend team with PHP and Laravel.\nResponsible for developing and the creation of new features for the website of Teladoc Health in Vue.js, Vuetify.js, SASS, responsible design and tests. I was also responsible for the development and maintaining a Rest API with microservices in Laravel.'
      },
      {
        company: 'Tem Saúde',
        end: '10-01-2020',
        role: 'Full Stack Developer',
        start: '11-01-2019',
        text: 'Worked as a Full Stack developer with React, Next.js and Node.js.\nResponsible for developing the frontend in React with Next.js, SASS and responsible design. Creating and developing a Rest API with microservices in Node.js with GraphQ. And responsible for the integration.'
      },
      {
        company: 'Enext Consultoria',
        end: '11-01-2019',
        role: 'Full Stack Developer',
        start: '07-01-2019',
        text: 'Full Stack developer with Vue.js, Nuxt.js and LESS.\nResponsible for leading the Suvinil "Encontre seu Pintor" project, implementing features in Vue.js and integrating a rest API.\nAlso helped in the Project Imply from "Bondinho Pão de Açúcar" by creating and developing the pages and designs in Vue.js, Nuxt.js and SASS.'
      },
      {
        company: '2Mundos',
        end: '07-01-2019',
        role: 'Full Stack  Developer',
        start: '12-01-2018',
        text: 'Full Stack developer for 2Toring product from 2Mundos. As a Frontend I worked with JavaScript, Vue.js, Vuetify.js, SASS and responsible design. As a Backend, I was learning PHP, Laravel and Microservices.\nResponsible for guiding a team, creation and integration of the Rest API, implementing features and integrating all the new ideas for the 2BeLive learning platform.\nParticipation in implementations using Pusher and Opentok for the 2Toring’s Live Session.'
      },
      {
        company: '2Mundos',
        end: '12-01-2018',
        role: 'Frontend Developer',
        start: '10-01-2016',
        text: 'Frontend developer for TutorIQ product (owned by Age of Learning) with work trips in LA for TutorIQ assistance at Age of Learning HQ. Worked with Angular.js 1.6, SASS, responsible design and BEM methodology. I also worked on tasks and features involving Cordova, Ionic, Surfly and Opentok for the TutorIQ’s Live Session.'
      },
      {
        company: '2Mundos',
        end: '03-01-2017',
        role: 'Unity3D Developer',
        start: '03-01-2016',
        text: 'Worked as a Unity3D developer for the ETE FMC Residential Electrical Course project for mobile phones. Worked with Unity3D and C#'
      },
      {
        company: 'Game e Arte',
        end: '04-01-2016',
        role: 'Cultural Mediator',
        start: '03-01-2014',
        text: 'Mediation of educational activities in the field of games, conducting events with the purpose of education from the direction of games.'
      }
    ])
  })
</script>

<template>
  <section class="w-100">
    <v-container class="pa-0 px-md-10" max-width="1008">
      <v-row
        v-for="(experience, index) in experienceList"
        :key="index"
        class="ma-0"
      >
        <v-col
          class="mb-4 mb-md-0 pa-0 pr-md-6 text-md-right"
          color="secondary"
          cols="12"
          md="3"
        >
          <h3 class="font-weight-bold text-secondary">{{ experience.role }}</h3>
          <h4 class="font-weight-bold text-secondary">{{ experience.company }}</h4>
          <p class="text-caption text-secondary">{{ moment(experience.start).format('MMM YYYY') }} - {{ experience.end ? moment(experience.end).format('MMM YYYY') : 'Present' }}</p>
        </v-col>

        <v-col
          class="pa-0"
          color="secondary"
          cols="12"
          md="9"
        >
          <p class="text-headline-general text-secondary">{{ experience.text }}</p>
        </v-col>

        <v-divider v-if="index < experienceList.length-1" class="my-4 my-md-6" />
      </v-row>
    </v-container>
  </section>
</template>
