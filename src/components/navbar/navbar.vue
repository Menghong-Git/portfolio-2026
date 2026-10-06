<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeLink = computed(() => {
  const path = route.path
  if (path === '/') return 'Home'
  if (path.startsWith('/about')) return 'About'
  if (path.startsWith('/projects')) return 'Projects'
  if (path.startsWith('/contact')) return 'Contact'
  return ''
})

const isMenuOpen = ref(false)
const isDarkMode = ref(true)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects'},
  { name: 'Contact', path: '/contact' },
]

const socialIcons = [
  { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/share/1EEeL9TCFs/' },
  { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/poki_copy?igsh=MWRwMGVuZzNlNzNzMA==' },
  { name: 'Linkedin', icon: 'linkedin', url: 'https://www.linkedin.com/in/pen-menghong-301b71341/' },
  { name: 'Github', icon: 'github', url: 'https://github.com/Menghong-Git' },
  { name: 'Telegram', icon: 'telegram', url: 'https://t.me/hongsart' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Theme logic
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

watchEffect(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }
})

const accentColor = computed(() => isDarkMode.value ? '#1dbf73' : '#007BFE')
</script>

<template>
  <nav 
    class="sticky top-0 z-50 w-full border-b transition-colors duration-300"
    :class="[isDarkMode ? 'bg-[#0a0a0a] border-white/5 text-white' : 'bg-white border-black/10 text-black']"
  >
    <!-- Desktop Header -->
    <div class="w-full mx-auto flex items-center justify-between py-3 px-6">
      
      <!-- Logo Section -->
      <RouterLink to="/" class="flex items-center gap-2 group decoration-0 shrink-0">
        <div 
          class="flex items-center justify-center py-1.5 px-2 border-2 rounded-lg transition-all bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          :style="{ borderColor: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.2)' }"
          :class="isDarkMode ? 'group-hover:border-[#1dbf73]' : 'group-hover:border-[#007BFE]'"
        >
          <!-- Stylized Bracket Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" 
            class="transition-all transform group-hover:scale-105"
            :class="[isDarkMode ? 'text-white group-hover:text-[#1dbf73]' : 'text-black group-hover:text-[#007BFE]']"
          >
            <path d="M7 8l-4 4 4 4" /> <!-- Left Bracket -->
            <path d="M17 8l4 4-4 4" /> <!-- Right Bracket -->
            <circle cx="12" cy="12" r="1.5" fill="currentColor" /> <!-- Dot -->
            <rect x="11" y="16" width="4" height="2" fill="currentColor" stroke="none" class="animate-pulse" /> <!-- Cursor -->
          </svg>
        </div>
        <span 
          class="text-2xl font-bold tracking-tight transition-colors"
          :class="isDarkMode ? 'text-[#1dbf73] group-hover:text-white' : 'text-[#007BFE] group-hover:text-black'"
        >PEN Menghong</span>
      </RouterLink>

      <!-- Desktop Navigation Links (Center) -->
      <div 
        class="hidden lg:flex items-center gap-2 xl:gap-6 p-1 rounded-full border transition-colors duration-300"
        :class="isDarkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/5'"
      >
        <template v-for="link in navLinks" :key="link.name">
          <RouterLink
            :to="link.path"
            @click="isMenuOpen = false"
            class="px-5 py-1.5 text-sm font-semibold transition-all rounded-full flex items-center gap-1.5 decoration-0"
            :style="{ 
              backgroundColor: activeLink === link.name ? accentColor : 'transparent',
              boxShadow: activeLink === link.name ? `0 8px 20px ${accentColor}40` : 'none'
            }"
            :class="[
              activeLink === link.name 
                ? 'text-white' 
                : (isDarkMode ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-black hover:bg-black/10')
            ]"
          >
            {{ link.name }}
          </RouterLink>
        </template>
      </div>

      <!-- Right Section: Socials, Tools -->
      <div class="flex items-center gap-2 sm:gap-4">
        
        <!-- Desktop Social Icons -->
        <div 
          class="hidden md:flex items-center gap-3 xl:gap-5 px-4 lg:px-6 border-l border-r transition-colors duration-300"
          :class="isDarkMode ? 'border-white/10' : 'border-black/10'"
        >
          <a v-for="social in socialIcons" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer" class="transition-all hover:scale-110"
            :class="isDarkMode ? 'text-gray-400 hover:text-[#1dbf73]' : 'text-gray-600 hover:text-[#007BFE]'"
          >
            <component :is="'svg'" v-if="social.icon === 'facebook'" viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></component>
            <component :is="'svg'" v-if="social.icon === 'pen-tool'" viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 5 2.25L22 17.5 17.5 22 4.25 7 2 2z"/></component>
            <component :is="'svg'" v-if="social.icon === 'twitter'" viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></component>
            <component :is="'svg'" v-if="social.icon === 'instagram'" viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></component>
            <component :is="'svg'" v-if="social.icon === 'linkedin'" viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></component>
            <component :is="'svg'" v-if="social.icon === 'github'" viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></component>
            <component :is="'svg'" v-if="social.icon === 'telegram'" viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path d="M21.73 2.11a2 2 0 0 0-2.18.48L2.35 18.88a1.5 1.5 0 0 0 .4 2.46l4.2 1.68a1 1 0 0 0 1.21-.31l4.5-5.6a.5.5 0 0 1 .7-.07l5.1 3.78a1 1 0 0 0 1.52-.5l2.57-12.5a2 2 0 0 0-.82-2.22zM9 18.2l-1.2 2.8a.2.2 0 0 1-.3.1l-2.4-1.5a.5.5 0 0 1-.2-.6l1.1-2.6 3 2.1z"/></component>
          </a>
        </div>

        <!-- Tools: Theme, Search, Hamburger -->
        <div class="flex items-center gap-1.5 sm:gap-3">
          <button 
            @click="toggleTheme"
            class="p-2 transition-colors hidden sm:block"
            :class="isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'"
          >
            <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          </button>
          
          <!-- <button 
            class="p-2.5 rounded-full text-white transition-all hover:scale-105 shadow-xl"
            :style="{ backgroundColor: accentColor, boxShadow: `0 8px 20px ${accentColor}40` }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button> -->
          
          <!-- Mobile Menu Toggle -->
          <button 
            @click="toggleMenu"
            class="p-2 lg:hidden transition-colors"
            :class="isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'"
          >
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div 
        v-if="isMenuOpen" 
        class="lg:hidden border-b absolute top-full left-0 w-full overflow-hidden shadow-2xl transition-colors duration-300"
        :class="isDarkMode ? 'bg-[#0f0f0f] border-white/5' : 'bg-white border-black/10 text-black'"
      >
        <div class="flex flex-col p-6 gap-6">
          <!-- Mobile Links -->
          <div class="flex flex-col gap-2">
            <RouterLink
              v-for="link in navLinks"
              :key="link.name"
              :to="link.path"
              @click="isMenuOpen = false"
              class="px-4 py-3 rounded-xl transition-all flex items-center justify-between"
              :style="{ 
                backgroundColor: activeLink === link.name ? `${accentColor}15` : 'transparent',
                borderColor: activeLink === link.name ? `${accentColor}30` : 'transparent',
                color: activeLink === link.name ? accentColor : (isDarkMode ? 'rgba(156,163,175,var(--tw-text-opacity))' : 'rgba(55,65,81,var(--tw-text-opacity))')
              }"
              :class="[
                activeLink === link.name 
                  ? 'font-bold border' 
                  : (isDarkMode ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-black hover:bg-black/5')
              ]"
            >
              {{ link.name }}
            </RouterLink>
          </div>

          <!-- Mobile Social Icons -->
          <div 
            class="flex items-center justify-between px-4 py-4 rounded-2xl border transition-colors duration-300"
            :class="isDarkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'"
          >
            <a v-for="social in socialIcons" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer" class="transition-all transform hover:scale-110"
              :class="isDarkMode ? 'text-gray-400 hover:text-[#1dbf73]' : 'text-gray-600 hover:text-[#007BFE]'"
            >
              <component :is="'svg'" v-if="social.icon === 'facebook'" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></component>
              <component :is="'svg'" v-if="social.icon === 'pen-tool'" viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 5 2.25L22 17.5 17.5 22 4.25 7 2 2z"/></component>
              <component :is="'svg'" v-if="social.icon === 'twitter'" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></component>
              <component :is="'svg'" v-if="social.icon === 'instagram'" viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></component>
              <component :is="'svg'" v-if="social.icon === 'linkedin'" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></component>
              <component :is="'svg'" v-if="social.icon === 'github'" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></component>
              <component :is="'svg'" v-if="social.icon === 'telegram'" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M21.73 2.11a2 2 0 0 0-2.18.48L2.35 18.88a1.5 1.5 0 0 0 .4 2.46l4.2 1.68a1 1 0 0 0 1.21-.31l4.5-5.6a.5.5 0 0 1 .7-.07l5.1 3.78a1 1 0 0 0 1.52-.5l2.57-12.5a2 2 0 0 0-.82-2.22zM9 18.2l-1.2 2.8a.2.2 0 0 1-.3.1l-2.4-1.5a.5.5 0 0 1-.2-.6l1.1-2.6 3 2.1z"/></component>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
/* Reset any link decoration from global styles */
a {
  text-decoration: none !important;
}

/* Custom Cursor Animation for Logo */
@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-pulse {
  animation: cursor-blink 1s infinite step-end;
}
</style>

<style scoped>
/* Reset any link decoration from global styles */
a {
  text-decoration: none !important;
}

/* Custom Cursor Animation for Logo */
@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-pulse {
  animation: cursor-blink 1s infinite step-end;
}
</style>
