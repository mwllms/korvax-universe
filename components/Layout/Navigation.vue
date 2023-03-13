<script setup lang="ts">
  const localePath = useLocalePath()
  const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <nav class="fixed h-14 w-full bg-slate-300 px-6 md:relative md:row-span-2 md:h-auto md:px-8">
    <div>
      <NuxtLink :to="localePath('index')">{{ $t('navigation.dashboard') }}</NuxtLink>
      <NuxtLink :to="localePath('signin')">{{ $t('navigation.signIn') }}</NuxtLink>
    </div>
  </nav>
</template>
