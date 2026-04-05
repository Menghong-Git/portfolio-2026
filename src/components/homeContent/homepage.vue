<script setup lang="ts">
import { computed } from 'vue'

// Logic for some reactive styles if needed, though Tailwind classes handles most
</script>

<template>
  <section class="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-10 px-6 sm:px-12 select-none bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
    
    <!-- Background Typography Layer (Deepest Layer) -->
    <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 mt-[-5vh] opacity-[0.02] dark:opacity-[0.06] select-none">
      <h1 class="text-[clamp(6rem,30vw,20rem)] font-black leading-[0.7] tracking-tighter uppercase text-center flex flex-col grayscale">
        <span class="block">PEN</span>
        <span class="block">Menghong</span>
      </h1>
    </div>

    <!-- Main Content Container (Full Width) -->
    <div class="relative z-10 w-full max-w-[1500px] min-h-[80vh] flex flex-col items-center justify-center">
      
      <!-- Top Badge (Always Centered) -->
      <div class="absolute top-[-5vh] left-1/2 -track-x-1/2 transform -translate-x-1/2 z-40 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md shadow-sm transition-all hover:scale-110 hover:border-[#1dbf73] group">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1dbf73] opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-[#1dbf73]"></span>
        </span>
        <span class="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-gray-700 dark:text-gray-300 group-hover:text-[#1dbf73] transition-colors whitespace-nowrap">Available For Work</span>
      </div>

      <!-- Hero Cinematic Layout (Text + Image Overlap) -->
      <div class="relative w-full flex flex-col items-center justify-center py-16 sm:py-20 lg:py-32">
        
        <!-- Large Name Heading (Layered behind image) -->
        <div class="relative z-10 text-center select-none pointer-events-none">
          <h2 class="text-[clamp(2.5rem,15vw,11rem)] font-black leading-[0.8] tracking-tighter uppercase text-black dark:text-white filter drop-shadow-2xl transition-all duration-700">
            <span class="block">PEN</span>
            <span class="block relative">
              MENGHONG
              <span class="absolute top-[0.1em] -right-[0.6em] sm:-right-[0.8em] text-[0.3em] font-light opacity-50">©</span>
            </span>
          </h2>
        </div>

        <!-- Enormous User Photo (Absolute Layer positioned OVER the name) -->
        <div class="absolute inset-0 flex items-center justify-center z-20 pointer-events-none group pt-[5vh] sm:pt-[10vh]">
          <div class="relative w-full max-w-[min(100%,200px)] lg:max-w-[min(90vw,400px)] transform transition-transform duration-1000 group-hover:scale-[1.02]">
            <!-- Atmospheric Glow -->
            <div class="absolute inset-x-0 bottom-[10%] h-[80%] bg-gradient-to-t from-[#007BFE]/20 dark:from-[#1dbf73]/20 to-transparent blur-[100px] opacity-70"></div>
            
            <img 
              src="/images/menghong.png" 
              alt="PEN Menghong" 
              class="w-full h-auto object-contain drop-shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <!-- Adaptive Details & CTA (Left Desktop, Center Mobile) -->
      <div class="relative z-30 w-full mt-auto sm:mt-0 flex flex-col items-center sm:items-start text-center sm:text-left gap-2 md:gap-5 sm:absolute sm:bottom-0 sm:left-0 lg:left-6 max-w-sm sm:max-w-md lg:max-w-lg pointer-events-auto">
        <p class="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 font-bold leading-relaxed drop-shadow-xl p-4 bg-white/5 backdrop-blur-md sm:bg-transparent rounded-3xl">
          I blend artistry with cutting-edge technology to deliver websites that not only look stunning but also drive results.
        </p>
        
        <!-- Premium Theme-Aware Button -->
        <button class="group relative flex items-center gap-4 px-8 py-4 sm:px-12 sm:py-5 rounded-full font-black text-lg sm:text-xl text-white transition-all overflow-hidden shadow-2xl active:scale-95 bg-[#007BFE] dark:bg-[#1dbf73] shadow-[#007BFE]/40 dark:shadow-[#1dbf73]/40 hover:shadow-[#007BFE]/60 dark:hover:shadow-[#1dbf73]/60">
          <span class="relative z-10 flex items-center gap-3">
             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="rotate-[135deg] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
               <path d="M5 12h14m-7-7 7 7-7 7"/>
             </svg>
             Contact Me
          </span>
          <div class="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 slant"></div>
        </button>
      </div>

    </div>

    <!-- Floating UI Decoration (Customize Style) -->
    <div class="hidden xl:flex absolute right-16 top-1/2 -translate-y-1/2 flex-col gap-6 z-40">
      <div class="p-5 bg-white dark:bg-white/10 rounded-[2rem] shadow-2xl border border-black/5 dark:border-white/10 backdrop-blur-xl -rotate-3 hover:rotate-0 transition-all duration-700 cursor-pointer group flex items-center gap-4 pr-10">
        <div class="p-3 rounded-2xl bg-[#007BFE] dark:bg-[#1dbf73] text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
        </div>
        <span class="text-sm font-black tracking-widest uppercase">Customize</span>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* High-impact typography matching the design */
h1, h2, h3 {
  font-family: 'Inter', 'Outfit', system-ui, -apple-system, sans-serif;
  letter-spacing: -0.06em;
}

/* Diagonal shine effect for button */
.slant {
  width: 50%;
  transform: skewX(-25deg) translateX(-150%);
}
button:hover .slant {
  transform: skewX(-25deg) translateX(250%);
}

/* Optimize photo interactions */
img {
  -webkit-user-drag: none;
  user-select: none;
  image-rendering: -webkit-optimize-contrast;
}
</style>
