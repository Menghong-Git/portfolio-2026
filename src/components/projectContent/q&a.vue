<template>
  <section class="py-24 bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-500 font-['Inter',_'Outfit',_sans-serif]">
    <div class="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-24">
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        <!-- Left Side: Heading -->
        <div class="lg:w-1/3">
          <div class="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-full mb-8 backdrop-blur-sm bg-white/5 dark:bg-white/10 shadow-sm transition-all hover:border-[#1dbf73]/50 items-center justify-center">
            <span class="w-2.5 h-2.5 rounded-full bg-[#1dbf73] animate-pulse shadow-[0_0_8px_#1dbf73]"></span>
            <span class="text-[10px] font-black tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400">FAQ</span>
          </div>
          <h2 class="text-6xl lg:text-9xl font-black leading-[0.95] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#007BFE] to-[#007BFE]/50 dark:from-[#1dbf73] dark:to-white/40">
            Questions & <br/> Answers
          </h2>
        </div>

        <!-- Right Side: Accordion -->
        <div class="lg:w-2/3 border-t border-gray-200 dark:border-gray-800">
          <div v-for="(item, index) in faqs" :key="index" class="border-b border-gray-200 dark:border-gray-800">
            <button 
              @click="toggle(index)"
              class="w-full py-10 flex justify-between items-center text-left group"
            >
              <span class="text-xl sm:text-3xl font-black tracking-tight group-hover:text-[#1dbf73] transition-colors duration-300">
                {{ item.question }}
              </span>
              <div class="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-800 flex items-center justify-center transition-all duration-500 transform"
                   :class="{ 'rotate-180 border-[#1dbf73] bg-[#1dbf73] text-white': activeIndex === index }">
                <svg v-if="activeIndex !== index" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition-transform"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-white"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
            </button>
            
            <div 
              class="overflow-hidden transition-all duration-700 ease-in-out"
              :style="{ maxHeight: activeIndex === index ? '400px' : '0px', opacity: activeIndex === index ? '1' : '0' }"
            >
              <p class="pb-12 text-gray-500 dark:text-gray-400 text-xl font-medium leading-relaxed max-w-3xl">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref<number | null>(0)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'I offer a range of services including web design, front-end development, UX/UI design, responsive design, e-commerce solutions, and brand identity creation. Visit my Services page for a detailed overview.'
  },
  {
    question: 'How do you approach a new project?',
    answer: 'I follow a collaborative and structured approach, starting with discovery and research, followed by strategic planning, design prototyping, and final implementation.'
  },
  {
    question: 'What is your project timeline?',
    answer: 'Project timelines vary depending on the scope and complexity. Small projects usually take 2-4 weeks, while larger enterprise applications can take 3+ months.'
  },
  {
    question: 'How much do your services cost?',
    answer: 'Pricing is project-based and depends on your specific requirements. I offer flexible packages tailored to startups and established businesses alike.'
  },
  {
    question: 'What platforms do you work with?',
    answer: 'I specialize in modern web technologies including Vue, React, Next.js, and specialized CMS platforms like Shopify and Webflow for tailored solutions.'
  }
]
</script>

<style scoped>
/* Ultra-high-end typography fine-tuning */
h2 {
  letter-spacing: -0.06em;
}
</style>
