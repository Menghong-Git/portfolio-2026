<template>
  <section class="py-20 bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-500 font-['Inter',_'Outfit',_sans-serif]">
    <div class="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-24">
      
      <!-- Top Section: Philosophy -->
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-24">
        <!-- Left: Heading -->
        <div class="lg:w-1/2">
           <div class="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-full mb-8 backdrop-blur-sm bg-white/5 dark:bg-white/10 shadow-sm transition-all hover:border-[#1dbf73]/50">
            <span class="w-2.5 h-2.5 rounded-full bg-[#1dbf73] animate-pulse shadow-[0_0_8px_#1dbf73]"></span>
            <span class="text-[10px] font-black tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400">EXPERIENCE</span>
          </div>
          <h2 class="text-6xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#007BFE] to-[#007BFE]/50 dark:from-[#1dbf73] dark:to-white/40">
            My Design <br/> Philosophy
          </h2>
        </div>

        <!-- Right: Description & List -->
        <div class="lg:w-1/2 flex flex-col justify-end">
          <p class="text-gray-500 dark:text-gray-400 text-xl leading-relaxed mb-10 max-w-xl font-medium">
             Today, I am driven by the belief that great design is not just about aesthetics; 
             it’s about creating meaningful connections between brands and their audiences. 
             I am committed to continuous learning and innovation, ensuring that my 
             designs not only look great but also deliver results.
          </p>
          <ul class="space-y-5">
             <li v-for="item in principles" :key="item" class="flex items-center gap-4 font-black text-xl group cursor-default">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#1dbf73]/10 dark:bg-[#1dbf73]/20 flex items-center justify-center p-1.5 group-hover:scale-110 transition-all duration-300 group-hover:bg-[#1dbf73] group-hover:rotate-12">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1dbf73" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-white transition-colors duration-300"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span class="tracking-tight group-hover:text-[#1dbf73] transition-colors duration-300">{{ item }}</span>
             </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section: Awards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
         <div v-for="(award, index) in awards" :key="index" 
              class="group relative p-10 bg-gray-50/50 dark:bg-[#111111] rounded-[40px] border border-gray-100 dark:border-white/5 hover:border-[#1dbf73]/30 transition-all duration-500 hover:translate-y-[-12px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(29,191,115,0.1)] active:scale-95">
            <div class="w-16 h-16 mb-8 flex items-center justify-center bg-white dark:bg-white/5 rounded-2xl shadow-sm group-hover:rotate-6 transition-transform duration-500">
               <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 group-hover:text-[#1dbf73] transition-colors duration-300"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
            </div>
            <h4 class="text-2xl font-black mb-2 tracking-tight group-hover:text-[#1dbf73] transition-colors duration-300">{{ award.title }}</h4>
            <p class="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">{{ award.category }}</p>
            
            <!-- Subtle Glow Effect -->
            <div class="absolute inset-0 rounded-[40px] bg-[#1dbf73]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none blur-3xl"></div>
         </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const principles = [
  'Crafting Purposeful Experiences',
  'User-Centric Approach',
  'Innovation and Adaptability',
  'Collaboration and Communication'
]

const awards = [
  { title: 'Awwwards', category: 'Site of the day' },
  { title: 'CSS Design Award', category: 'CSS Ninja' },
  { title: 'CSS Design Award', category: 'CSS Champion' },
  { title: 'Awwwards', category: 'Site of the day' }
]
</script>

<style scoped>
/* High-end typography fine-tuning */
h2 {
  letter-spacing: -0.06em;
}
</style>
