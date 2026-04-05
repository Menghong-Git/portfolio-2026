<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projects } from '@/data/projects'

const router = useRouter()

const featuredProject = projects[0]
const otherTopProjects = projects.slice(1, 4)


const goToProject = (id: number) => {
  router.push(`/project/${id}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Project Inquiry Logic (Expanded Newsletter)
const form = ref({
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  details: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

const sendToTelegram = async () => {
  if (!form.value.email || !form.value.name) return
  
  isSubmitting.value = true
  const token = '8728568269:AAEKgxEEGB7hI0FVCRrHgLjGcP6deOllbck'
  const chatId = '1402335407'
  
  const message = `🚀 *New Project Inquiry!*\n\n` +
    `👤 *Name:* ${form.value.name}\n` +
    `📧 *Email:* ${form.value.email}\n` +
    `🏢 *Company:* ${form.value.company || 'N/A'}\n` +
    `🛠 *Project Type:* ${form.value.projectType || 'N/A'}\n` +
    `💰 *Budget:* ${form.value.budget || 'N/A'}\n` +
    `⏳ *Timeline:* ${form.value.timeline || 'N/A'}\n\n` +
    `📝 *Details:* ${form.value.details || 'No details provided'}\n\n` +
    `📅 *Date:* ${new Date().toLocaleString()}`

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      })
    })

    if (response.ok) {
      isSuccess.value = true
      // Reset form
      form.value = {
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        details: ''
      }
      setTimeout(() => { isSuccess.value = false }, 5000)
    }
  } catch (error) {
    console.error('Telegram Error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="bg-white dark:bg-[#0a0a0a] text-black dark:text-white py-20 px-6 sm:px-12 lg:px-24 transition-colors duration-500">
    <!-- Header -->
    <div class="mb-12">
      <h2 class="text-4xl font-black uppercase tracking-tight mb-2">Project Experience</h2>
      <div class="w-32 h-1.5 bg-[#007BFE] dark:bg-[#1dbf73] relative overflow-hidden">
        <!-- Wavy pattern via CSS mask or simple line -->
        <div class="absolute inset-0 opacity-50" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.2) 5px, rgba(255,255,255,0.2) 10px);"></div>
      </div>
    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      
      <!-- Top Content (Featured + Small List) -->
      <div class="lg:col-span-8 space-y-12">
        
        <!-- Featured & Side List Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <!-- Featured Project Card -->
          <div v-if="featuredProject" @click="goToProject(featuredProject.id)" class="border border-gray-100 dark:border-white/10 p-4 rounded-lg bg-gray-50 dark:bg-white/5 hover:border-[#007BFE] dark:hover:border-[#1dbf73]/50 transition-all group cursor-pointer">
            <div class="relative overflow-hidden rounded-md mb-4 aspect-video">
              <img :src="featuredProject.image" :alt="featuredProject.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute top-3 left-3 flex gap-2">
                <span v-for="tag in featuredProject.tags" :key="tag" class="px-3 py-1 bg-[#007BFE]/10 dark:bg-[#1dbf73]/20 border border-[#007BFE]/30 dark:border-[#1dbf73]/50 text-[#007BFE] dark:text-[#1dbf73] text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-widest">
                  {{ tag }}
                </span>
              </div>
            </div>
            <h3 class="text-2xl font-black mb-2 group-hover:text-[#007BFE] dark:group-hover:text-[#1dbf73] transition-colors line-clamp-1">{{ featuredProject.title }}</h3>
            <div class="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm mb-4">
               <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 bg-[#007BFE] dark:bg-[#1dbf73] rounded-full"></span> {{ featuredProject.author }}</span>
               <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 bg-[#007BFE] dark:bg-[#1dbf73] rounded-full"></span> {{ featuredProject.date }}</span>
            </div>
            <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
              {{ featuredProject.description }}
            </p>
            <button @click.stop="goToProject(featuredProject.id)" class="px-6 py-2 border border-[#007BFE] dark:border-[#1dbf73] text-[#007BFE] dark:text-[#1dbf73] text-sm font-bold rounded-full hover:bg-[#007BFE] dark:hover:bg-[#1dbf73] hover:text-white dark:hover:text-black transition-all">
              View Project
            </button>
          </div>

          <!-- Small Project List -->
          <div class="space-y-4">
            <div v-for="project in otherTopProjects" :key="project.id" @click="goToProject(project.id)" class="flex gap-4 p-3 border border-gray-100 dark:border-white/10 rounded-lg bg-gray-50 dark:bg-white/5 hover:border-[#007BFE] dark:hover:border-[#1dbf73]/30 transition-all group cursor-pointer">
              <div class="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
                <img :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div class="flex flex-col justify-center">
                <h4 class="font-bold text-sm mb-1 group-hover:text-[#007BFE] dark:group-hover:text-[#1dbf73] transition-colors line-clamp-2">{{ project.title }}</h4>
                <div class="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-[10px]">
                  <span>{{ project.date }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Banner Spacer (Matching the image) -->
        <div class="bg-gradient-to-r from-[#007BFE] dark:from-[#1dbf73] to-white dark:to-[#0a0a0a] p-8 rounded-lg flex items-center justify-between border border-[#007BFE]/20 dark:border-[#1dbf73]/20 shadow-sm transition-colors duration-500">
          <div class="text-white dark:text-black">
            <h4 class="text-xl font-black mb-1">Passionate about coding?</h4>
            <p class="text-white/80 dark:text-black/70 text-sm italic">Let's build something amazing together.</p>
          </div>
          <button class="w-12 h-12 bg-white/20 dark:bg-black/10 hover:bg-white dark:hover:bg-black rounded-lg flex items-center justify-center text-white dark:text-black hover:text-[#007BFE] dark:hover:text-[#1dbf73] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </button>
        </div>

        <!-- Recent Projects Section -->
        <div>
          <div class="mb-8 border-b-2 border-gray-100 dark:border-white/5 pb-2">
            <h2 class="text-2xl font-black uppercase tracking-tight">Recent Projects</h2>
            <div class="w-16 h-1 mt-2 bg-[#007BFE] dark:bg-[#1dbf73]"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="project in projects" :key="'recent-' + project.id" @click="goToProject(project.id)" class="border border-gray-100 dark:border-white/10 p-4 rounded-lg bg-gray-50 dark:bg-white/5 group hover:border-[#007BFE]/50 dark:hover:border-[#1dbf73]/50 transition-all cursor-pointer">
               <div class="relative overflow-hidden rounded-md mb-4 aspect-video">
                 <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                 <div class="absolute top-3 left-3 flex gap-2">
                    <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 bg-[#007BFE] dark:bg-[#1dbf73] text-white dark:text-black text-[10px] font-black rounded-full uppercase">
                      {{ tag }}
                    </span>
                 </div>
               </div>
               <h3 class="text-lg font-black mb-2 group-hover:text-[#007BFE] dark:group-hover:text-[#1dbf73] transition-colors">{{ project.title }}</h3>
               <div class="flex items-center gap-4 text-gray-400 dark:text-gray-500 text-xs mb-3">
                  <span>{{ project.date }}</span>
               </div>
               <p class="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                 {{ project.description }}
               </p>
               <button @click.stop="goToProject(project.id)" class="text-[#007BFE] dark:text-[#1dbf73] text-xs font-black uppercase tracking-widest hover:underline">Read More</button>
            </div>
          </div>
        </div>

      </div>

      <!-- Sidebar -->
      <div class="lg:col-span-4 space-y-10 ">
        
        <!-- About Profile Sidebar -->
        <div class="border border-gray-100 dark:border-white/10 p-6 rounded-lg bg-gray-50 dark:bg-white/5 flex flex-col items-center text-center">
          <div class="w-26 h-26 rounded-full overflow-hidden mb-6 border-2 border-[#007BFE] dark:border-[#1dbf73] shadow-sm">
            <img src="/images/menghong.png" alt="Profile" class="w-full object-cover" />
          </div>
          <h3 class="text-xl font-black mb-2">Pen Menghong</h3>
          <p class="text-gray-400 text-sm mb-6 leading-relaxed">
            I am a Fullstack developer with a passion for creative web design and efficient code.
          </p>
          <div class="flex justify-center gap-4">
            <!-- Simple Social Links -->
             <a href="#" class="text-gray-400 hover:text-[#007BFE] dark:hover:text-[#1dbf73] transition-colors transition-transform hover:-translate-y-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
             </a>
             <a href="#" class="text-gray-400 hover:text-[#007BFE] dark:hover:text-[#1dbf73] transition-colors transition-transform hover:-translate-y-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
             </a>
             <a href="#" class="text-gray-400 hover:text-[#007BFE] dark:hover:text-[#1dbf73] transition-colors transition-transform hover:-translate-y-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
             </a>
          </div>
        </div>

        <!-- Featured/Recent List Sidebar -->
        <div class="border border-gray-100 dark:border-white/10 p-6 rounded-lg bg-gray-50 dark:bg-white/5">
          <div class="flex items-center justify-between mb-8 pb-2 border-b border-gray-100 dark:border-white/5">
             <h3 class="text-lg font-black uppercase tracking-tight">Featured</h3>
            <div class="flex gap-2">
               <button class="px-3 py-1 bg-[#007BFE] dark:bg-[#1dbf73] text-white dark:text-black text-[10px] font-bold rounded-full">Featured</button>
               <button class="px-3 py-1 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white text-[10px] font-bold rounded-full hover:bg-gray-300 dark:hover:bg-white/20">Recent</button>
            </div>
          </div>
          <div class="space-y-6">
            <div v-for="project in otherTopProjects" :key="'side-' + project.id" @click="goToProject(project.id)" class="flex gap-4 group cursor-pointer">
               <div class="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border border-gray-100 dark:border-white/10">
                 <img :src="project.image" alt="Thumbnail" class="w-full h-full object-cover group-hover:scale-110 transition-transform" />
               </div>
               <div class="flex flex-col justify-center">
                 <h4 class="text-sm font-bold group-hover:text-[#007BFE] dark:group-hover:text-[#1dbf73] line-clamp-2 transition-colors">{{ project.title }}</h4>
                 <span class="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-black">{{ project.date }}</span>
               </div>
            </div>
          </div>
        </div>

        <!-- Project Inquiry Sidebar (Successor to Newsletter) -->
        <div class="border border-gray-100 dark:border-white/10 p-6 rounded-lg bg-gray-50 dark:bg-white/5">
           <h3 class="text-lg font-black uppercase tracking-tight mb-4 text-center">Project Inquiry</h3>
           <p class="text-gray-500 dark:text-gray-400 text-xs mb-8 text-center leading-normal">Ready to start? Fill in the details below and I'll get back to you shortly.</p>
           
           <form @submit.prevent="sendToTelegram" class="space-y-4">
             <!-- Name -->
             <div class="space-y-1">
               <label class="text-[10px] uppercase font-black text-gray-400 dark:text-gray-500 ml-1">Full Name *</label>
               <input v-model="form.name" type="text" placeholder="John Doe" class="w-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-lg py-3 px-4 text-xs text-black dark:text-white focus:ring-1 focus:ring-[#007BFE] dark:focus:ring-[#1dbf73] focus:border-transparent outline-none transition-all" required />
             </div>

             <!-- Email -->
             <div class="space-y-1">
               <label class="text-[10px] uppercase font-black text-gray-400 dark:text-gray-500 ml-1">Email Address *</label>
               <input v-model="form.email" type="email" placeholder="john@example.com" class="w-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-lg py-3 px-4 text-xs text-black dark:text-white focus:ring-1 focus:ring-[#007BFE] dark:focus:ring-[#1dbf73] focus:border-transparent outline-none transition-all" required />
             </div>

             <!-- Company -->
             <div class="space-y-1">
               <label class="text-[10px] uppercase font-black text-gray-400 dark:text-gray-500 ml-1">Company</label>
               <input v-model="form.company" type="text" placeholder="Acme Inc." class="w-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-lg py-3 px-4 text-xs text-black dark:text-white focus:ring-1 focus:ring-[#007BFE] dark:focus:ring-[#1dbf73] focus:border-transparent outline-none transition-all" />
             </div>

             <!-- Project Type & Budget (Row) -->
             <div class="grid grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="text-[10px] uppercase font-black text-gray-400 dark:text-gray-500 ml-1">Type</label>
                  <select v-model="form.projectType" class="w-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-lg py-3 px-4 text-xs text-black dark:text-white focus:ring-1 focus:ring-[#007BFE] dark:focus:ring-[#1dbf73] focus:border-transparent outline-none transition-all appearance-none">
                    <option value="" disabled selected class="bg-white dark:bg-[#1a1a1a] text-black dark:text-white">Select...</option>
                    <option value="Web Development" class="bg-white dark:bg-[#1a1a1a] text-black dark:text-white">Web Dev</option>
                    <option value="Mobile App" class="bg-white dark:bg-[#1a1a1a] text-black dark:text-white">Mobile App</option>
                    <option value="UI/UX Design" class="bg-white dark:bg-[#1a1a1a] text-black dark:text-white">UI/UX Design</option>
                    <option value="Full Product" class="bg-white dark:bg-[#1a1a1a] text-black dark:text-white">Full Product</option>
                  </select>
                </div>
                <div class="space-y-1">
                  <label class="text-[10px] uppercase font-black text-gray-400 dark:text-gray-500 ml-1">Budget</label>
                  <select v-model="form.budget" class="w-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-lg py-3 px-4 text-xs text-black dark:text-white focus:ring-1 focus:ring-[#007BFE] dark:focus:ring-[#1dbf73] focus:border-transparent outline-none transition-all appearance-none">
                    <option value="" disabled selected class="bg-white dark:bg-[#1a1a1a] text-black dark:text-white">Select...</option>
                    <option value="<$1k" class="bg-white dark:bg-[#1a1a1a] text-black dark:text-white">< $1k</option>
                    <option value="$1k - $5k" class="bg-white dark:bg-[#1a1a1a] text-black dark:text-white">$1k - $5k</option>
                    <option value="$5k - $10k" class="bg-white dark:bg-[#1a1a1a] text-black dark:text-white">$5k - $10k</option>
                    <option value="$10k+" class="bg-white dark:bg-[#1a1a1a] text-black dark:text-white">$10k+</option>
                  </select>
                </div>
             </div>

             <!-- Timeline -->
             <div class="space-y-1">
               <label class="text-[10px] uppercase font-black text-gray-400 dark:text-gray-500 ml-1">Expected Timeline</label>
               <select v-model="form.timeline" class="w-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-lg py-3 px-4 text-xs text-black dark:text-white focus:ring-1 focus:ring-[#007BFE] dark:focus:ring-[#1dbf73] focus:border-transparent outline-none transition-all appearance-none">
                 <option value="" disabled selected class="bg-white dark:bg-[#1a1a1a] text-black dark:text-white">How soon?</option>
                 <option value="ASAP" class="bg-white dark:bg-[#1a1a1a] text-black dark:text-white">ASAP</option>
                 <option value="1 Month" class="bg-white dark:bg-[#1a1a1a] text-black dark:text-white">1 Month</option>
                 <option value="3 Months" class="bg-white dark:bg-[#1a1a1a] text-black dark:text-white">3 Months</option>
                 <option value="Flexible" class="bg-white dark:bg-[#1a1a1a] text-black dark:text-white">Flexible</option>
               </select>
             </div>

             <!-- Details -->
             <div class="space-y-1">
               <label class="text-[10px] uppercase font-black text-gray-400 dark:text-gray-500 ml-1">Project Details</label>
               <textarea v-model="form.details" rows="3" placeholder="Tell me about your vision..." class="w-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-lg py-3 px-4 text-xs text-black dark:text-white focus:ring-1 focus:ring-[#007BFE] dark:focus:ring-[#1dbf73] focus:border-transparent outline-none transition-all resize-none"></textarea>
             </div>

             <button 
               type="submit"
               :disabled="isSubmitting"
               class="w-full py-4 mt-4 bg-[#007BFE] dark:bg-[#1dbf73] text-white dark:text-black font-black text-sm rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-black/5"
             >
               <span v-if="isSubmitting">Sending Inquiry...</span>
               <span v-else-if="isSuccess">Inquiry Sent!</span>
               <span v-else>Send Message</span>
             </button>
           </form>
        </div>

      </div>

    </div>

    <!-- Pagination placeholder -->
    <!-- <div class="mt-20 flex justify-center items-center gap-2">
       <button class="w-10 h-10 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-[#007BFE] dark:hover:text-[#1dbf73]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
       <button class="w-8 h-8 rounded-full bg-[#007BFE] dark:bg-[#1dbf73] text-white dark:text-black text-sm font-black">1</button>
       <button class="w-8 h-8 rounded-full text-gray-400 dark:text-white text-sm font-bold hover:bg-gray-100 dark:hover:bg-white/10">2</button>
       <button class="w-8 h-8 rounded-full text-gray-400 dark:text-white text-sm font-bold hover:bg-gray-100 dark:hover:bg-white/10">3</button>
       <button class="w-10 h-10 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
    </div> -->

  </section>
</template>

<style scoped>
.line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; line-clamp: 1; }
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-clamp: 2; }
.line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; line-clamp: 3; }

/* Custom Font logic if needed, but Tailwind handles most */
section {
  font-family: 'Inter', 'Outfit', sans-serif;
}
</style>
