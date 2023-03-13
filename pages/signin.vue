<script setup lang="ts">
  const { t } = useI18n()
  definePageMeta({
    layout: 'guest',
  })
  useHead({
    title: t('auth.signInTitle'),
  })
  const credentials = useState<{
    email: string | null
    password: string | null
    rememberMe: boolean
  }>('crededials', () => ({
    email: null,
    password: null,
    rememberMe: false,
  }))
  const handleSubmit = () => {
    console.log(credentials.value)
  }
</script>

<template>
  <div class="w-full max-w-sm">
    <UITitle heading="h1">{{ $t('auth.signInTitle') }}</UITitle>
    <FormContainer @submit="handleSubmit">
      <FormInput type="email" id="email" v-model="credentials.email" :label="$t('form.email')" />
      <FormInput type="password" id="test" v-model="credentials.password" :label="$t('form.password')" />
      <div class="flex items-center justify-between">
        <FormCheckbox
          id="remember"
          :checked="credentials.rememberMe"
          @click="credentials.rememberMe = !credentials.rememberMe"
          :label="$t('form.rememberMe')"
        />
        <div>
          <a href="#" class="text-sm font-medium text-primary hover:text-primary-light">{{
            $t('auth.forgotPassword')
          }}</a>
        </div>
      </div>
      <UIButton theme="primary" type="submit" class="w-full">{{ $t('form.signIn') }}</UIButton>
    </FormContainer>
  </div>
</template>
