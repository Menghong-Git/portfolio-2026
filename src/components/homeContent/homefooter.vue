<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
]
</script>

<template>
  <footer class="w-full bg-white dark:bg-[#0a0a0a] transition-colors duration-500 py-10 lg:py-20 relative overflow-hidden">
    <div class="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-24">
      
      <!-- High Impact CTA Card -->
      <div class="relative bg-black rounded-[40px] p-12 lg:p-24 text-center overflow-hidden group shadow-2xl transition-all duration-700 hover:shadow-black/20">
        <!-- Abstract Background Shapes -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-[#007BFE] dark:bg-[#1dbf73] opacity-[0.05] blur-[150px] -transition-all duration-1000 group-hover:scale-150"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 dark:bg-green-500/10 opacity-[0.05] blur-[100px]"></div>

        <div class="relative z-10 flex flex-col items-center">
          <!-- Pulse Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 mb-10 bg-white/5">
            <span class="w-2 h-2 rounded-full bg-[#007BFE] dark:bg-[#1dbf73] animate-pulse shadow-[0_0_10px_rgba(29,191,115,0.8)]"></span>
            <span class="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Have project in mind?</span>
          </div>

          <h2 class="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-12 leading-none max-w-4xl mx-auto drop-shadow-2xl">
            Let's Turn your <br/>
            Ideas into <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFE] dark:from-[#1dbf73] to-white/40">Reality</span>
          </h2>

          <!-- Contact Email Redirect -->
          <a href="mailto:penmenghong99@gmail.com" class="group flex items-center gap-4 text-white hover:text-[#007BFE] dark:hover:text-[#1dbf73] transition-all duration-300">
            <div class="relative pb-2 border-b-2 border-white/10 group-hover:border-[#007BFE] dark:group-hover:border-[#1dbf73] flex items-center gap-3">
               <svg class="transform transition-transform group-hover:-translate-x-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
               <span class="text-xl sm:text-3xl font-black tracking-tight">penmenghong99@gmail.com</span>
            </div>
          </a>
        </div>
      </div>

      <!-- Bottom Nav & Copyright -->
      <div class="mt-20 flex flex-col items-center gap-10">
        <nav class="flex flex-wrap justify-center gap-x-12 gap-y-6">
          <router-link v-for="link in navLinks" :key="link.name" :to="link.path" class="text-sm font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-[#007BFE] dark:hover:text-[#1dbf73] transition-all duration-300">
            {{ link.name }}
          </router-link>
        </nav>

        <div class="text-[10px] items-center flex flex-col gap-4">
           <div class="flex items-center gap-3 opacity-50">
             <div class="w-10 h-px bg-gray-300 dark:bg-white/20"></div>
             <span class="font-black uppercase tracking-[0.3em]">Pen Menghong © 2024</span>
             <div class="w-10 h-px bg-gray-300 dark:bg-white/20"></div>
           </div>
           <p class="text-gray-400 font-bold">Designed with passion • Developed with precision</p>
        </div>
      </div>

      <!-- Floating Customize & Top Buttons -->
      <div class="fixed right-6 bottom-6 flex flex-col gap-4 z-50">
        <!-- Optional Customize Badge (matches design) -->
         <button class="bg-white dark:bg-black border border-gray-100 dark:border-white/10 px-4 py-3 rounded-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all group hidden lg:flex">
           <div class="w-2 h-2 rounded-full bg-[#007BFE] dark:bg-[#1dbf73]"></div>
           <span class="text-[10px] font-black uppercase tracking-widest text-black dark:text-white">Customize</span>
         </button>

         <button @click="scrollToTop" class="w-12 h-12 bg-[#007BFE] dark:bg-[#1dbf73] text-white dark:text-black rounded-xl flex items-center justify-center shadow-2xl hover:-translate-y-2 transition-all group">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
         </button>
      </div>

    </div>
  </footer>
</template>

<style scoped>
/* Smooth typography */
footer h2, footer a {
  font-family: 'Inter', 'Outfit', sans-serif;
  letter-spacing: -0.04em;
}
</style>
