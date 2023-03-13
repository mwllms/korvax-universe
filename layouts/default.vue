<script setup lang="ts">
  //
</script>

<template>
  <div class="grid md:fixed md:inset-0 md:grid-cols-4 md:overflow-hidden">
    <LayoutNavigation />
    <header class="hidden h-14 w-full items-center bg-slate-200 md:col-span-3 md:flex md:px-8">Header navigatie</header>
    <main class="bg-slate-100 px-5 pt-20 pb-4 md:col-span-3 md:h-full md:overflow-y-auto md:py-12 md:px-8">
      <slot />
    </main>
  </div>
</template>
