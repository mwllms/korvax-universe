<script setup lang="ts">
  const props = defineProps<{
    heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }>()
</script>

<template>
  <h1 v-if="heading === 'h1'" class="mb-8 text-2xl font-bold"><slot /></h1>
  <h2 v-if="heading === 'h2'" class="mb-6 text-xl font-bold"><slot /></h2>
  <h3 v-if="heading === 'h3'" class="mb-4 text-lg font-semibold"><slot /></h3>
  <h4 v-if="heading === 'h4'" class="mb-3 text-base font-semibold"><slot /></h4>
  <h5 v-if="heading === 'h5'" class="mb-2 text-sm font-semibold"><slot /></h5>
  <h6 v-if="heading === 'h6'" class="mb-2 text-xs font-semibold"><slot /></h6>
</template>
