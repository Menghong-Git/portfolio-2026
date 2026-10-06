<script setup lang="ts">
/* Add any logic here if needed, but the section is primarily structural */
</script>

<template>
  <section id="about" class="bg-white dark:bg-[#0a0a0a] text-black dark:text-white pt-24 pb-32 transition-colors duration-500 overflow-hidden">
    <div class="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-24 relative lg:mt-24">
      
      <!-- Massive Hero Header -->
      <div class="absolute -top-12 lg:-top-24 left-6 lg:left-24 -z-0 opacity-10 dark:opacity-20 pointer-events-none">
        <h1 class="text-8xl md:text-[180px] lg:text-[250px] font-black uppercase tracking-tighter leading-none select-none">
          ABOUT
        </h1>
      </div>

      <div class="relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        
        <!-- Left: Image Showcase -->
        <div class="w-full lg:w-1/2 max-w-[550px] group transition-transform duration-500 hover:scale-[1.02]">
          <div class="relative aspect-square sm:aspect-[4/5] bg-[#007BFE] dark:bg-[#1dbf73] rounded-[40px] sm:rounded-[60px] overflow-hidden shadow-2xl">
             <img src="/images/menghong.png" alt="Profile" class="w-full object-cover transition-all duration-700 group-hover:brightness-110" />
             <!-- Subtle Overlay Gradient -->
             <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
        <!-- Right: Bio & Story -->
        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <h2 class="text-4xl sm:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
            Welcome to my <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFE] dark:from-[#1dbf73] to-blue-400 dark:to-green-400">Creative World</span>
          </h2>
          
          <div class="space-y-6 text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
             <p>
                Frontend Web Developer skilled in modern frameworks such as React, with a strong focus on building responsive, high-performance, and user-centric web applications. Experienced in translating UI/UX designs into clean, efficient, and maintainable code while ensuring cross-browser compatibility and accessibility standards.
             </p>
             <p>
                Demonstrates a solid understanding of web development best practices, including component-based architecture, version control, and performance optimization. Committed to delivering intuitive digital experiences through attention to detail and continuous improvement of technical expertise.
             </p>
          </div>
          <!-- Download Resume Button (Matching provided design) -->
          <div class="mt-12 flex justify-center lg:justify-start">
             <a href="/Pen_Menghong_Resume.pdf" download class="inline-flex items-center gap-3 px-8 py-4 bg-[#007BFE] dark:bg-[#1dbf73] text-white dark:text-black font-black text-sm uppercase tracking-widest rounded-full hover:shadow-2xl shadow-blue-500/20 dark:shadow-green-500/20 transition-all hover:scale-105 active:scale-95 group">
                <svg class="transform transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Download Resume
             </a>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* Typography refinements */
h1, h2, p, a {
  font-family: 'Inter', 'Outfit', sans-serif;
}
</style>
