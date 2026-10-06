<script setup lang="ts">
/* No specific props or state required for now, but we can make them dynamic later if needed */
</script>

<template>
  <section id="experience" class="w-full bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-500 py-20 lg:py-32 overflow-hidden">
    <div class="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-24">
      
      <!-- Top Section: Image & Intro -->
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 mb-20">
        
        <!-- Left: Image with Decorative Background -->
        <div class="relative w-full lg:w-1/2 max-w-[400px]">
          <div class="aspect-[4/5] bg-[#007BFE]/10 dark:bg-[#1dbf73]/10 rounded-[40px] relative overflow-visible transition-all duration-500 hover:scale-[1.02]">
            <!-- Main Photo Container -->
            <div class="absolute inset-4 rounded-[30px] overflow-hidden bg-white dark:bg-black/20 shadow-2xl">
              <img src="/images/menghong.png" alt="Experience Profile" class="w-full object-cover" />
            </div>
            <!-- Decorative "Floaters" -->
            <div class="absolute -top-6 -right-6 w-24 h-24 bg-[#007BFE] dark:bg-[#1dbf73] rounded-3xl -z-10 animate-pulse"></div>
            <div class="absolute -bottom-8 -left-8 w-40 h-40 border-4 border-[#007BFE]/20 dark:border-[#1dbf73]/20 rounded-full -z-10"></div>
          </div>
        </div>

        <!-- Right: Content & Socials -->
        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 mb-8 bg-gray-50 dark:bg-white/5">
            <span class="w-2 h-2 rounded-full bg-[#007BFE] dark:bg-[#1dbf73] animate-ping"></span>
            <span class="text-[10px] font-black uppercase tracking-[0.2em] text-[#007BFE] dark:text-[#1dbf73]">About Me</span>
          </div>
          
          <h2 class="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
            Discover My <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFE] dark:from-[#1dbf73] to-blue-300 dark:to-green-300">Design Journey</span>
          </h2>
          
          <p class="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
            Hello! I'm Pen Menghong, a passionate Full Stack Developer based in Phnom Penh, Cambodia. I specialize in modern frameworks such as React, Vue.js, and Next.js, with a strong focus on building responsive, high-performance, and user-centric web applications.
          </p>

          <!-- Social Media Icons (Consistent with provided design) -->
          <div class="flex justify-center lg:justify-start gap-4">
            <a href="https://www.linkedin.com/in/pen-menghong-301b71341/" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black hover:bg-[#007BFE] dark:hover:bg-[#1dbf73] hover:text-white dark:hover:text-black transition-all transform hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/Menghong-Git" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black hover:bg-[#007BFE] dark:hover:bg-[#1dbf73] hover:text-white dark:hover:text-black transition-all transform hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            <a href="https://www.instagram.com/poki_copy?igsh=MWRwMGVuZzNlNzNzMA==" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black hover:bg-[#007BFE] dark:hover:bg-[#1dbf73] hover:text-white dark:hover:text-black transition-all transform hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
             <a href="https://www.facebook.com/share/1EEeL9TCFs/" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black hover:bg-[#007BFE] dark:hover:bg-[#1dbf73] hover:text-white dark:hover:text-black transition-all transform hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Stats Bar -->
      <div class="relative mt-32">
        <!-- Vibrant Background -->
        <div class="absolute inset-0 bg-[#007BFE] dark:bg-[#1dbf73] rounded-[40px] transform -skew-y-1"></div>
        <div class="relative grid grid-cols-1 md:grid-cols-3 gap-12 py-16 px-12 items-center">
          
          <!-- Stat 1 -->
          <div class="text-white dark:text-black border-b md:border-b-0 md:border-r border-white/20 dark:border-black/20 pb-8 md:pb-0">
             <div class="text-6xl font-black mb-4 tracking-tighter underline decoration-4 decoration-white/30 underline-offset-8">1+</div>
             <p class="text-lg font-black uppercase tracking-widest leading-tight">Years of <br/>Experience</p>
             <p class="text-xs text-white/70 dark:text-black/60 mt-2 font-bold">Building real-world projects since 2024.</p>
          </div>

          <!-- Stat 2 -->
          <div class="text-white dark:text-black border-b md:border-b-0 md:border-r border-white/20 dark:border-black/20 pb-8 md:pb-0">
             <div class="text-6xl font-black mb-4 tracking-tighter underline decoration-4 decoration-white/30 underline-offset-8">15+</div>
             <p class="text-lg font-black uppercase tracking-widest leading-tight">Projects <br/>Delivered</p>
             <p class="text-xs text-white/70 dark:text-black/60 mt-2 font-bold">Successfully launched web applications and dashboards.</p>
          </div>

          <!-- Stat 3 -->
          <div class="text-white dark:text-black">
             <div class="text-6xl font-black mb-4 tracking-tighter underline decoration-4 decoration-white/30 underline-offset-8">3</div>
             <p class="text-lg font-black uppercase tracking-widest leading-tight">Certifications <br/>Earned</p>
             <p class="text-xs text-white/70 dark:text-black/60 mt-2 font-bold">Computer Skills, Full-Stack Development, and more.</p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Typography refinements */
h2, p, .font-black {
  font-family: 'Inter', 'Outfit', sans-serif;
}
</style>
