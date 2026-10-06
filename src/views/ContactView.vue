<script setup lang="ts">
import { useContactSEO } from '@/composables/useSEO'
import { useContactSchema } from '@/composables/useSchema'
import contactHome from '@/components/contactContent/contactHome.vue'
import HomeFooter from '@/components/homeContent/homefooter.vue'

// SEO and Schema
useContactSEO()
useContactSchema()
</script>

<template>
  <main class="w-full h-full bg-transparent">
    <contactHome />
    <HomeFooter />
  </main>
</template>
