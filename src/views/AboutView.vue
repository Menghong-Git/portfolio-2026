<script setup lang="ts">
import { useAboutSEO } from '@/composables/useSEO'
import { useAboutSchema } from '@/composables/useSchema'
import AboutSection from '@/components/aboutContent/aboutsection.vue'
import WorkExperience from '@/components/aboutContent/workexperienct.vue'
import MyDesign from '@/components/aboutContent/mydesign.vue'
import HomeFooter from '@/components/homeContent/homefooter.vue'

// SEO and Schema
useAboutSEO()
useAboutSchema()
</script>

<template>
  <main class="w-full h-full bg-transparent">
    <AboutSection />
    <WorkExperience />
    <MyDesign />
    <HomeFooter />
  </main>
</template>
