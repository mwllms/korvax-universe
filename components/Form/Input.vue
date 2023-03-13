<script setup lang="ts">
  import { Input } from '@/types/Form'
  const props = defineProps<{
    modelValue: string | boolean | null
    type: Input
    id: string
    label?: string
  }>()
  const emit = defineEmits<{
    (e: 'update:modelValue'): void
  }>()
  const updateModelValue = (event: Event) => (event.target as HTMLInputElement).value
</script>

<template>
  <div class="space-y-1">
    <label v-if="label" :for="id" class="block text-sm font-semibold text-slate-700">{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      :id="id"
      @input="$emit('update:modelValue', updateModelValue($event))"
      class="w-full rounded border-slate-400 focus:border-primary focus:ring-primary"
    />
  </div>
</template>
