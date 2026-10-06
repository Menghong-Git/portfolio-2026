<template>
  <section class="py-20 bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-500 font-['Inter',_'Outfit',_sans-serif]">
    <div class="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-24">
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-32">
        <!-- Left Side: Heading -->
        <div class="lg:w-1/3">
          <div class="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-full mb-8 backdrop-blur-sm bg-white/5 dark:bg-white/10 shadow-sm transition-all hover:border-[#1dbf73]/50">
            <span class="w-2.5 h-2.5 rounded-full bg-[#1dbf73] animate-pulse shadow-[0_0_8px_#1dbf73]"></span>
            <span class="text-[10px] font-black tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400">EXPERIENCE</span>
          </div>
          <h2 class="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#007BFE] to-[#007BFE]/50 dark:from-[#1dbf73] dark:to-white/40">
            My Work <br/> Experience
          </h2>
        </div>

        <!-- Right Side: Experience List -->
        <div class="lg:w-2/3">
          <div class="divide-y divide-gray-200 dark:divide-gray-800">
            <div v-for="(job, index) in experiences" :key="index" 
                 class="group py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all duration-500 hover:pl-6 cursor-default">
              
              <div class="flex flex-col gap-2">
                <h3 class="text-3xl lg:text-4xl font-black tracking-tight group-hover:text-[#1dbf73] transition-colors duration-300">
                  {{ job.title }}
                </h3>
              </div>

              <div class="flex flex-col md:items-end gap-1">
                <p class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 italic">
                  {{ job.company }}
                </p>
                <div class="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                  {{ job.period }}
                </div>
              </div>

            </div>
            <!-- Empty div for bottom divider -->
            <div class="border-t border-gray-200 dark:border-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = [
  {
    title: 'Web Developer',
    company: 'Scholarar Education Start Up',
    period: 'February 2025 - Present'
  },
  {
    title: 'FullStack Developer',
    company: 'Freelance Team',
    period: 'February 2025 - Present'
  }
]
</script>

<style scoped>
/* Optional: Fine-tune typography if needed */
h2, h3 {
  letter-spacing: -0.05em;
}
</style>
