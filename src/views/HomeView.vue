<script setup lang="ts">
import { useHomeSEO } from '@/composables/useSEO'
import { useHomeSchema } from '@/composables/useSchema'
import Homepage from '@/components/homeContent/homepage.vue'
import ProjectSection from '@/components/homeContent/projectsection.vue'
import Experience from '@/components/homeContent/experience.vue'
import HomeFooter from '@/components/homeContent/homefooter.vue'

// SEO and Schema
useHomeSEO()
useHomeSchema()
</script>

<template>
  <main class="w-full h-full bg-transparent">
    <Homepage />
    <ProjectSection />
    <Experience />
    <HomeFooter />
  </main>
</template>
