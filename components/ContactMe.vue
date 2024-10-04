
<script setup lang="ts">
  import emailjs from 'emailjs-com'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  const config = useRuntimeConfig()

  const email = ref('')
  const loading = ref(false)
  const message = ref('')
  const name = ref('')

  const emailRule = computed(() => (value: string) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || t('contact.error.email')
  })
  const requiredRule = computed(() => (value: string) => !!value || t('contact.error.required'))
  const maxCharactersRule = computed(() => (value: string) => value.length <= 3200 || t('contact.error.max'))

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
    <v-row class="ma-0 pa-0 px-lg-16 px-md-4">
      <v-col
        class="pa-0 pr-lg-0 pr-md-2 text-md-center"
        color="secondary"
        cols="12"
        md="5"
      >
        <h3 class="mb-6 font-italic font-weight-bold text-h4 text-primary text-uppercase">{{ t('contact.title') }}</h3>

        <p class="font-italic text-headline-general text-secondary" :style="{ whiteSpace: 'break-spaces' }">
          {{ t('contact.text') }}
        </p>

        <p class="font-italic mt-6 mt-md-14 text-headline-general text-secondary">
          galvesmash.dev@gmail.com
        </p>

        <p class="font-italic mt-1 text-headline-general text-secondary">
          {{ t('contact.phone') }}
        </p>

        <p class="font-italic mt-1 text-headline-general text-secondary">
          {{ t('contact.location') }}
        </p>

        <v-container class="mt-6 mt-md-10 pa-0 px-md-16">
          <v-btn class="font-italic font-weight-bold w-100" color="primary" variant="outlined" max-width="360px">
            {{ t('contact.checkMyCv') }}
          </v-btn>
        </v-container>
      </v-col>

      <v-col
        class="mt-7 mt-md-0 pa-0 pl-lg-0 pl-md-2 pt-md-2 text-center"
        color="secondary"
        cols="12"
        md="7"
      >
        <v-form class="d-flex flex-column justify-space-between	h-100" @submit.prevent="sendEmail">
          <v-container class="ma-0 pa-0" max-width="650">
            <v-text-field
              v-model="name"
              :label="t('contact.form.name')"
              :rules="[requiredRule]"
              class="mb-1"
              color="primary"
              density="compact"
              height="40px"
              name="name"
              variant="outlined"
            />

            <v-text-field
              v-model="email"
              :label="t('contact.form.email')"
              :rules="[requiredRule, emailRule]"
              class="mb-1"
              color="primary"
              density="compact"
              height="40px"
              name="email"
              variant="outlined"
            />

            <v-textarea
              v-model="message"
              :label="t('contact.form.message')"
              :rules="[requiredRule, maxCharactersRule]"
              class="mb-1"
              color="primary"
              density="compact"
              name="message"
              variant="outlined"
            />
          </v-container>

          <v-container class="ma-0 pa-0" max-width="650">
            <v-btn
              :loading="loading"
              class="font-italic font-weight-bold"
              color="primary"
              type="submit"
              variant="outlined"
            >
              {{ t('contact.form.send') }}
            </v-btn>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </section>
</template>
