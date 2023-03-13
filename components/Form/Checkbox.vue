<script setup lang="ts">
  const props = defineProps<{
    checked: boolean
    id: string
    label?: string
  }>()
  const emit = defineEmits<{
    (e: 'click'): void
  }>()
  const updateModelValue = (event: Event) => (event.target as HTMLInputElement).value
</script>

<template>
  <div class="inline-flex items-center space-x-2">
    <input
      type="checkbox"
      :checked="checked"
      :id="id"
      @input="$emit('click')"
      class="rounded text-primary focus:ring-primary"
    />
    <label v-if="label" :for="id" class="text-sm">{{ label }}</label>
  </div>
</template>
