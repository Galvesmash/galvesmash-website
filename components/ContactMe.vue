
<script setup lang="ts">
  import emailjs from 'emailjs-com'
  import { useI18n } from 'vue-i18n'
  import { defineAsyncComponent } from 'vue'
  import { useGeneralStore } from '~/store'
  const DialogModal = defineAsyncComponent(() => import('./DialogModal'))

  const { t } = useI18n()
  const config = useRuntimeConfig()
  const generalStore = useGeneralStore()
  const { isMobileView } = storeToRefs(generalStore)

  const dialog = ref(false)
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
      
      dialog.value = true
    } catch(error) {
      console.error({error})
    }

    loading.value = false
  }

  const resetForm = () => {
    email.value = ''
    message.value = ''
    name.value = ''
  }

  const closeDialog = () => {
    resetForm()
    dialog.value = false
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
        <h3 class="mb-6 font-italic font-weight-bold no-user-select text-h4 text-primary text-uppercase">{{ t('contact.title') }}</h3>

        <p class="font-italic mb-6 mb-md-15 no-user-select text-headline-general text-secondary" :style="{ whiteSpace: 'break-spaces' }">
          {{ t('contact.text') }}
        </p>

        <v-hover v-slot="{ isHovering, props }">
          <a
            v-bind="props"
            :class="[ isHovering && !isMobileView ? 'text-primary' : 'text-secondary']"
            :href="`mailto:${config.public.email}?subject=Hello%20from%20your%20website`"
            :style="{ transition: 'all .3s' }"
            class="d-block font-italic opacity-100 px-0 py-1 no-user-select text-headline-general text-none"
          >
            {{ config.public.email }}
          </a>
        </v-hover>

        <p class="font-italic no-user-select pt-1 px-0 text-headline-general text-secondary">
          {{ t('contact.location') }}
        </p>

        <v-container
          :max-width="isMobileView ? '100%' : '360px'"
          class="mt-6 mt-md-10 pa-0 px-md-16"
        >
          <v-btn
            :href="config.public.cvLink"
            class="font-italic font-weight-bold w-100"
            color="primary"
            target="_blank"
            variant="outlined"
          >
            {{ t('contact.checkMyCv') }}

            <v-icon class="ml-2" color="primary" icon="fa-solid fa-up-right-from-square" size="11" />
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
          <v-container
            :max-width="isMobileView ? '100%' : '650px'"
            class="ma-0 pa-0"
          >
            <v-text-field
              v-model="name"
              :label="t('contact.form.name')"
              :rules="[requiredRule]"
              base-color="secondary"
              class="mb-1 no-user-select"
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
              base-color="secondary"
              class="mb-1 no-user-select"
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
              base-color="secondary"
              class="mb-1 no-user-select"
              color="primary"
              density="compact"
              name="message"
              variant="outlined"
            />

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

        <DialogModal
          :dialog="dialog"
          :text="t('contact.dialog.text')"
          :title="t('contact.dialog.title')"
          @handle-close="closeDialog"
        />
      </v-col>
    </v-row>
  </section>
</template>
