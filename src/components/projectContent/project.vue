<template>
  <section class="min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-white py-32 px-6 sm:px-12 lg:px-24 font-['Inter',_'Outfit',_sans-serif] transition-colors duration-500">
    <div class="max-w-[1500px] mx-auto">
      
      <!-- Page Header -->
      <header class="mb-24 text-center">
        <h1 class="text-[80px] md:text-[150px] lg:text-[220px] font-black uppercase tracking-tighter leading-none select-none animate-in fade-in slide-in-from-bottom-8 duration-1000 text-transparent bg-clip-text bg-gradient-to-r from-[#007BFE] to-[#007BFE]/50 dark:from-[#1dbf73] dark:to-white/40">
          PROJECTS
        </h1>
      </header>

      <!-- Category Filter -->
      <nav class="flex flex-wrap justify-center gap-6 sm:gap-10 mb-20">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="activeCategory = cat"
          class="group relative pb-2 text-xs sm:text-sm font-black tracking-[0.2em] uppercase transition-all duration-300"
          :class="activeCategory === cat ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white'"
        >
          {{ cat }}
          <span 
            class="absolute bottom-0 left-0 h-0.5 bg-[#1dbf73] transition-all duration-500 ease-out"
            :class="activeCategory === cat ? 'w-full' : 'w-0 group-hover:w-1/2'"
          ></span>
        </button>
      </nav>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="index"
          class="group cursor-pointer animate-in fade-in zoom-in-95 duration-700"
          :style="{ 'animation-delay': `${index * 150}ms` }"
        >
          <!-- Metadata Bar -->
          <div class="flex justify-between items-end mb-6 px-4">
             <div class="flex flex-col gap-1">
                <div class="flex items-center gap-2">
                   <span class="w-1.5 h-1.5 rounded-full bg-[#1dbf73]"></span>
                   <span class="text-[10px] font-black tracking-widest text-[#1dbf73] uppercase">{{ project.category }}</span>
                </div>
                <h3 class="text-2xl lg:text-3xl font-black tracking-tight group-hover:text-[#1dbf73] transition-colors duration-300">
                  {{ project.title }}
                </h3>
             </div>
             <span class="text-xs font-black text-gray-500 uppercase tracking-widest pb-1">{{ project.year }}</span>
          </div>
          
          <!-- Image Container -->
          <div class="relative aspect-[4/3] overflow-hidden rounded-[40px] bg-gray-100 dark:bg-[#111] border border-gray-200 dark:border-white/5 shadow-2xl transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(29,191,115,0.15)] group-hover:border-[#1dbf73]/20">
             <img 
               :src="project.image" 
               :alt="project.title" 
               class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
             />
             
             <!-- Overlay Info -->
             <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <p class="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {{ project.description }}
                </p>
                <div class="flex items-center gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                   <button class="px-6 py-3 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-[#1dbf73] transition-colors">
                      View Project
                   </button>
                   <button class="w-12 h-12 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeCategory = ref('All')
const categories = ['All', 'Visual Design', 'Development', 'Branding']

const projects = [
  { 
    title: 'Carbon Platform', 
    year: '2023', 
    category: 'Development', 
    description: 'A high-performance analytics dashboard for carbon credit trading and environmental reporting.',
    image: '/projects/project_mockup_laptop_1_1775382992336.png' 
  },
  { 
    title: 'Pixel Perfect UI', 
    year: '2023', 
    category: 'Visual Design', 
    description: 'Crafting minimalist, component-based design systems for large-scale enterprise applications.',
    image: '/projects/project_mockup_laptop_2_1775383124067.png' 
  },
  { 
    title: 'Vibrant Displays', 
    year: '2023', 
    category: 'Visual Design', 
    description: 'Immersive mobile experience focusing on fluid motion and vibrant color interaction.',
    image: '/projects/project_mockup_phone_1_1775383145132.png' 
  },
  { 
    title: 'H&S Design Studio', 
    year: '2023', 
    category: 'Branding', 
    description: 'Elegant brand identity design for a boutique architectural and design firm.',
    image: '/projects/project_mockup_card_1_1775383266734.png' 
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter(p => p.category === activeCategory.value)
})
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in-from-bottom-8 {
  from { transform: translateY(2rem); }
  to { transform: translateY(0); }
}

@keyframes zoom-in-95 {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.animate-in {
  animation-duration: 0.7s;
  animation-fill-mode: both;
}

.fade-in { animation-name: fade-in; }
.slide-in-from-bottom-8 { animation-name: slide-in-from-bottom-8; }
.zoom-in-95 { animation-name: zoom-in-95; }

header h1 {
  /* Ultra-high-end letter spacing and contrast */
  letter-spacing: -0.08em;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.05);
}

.dark header h1 {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
}
</style>
