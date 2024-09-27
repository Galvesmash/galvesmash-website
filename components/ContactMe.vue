
<script setup lang="ts">
</script>

<template>
  <section class="w-100">
    <v-row class="ma-0">
      <v-col
        class="mb-6 mb-md-0 pa-0 pr-md-4 text-md-center"
        color="secondary"
        cols="12"
        lg="4"
        md="5"
      >
        <h3 class="mb-6 text-h4 text-primary">{{ "Contact Me".toUpperCase() }}</h3>

        <p class="font-italic text-headline-general text-secondary">
          Interested in working with me, hiring<br />my services, or simply connecting?
        </p>

        <p class="font-italic text-headline-general text-secondary">
          Feel free to send me a message,<br />I’d love to hear from you!
        </p>

        <p class="font-italic mt-6 mt-md-10 text-headline-general text-secondary">
          galvesmash.dev@gmail.com<br />
        </p>

        <p class="font-italic mt-1 text-headline-general text-secondary">
          +55 11 96639-9361<br />
        </p>

        <p class="font-italic mt-1 text-headline-general text-secondary">
          Sao Paulo, Brazil
        </p>

        <v-container class="pa-0 px-md-16">
          <v-btn class="font-italic mt-6 w-100" color="primary" variant="outlined" max-width="360px">
            Check my CV
          </v-btn>
        </v-container>
      </v-col>

      <v-col
        class="mt-6 mt-md-0 pa-0 pl-md-0 pl-lg-6 text-center"
        color="secondary"
        cols="12"
        lg="8"
        md="7"
      >
        <v-form fast-fail @submit.prevent>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            color="primary"
            density="compact"
            height="40px"
            label="name"
            variant="outlined"
          />

          <v-text-field
            v-model="mail"
            :rules="mailRules"
            color="primary"
            density="compact"
            height="40px"
            label="mail"
            variant="outlined"
          />

          <v-textarea
            v-model="message"
            :rules="messageRules"
            color="primary"
            density="compact"
            label="Message"
            variant="outlined"
          />

          <v-btn class="font-italic" color="primary" type="submit" variant="outlined">
            Send
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </section>
</template>
