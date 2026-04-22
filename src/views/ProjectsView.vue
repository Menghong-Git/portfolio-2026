<script setup lang="ts">
import { useProjectsSEO } from '@/composables/useSEO'
import { useProjectsSchema } from '@/composables/useSchema'
import { projects } from '@/data/projects'
import ProjectGallery from '@/components/projectContent/project.vue'
import FAQSection from '@/components/projectContent/q&a.vue'
import HomeFooter from '@/components/homeContent/homefooter.vue'

// SEO and Schema
useProjectsSEO()
useProjectsSchema(projects)
</script>

<template>
  <main class="w-full h-full bg-transparent">
    <ProjectGallery />
    <FAQSection />
    <HomeFooter />
  </main>
</template>
