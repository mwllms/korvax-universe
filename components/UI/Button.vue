<script setup lang="ts">
  import { Button } from '@/types/Form'
  const props = defineProps<{
    type: Button
    theme: 'primary' | 'secondary'
  }>()
</script>

<template>
  <button
    :type="type"
    class="rounded border border-primary bg-primary py-2 px-3 text-sm font-medium leading-6 text-primary-accent hover:border-primary-light hover:bg-primary-light"
  >
    <slot />
  </button>
</template>
