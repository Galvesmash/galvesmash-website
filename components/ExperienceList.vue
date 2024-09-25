
<script setup lang="ts">
  import moment from 'moment';
  import { useExperienceStore } from '~/store'

  const experienceStore = useExperienceStore()
  const { experienceList } = storeToRefs(experienceStore)

  onMounted(() => {
    experienceStore.setExperienceList([
      {
        company: 'Atlas Technologies',
        end: 'now',
        role: 'Frontend Engineer',
        start: '04-01-2024',
        text: 'Working as a Frontend Engineer with high knowledge in JavaScript, TypeScript, Vue.js, Nuxt, Tailwind CSS, SEO, Jest, Vue-Test-Utils.\nResponsible for developing and the creation of new features in the register part for the main website at Atlas Technologies in Vue.js, JavaScript, TypeScript, Nuxt, Tailwind CSS, Jest, API integration and SEO optimization.'
      },
      {
        company: 'Teladoc Health',
        end: '11-01-2023',
        role: 'Frontend Developer',
        start: '10-01-2020',
        text: 'Worked as a Frontend Developer with high knowledge in Javascript, Vue.js, Vuetify.js, Jest, Vue-Test-Utils.\nAlso helping the Backend team with PHP and Laravel.\nResponsible for developing and the creation of new features for the website of Teladoc Health in VueJS with VuetifyJs and integrating both of them, I’m also responsible for the development and maintaining a Rest API with microservices in Laravel.'
      },
      {
        company: 'Tem Saúde',
        end: '10-01-2020',
        role: 'Full Stack Developer',
        start: '11-01-2019',
        text: 'Worked as a Full Stack Developer with High knowledge in ReactJS, NextJS and NodeJS.\nResponsible for creating and developing a Rest API with microservices in NodeJS, developing a responsible frontend in ReactJS with NextJS and integrating both of them.'
      },
      {
        company: 'Enext Consultoria',
        end: '11-01-2019',
        role: 'Full Stack Developer',
        start: '07-01-2019',
        text: 'Full Stack Developer with High knowledge in VueJS, NuxtJS and LESS.\nResponsible for leading the Suvinil "Encontre seu Pintor" project, implementing features in VueJs, design and integrating a rest API.\nAlso helped in the Project Imply from "Bondinho Pão de Açúcar" by creating and developing the pages and designs in VueJs, NuxtJs and SCSS.'
      },
      {
        company: '2Mundos',
        end: '07-01-2019',
        role: 'Full Stack  Developer',
        start: '12-01-2018',
        text: 'Full Stack Developer for 2Toring (2BeLive) product from 2Mundos. High knowledge in VueJS and LESS for Frontend and learning about PHP with Laravel for the Backend.\nResponsible for guiding a team, creation and integration of the Rest API, implementing features and integrating all the new ideas for the 2BeLive learning platform. Participation in implementations using Pusher and Opentok for the 2BeLive Live Session.'
      },
      {
        company: '2Mundos',
        end: '12-01-2018',
        role: 'Frontend Developer',
        start: '10-01-2016',
        text: 'I worked as a frontend developer for TutorIQ (Owned by Age of Learning) with work trips in LA for TutorIQ assistance at Age of Learning itself. High knowledge in AngularJS and SCSS. I also worked on integrating tasks and features involving Cordova, Ionic, Surfly and Opentok for the Livesession part.'
      },
      {
        company: '2Mundos',
        end: '03-01-2017',
        role: 'Unity3D Developer',
        start: '03-01-2016',
        text: 'Unity3D developer with high C# knowledge, worked for the ETE FMC Residential Electrical Course project for mobile phones.'
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
          class="mb-4 mb-md-0 pa-0 pr-md-3 pr-lg-6 text-md-right"
          color="secondary"
          cols="12"
          md="3"
        >
          <h3 class="text-secondary">{{ experience.role }}</h3>
          <h4 class="text-secondary">{{ experience.company }}</h4>
          <p class="text-secondary">{{ moment(experience.start).format('MMM YYYY') }} - {{ moment(experience.end).format('MMM YYYY') }}</p>
        </v-col>

        <v-col
          class="pa-0"
          color="secondary"
          cols="12"
          md="9"
        >
          <p class="text-secondary">{{ experience.text }}</p>
        </v-col>

        <v-divider v-if="index < experienceList.length-1" class="my-4 my-md-6" />
      </v-row>
    </v-container>
  </section>
</template>
