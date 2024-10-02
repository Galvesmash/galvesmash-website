
<script setup lang="ts">
import emailjs from 'emailjs-com'

// interface EmailjsFormElements extends HTMLFormElement {
//   email: string
//   message: string
//   name: string
// }
interface EventResults {
  valid: boolean
}

const config = useRuntimeConfig()

const email = ref('')
const loading = ref(false)
const message = ref('')
const name = ref('')

const emailRule = computed(() => (value: string) => {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(value) || 'Invalid e-mail.'
})
const requiredRule = computed(() => (value: string) => !!value || 'Required.')
const maxCharactersRule = computed(() => (value: string) => value.length <= 3200 || 'Max 3200 characters')

const sendEmail = async (e: SubmitEvent) => {
  loading.value = true

  const eventResults: any = await e

  if (!eventResults.valid) return loading.value = false

  const formPayload = e.target as HTMLFormElement

  try {
    emailjs.sendForm(
      config.public.emailjs.serviceKey,
      config.public.emailjs.templateKey,
      formPayload
    )
  } catch(error) {
    console.error({error})
  }

  loading.value = false
}

onMounted(() => {
  emailjs.init(config.public.emailjs.publicKey)
})
</script>

<template>
  <section class="w-100">
    <v-row class="ma-0">
      <v-col
        class="pa-0 pr-md-4 text-md-center"
        color="secondary"
        cols="12"
        lg="4"
        md="5"
      >
        <h3 class="mb-6 font-italic font-weight-bold text-h4 text-primary">{{ "Contact Me".toUpperCase() }}</h3>

        <p class="font-italic text-headline-general text-secondary">
          Interested in working with me, hiring<br />my services, or simply connecting?
        </p>

        <p class="font-italic text-headline-general text-secondary">
          Feel free to send me a message,<br />I’d love to hear from you!
        </p>

        <p class="font-italic mt-6 mt-md-14 text-headline-general text-secondary">
          galvesmash.dev@gmail.com<br />
        </p>

        <p class="font-italic mt-1 text-headline-general text-secondary">
          +55 11 96639-9361<br />
        </p>

        <p class="font-italic mt-1 text-headline-general text-secondary">
          Sao Paulo, Brazil
        </p>

        <v-container class="mt-6 mt-md-10 pa-0 px-md-16">
          <v-btn class="font-italic w-100" color="primary" variant="outlined" max-width="360px">
            Check my CV
          </v-btn>
        </v-container>
      </v-col>

      <v-col
        class="mt-7 mt-md-0 pa-0 pl-md-0 pl-lg-6 text-center"
        color="secondary"
        cols="12"
        lg="8"
        md="7"
      >
        <v-form @submit.prevent="sendEmail">
          <v-text-field
            v-model="name"
            :rules="[requiredRule]"
            class="mb-1"
            color="primary"
            density="compact"
            height="40px"
            label="name"
            name="name"
            variant="outlined"
          />

          <v-text-field
            v-model="email"
            :rules="[emailRule, requiredRule]"
            class="mb-1"
            color="primary"
            density="compact"
            height="40px"
            label="email"
            name="email"
            variant="outlined"
          />

          <v-textarea
            v-model="message"
            :rules="[maxCharactersRule, requiredRule]"
            class="mb-1"
            color="primary"
            density="compact"
            label="message"
            name="message"
            variant="outlined"
          />

          <v-btn
            :loading="loading"
            class="font-italic"
            color="primary"
            type="submit"
            variant="outlined"
          >
            Send
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </section>
</template>
