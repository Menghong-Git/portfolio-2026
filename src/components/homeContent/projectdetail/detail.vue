<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '@/data/projects'

const route = useRoute()
const router = useRouter()

const project = computed(() => {
  const id = parseInt(route.params.id as string)
  return projects.find((p) => p.id === id)
})

const relatedProjects = computed(() => {
  if (!project.value) return []
  return projects.filter((p) => p.id !== project.value?.id).slice(0, 3)
})

const nextProject = computed(() => {
  if (!project.value) return null
  const currentIndex = projects.findIndex((p) => p.id === project.value?.id)
  return projects[(currentIndex + 1) % projects.length]
})

const prevProject = computed(() => {
  if (!project.value) return null
  const currentIndex = projects.findIndex((p) => p.id === project.value?.id)
  return projects[(currentIndex - 1 + projects.length) % projects.length]
})

const goToProject = (id: number) => {
  router.push(`/project/${id}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div
    v-if="project"
    class="min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-500 pb-20"
  >
    <!-- Hero Section -->
    <div class="relative w-full h-[50vh] lg:h-[65vh] overflow-hidden">
      <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/40"></div>

      <div
        class="absolute bottom-0 left-0 w-full p-6 sm:p-12 lg:p-24 bg-gradient-to-t from-black/80 to-transparent"
      >
        <button
          @click="router.push('/')"
          class="absolute top-[-10vh] flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#007BFE] dark:text-[#1dbf73] hover:translate-x-[-8px] transition-all mb-12 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span>Back to Home</span>
        </button>
        <div class="max-w-[1500px] mx-auto">
          <div class="flex gap-2 mb-4">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-4 py-1.5 bg-[#007BFE] dark:bg-[#1dbf73] text-white dark:text-black text-xs font-black rounded-full uppercase tracking-widest shadow-lg"
            >
              {{ tag }}
            </span>
          </div>
          <h1
            class="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-none"
          >
            {{ project.title }}
          </h1>
          <div class="flex items-center gap-6 text-white/70 text-sm">
            <span class="flex items-center gap-2"
              ><span class="w-2 h-2 bg-[#007BFE] dark:bg-[#1dbf73] rounded-full"></span>
              {{ project.author }}</span
            >
            <span class="flex items-center gap-2"
              ><span class="w-2 h-2 bg-[#007BFE] dark:bg-[#1dbf73] rounded-full"></span>
              {{ project.date }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-24 mt-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <!-- Article Content -->
        <div class="lg:col-span-8">
          <article class="prose prose-lg dark:prose-invert max-w-none">
            <p class="text-xl font-medium leading-relaxed mb-10 text-gray-700 dark:text-gray-300">
              {{ project.description }}
            </p>

            <div class="h-1 w-20 bg-[#007BFE] dark:bg-[#1dbf73] mb-10"></div>

            <p class="text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              {{ project.longDescription }}
            </p>

            <div
              v-if="project.features"
              class="bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-gray-100 dark:border-white/10 mb-12"
            >
              <h3 class="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                <span class="w-2 h-8 bg-[#007BFE] dark:bg-[#1dbf73] rounded-full"></span>
                Key Features
              </h3>
              <ul class="space-y-4">
                <li
                  v-for="feature in project.features"
                  :key="feature"
                  class="flex items-start gap-4 text-gray-600 dark:text-gray-400"
                >
                  <svg
                    class="mt-1 flex-shrink-0 text-[#007BFE] dark:text-[#1dbf73]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Blockquote Simulation -->
            <blockquote
              class="border-l-4 border-[#007BFE] dark:border-[#1dbf73] pl-8 py-4 italic text-2xl font-serif text-gray-800 dark:text-gray-200 mb-12"
            >
              "Innovating at the intersection of design and technology is where the most meaningful
              solutions are born."
            </blockquote>

            <p class="text-gray-600 dark:text-gray-400 mb-12">
              Every project presents a unique set of challenges and opportunities. For
              {{ project.title }}, the focus was not just on building a tool, but on creating an
              experience that resonates with the end-user while maintaining high technical
              standards.
            </p>

            <!-- Navigation Buttons -->
            <div
              class="flex justify-between items-center pt-12 border-t border-gray-100 dark:border-white/10"
            >
              <button
                @click="goToProject(prevProject.id)"
                v-if="prevProject"
                class="group flex items-center gap-4 text-sm font-black uppercase tracking-widest hover:text-[#007BFE] dark:hover:text-[#1dbf73] transition-all"
              >
                <div
                  class="w-12 h-12 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center group-hover:border-[#007BFE] dark:group-hover:border-[#1dbf73] transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </div>
                <span>Prev Project</span>
              </button>
              <button
                @click="goToProject(nextProject.id)"
                v-if="nextProject"
                class="group flex items-center gap-4 text-sm font-black uppercase tracking-widest hover:text-[#007BFE] dark:hover:text-[#1dbf73] transition-all text-right"
              >
                <span>Next Project</span>
                <div
                  class="w-12 h-12 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center group-hover:border-[#007BFE] dark:group-hover:border-[#1dbf73] transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </button>
            </div>
          </article>
        </div>

        <!-- Sidebar (Sticky Section) -->
        <div class="lg:col-span-4 space-y-12 lg:sticky lg:top-24 h-fit">
          <!-- About Profile Sidebar -->
          <div
            class="border border-gray-100 dark:border-white/10 p-8 rounded-2xl bg-gray-50 dark:bg-white/5 flex flex-col items-center text-center"
          >
            <div
              class="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-[#007BFE] dark:border-[#1dbf73] shadow-sm"
            >
              <img src="/images/menghong.png" alt="Profile" class="w-full  object-cover" />
            </div>
            <h3 class="text-xl font-black mb-2">Pen Menghong</h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
              I am a Fullstack developer with a passion for creative web design and efficient code.
            </p>
            <div class="flex justify-center gap-4">
              <a
                href="#"
                class="text-gray-400 hover:text-[#007BFE] dark:hover:text-[#1dbf73] transition-all"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                  /></svg
              ></a>
              <a
                href="#"
                class="text-gray-400 hover:text-[#007BFE] dark:hover:text-[#1dbf73] transition-all"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" /></svg
              ></a>
              <a
                href="#"
                class="text-gray-400 hover:text-[#007BFE] dark:hover:text-[#1dbf73] transition-all"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                  />
                  <path d="M9 18c-4.51 2-5-2-7-2" /></svg
              ></a>
            </div>
          </div>

          <!-- Featured List Mini -->
          <div
            class="border border-gray-100 dark:border-white/10 p-8 rounded-2xl bg-gray-50 dark:bg-white/5"
          >
            <h3
              class="text-sm font-black uppercase tracking-widest text-[#007BFE] dark:text-[#1dbf73] mb-8"
            >
              Related Experience
            </h3>
            <div class="space-y-8">
              <div
                v-for="rel in relatedProjects"
                :key="'side-rel-' + rel.id"
                @click="goToProject(rel.id)"
                class="flex gap-4 group cursor-pointer"
              >
                <div class="w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                  <img
                    :src="rel.image"
                    alt="Thumb"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div class="flex flex-col justify-center">
                  <h4
                    class="text-xs font-black uppercase group-hover:text-[#007BFE] dark:group-hover:text-[#1dbf73] transition-colors leading-tight"
                  >
                    {{ rel.title }}
                  </h4>
                  <span class="text-[10px] text-gray-500 font-bold mt-1">{{ rel.date }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Newsletter Mini -->
          
        </div>
      </div>

      <!-- Bottom Related Section -->
      <div class="mt-32 pt-20 border-t border-gray-100 dark:border-white/10">
        <h2 class="text-4xl font-black uppercase tracking-tighter mb-12 text-center">
          Other Notable Projects
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="rel in relatedProjects"
            :key="'footer-' + rel.id"
            @click="goToProject(rel.id)"
            class="group cursor-pointer"
          >
            <div class="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
              <img
                :src="rel.image"
                :alt="rel.title"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"
              ></div>
              <div class="absolute top-4 left-4">
                <span
                  class="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-black rounded-full uppercase"
                  >{{ rel.tags[0] }}</span
                >
              </div>
            </div>
            <h3
              class="text-lg font-black uppercase group-hover:text-[#007BFE] dark:group-hover:text-[#1dbf73] transition-colors"
            >
              {{ rel.title }}
            </h3>
            <p class="text-gray-500 text-xs mt-2 font-bold">{{ rel.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="flex items-center justify-center min-h-screen text-2xl font-black uppercase italic animate-pulse"
  >
    Loading Project...
  </div>
</template>

<style scoped>
/* Smooth scrolling for internal navigation */
html {
  scroll-behavior: smooth;
}

/* Typography refinements */
h1,
h2,
h3,
h4 {
  font-family: 'Inter', 'Outfit', sans-serif;
  letter-spacing: -0.04em;
}

article p {
  margin-bottom: 2rem;
}
</style>
