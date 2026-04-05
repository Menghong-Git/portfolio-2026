<template>
  <section class="min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-white py-32 px-6 sm:px-12 lg:px-24 font-['Inter',_'Outfit',_sans-serif] transition-colors duration-500">
    <div class="max-w-[1500px] mx-auto">
      
      <!-- Page Header -->
      <header class="mb-24 text-center">
        <h1 class="text-[80px] md:text-[150px] lg:text-[220px] font-black uppercase tracking-tighter leading-none opacity-90 select-none animate-in fade-in slide-in-from-bottom-8 duration-1000">
          CONTACT
        </h1>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
        <!-- Left Side: Info & Socials -->
        <div class="space-y-16">
          <div class="space-y-8 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-full backdrop-blur-sm bg-white/5 dark:bg-white/10 shadow-sm transition-all hover:border-[#1dbf73]/50">
              <span class="w-2.5 h-2.5 rounded-full bg-[#1dbf73] animate-pulse shadow-[0_0_8px_#1dbf73]"></span>
              <span class="text-[10px] font-black tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400">BOOK A CALL</span>
            </div>
            <h2 class="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#007BFE] to-[#007BFE]/50 dark:from-[#1dbf73] dark:to-white/40">
              I'd love to hear <br/> from you!
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <!-- Email Card -->
            <div class="group p-10 bg-gray-50 dark:bg-[#111] rounded-[40px] border border-gray-100 dark:border-white/5 transition-all hover:translate-y-[-8px] hover:shadow-2xl">
              <p class="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 text-center">EMAIL ME</p>
              <h3 class="text-xl font-bold text-center break-all underline decoration-[#1dbf73] decoration-2 underline-offset-4 decoration-0 hover:decoration-4 transition-all">
                <a href="mailto:hello@menghong.com" class="hover:text-[#1dbf73] transition-colors">penmenghong99@gmail.com</a>
              </h3>
            </div>

            <!-- Social Card -->
            <div class="group p-10 bg-gray-50 dark:bg-[#111] rounded-[40px] border border-gray-100 dark:border-white/5 transition-all hover:translate-y-[-8px] hover:shadow-2xl">
              <p class="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6 text-center">FIND ME</p>
              <div class="flex flex-wrap justify-center gap-4">
                <a v-for="social in socials" :key="social.name" :href="social.link" class="w-10 h-10 rounded-full bg-[#1dbf73] text-black flex items-center justify-center transition-all hover:scale-110 hover:rotate-12 active:scale-95 shadow-lg shadow-[#1dbf73]/20">
                   <svg v-if="social.icon === 'fb'" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                   <svg v-if="social.icon === 'in'" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                   <svg v-if="social.icon === 'tw'" viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                   <svg v-if="social.icon === 'ig'" viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side: Contact Form -->
        <div class="p-10 bg-gray-50/50 dark:bg-[#111] rounded-[50px] border border-gray-100 dark:border-white/5 backdrop-blur-3xl shadow-3xl">
          <form @submit.prevent="sendToTelegram" class="space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Name -->
              <div class="space-y-2">
                <label class="text-[10px] uppercase font-black text-gray-400 dark:text-gray-500 ml-2">Your Name *</label>
                <input v-model="form.name" type="text" placeholder="John Doe" class="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-5 px-6 text-sm focus:ring-2 focus:ring-[#1dbf73] outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600" required />
              </div>
              <!-- Organization -->
              <div class="space-y-2">
                <label class="text-[10px] uppercase font-black text-gray-400 dark:text-gray-500 ml-2">Organization</label>
                <input v-model="form.organization" type="text" placeholder="Acme Inc." class="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-5 px-6 text-sm focus:ring-2 focus:ring-[#1dbf73] outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600" />
              </div>
            </div>

            <!-- Email -->
            <div class="space-y-2">
              <label class="text-[10px] uppercase font-black text-gray-400 dark:text-gray-500 ml-2">Email Address *</label>
              <input v-model="form.email" type="email" placeholder="john@example.com" class="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-5 px-6 text-sm focus:ring-2 focus:ring-[#1dbf73] outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600" required />
            </div>

            <!-- Description -->
            <div class="space-y-2">
              <label class="text-[10px] uppercase font-black text-gray-400 dark:text-gray-500 ml-2">How can i help? *</label>
              <textarea v-model="form.description" rows="5" placeholder="Tell me about your project or inquiry..." class="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl py-5 px-6 text-sm focus:ring-2 focus:ring-[#1dbf73] outline-none transition-all resize-none placeholder:text-gray-300 dark:placeholder:text-gray-600" required></textarea>
            </div>

            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full py-5 bg-[#1dbf73] text-black font-black text-sm uppercase tracking-[0.2em] rounded-2xl hover:bg-white transition-all transform hover:scale-[1.02] active:scale-98 shadow-2xl shadow-[#1dbf73]/20 disabled:opacity-50"
            >
              <span v-if="isSubmitting">Sending Message...</span>
              <span v-else-if="isSuccess">Message Sent!</span>
              <span v-else>Send Message</span>
            </button>
          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  organization: '',
  email: '',
  description: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

const socials = [
  { name: 'Behance', icon: 'tw', link: '#' },
  { name: 'Dribbble', icon: 'ig', link: '#' },
  { name: 'Linkedin', icon: 'in', link: '#' },
  { name: 'Instagram', icon: 'fb', link: '#' }
]

const sendToTelegram = async () => {
  if (!form.value.email || !form.value.name) return
  
  isSubmitting.value = true
  const token = '8728568269:AAEKgxEEGB7hI0FVCRrHgLjGcP6deOllbck'
  const chatId = '1402335407'
  
  const message = `📬 *New Website Contact!*\n\n` +
    `👤 *Name:* ${form.value.name}\n` +
    `📧 *Email:* ${form.value.email}\n` +
    `🏢 *Organization:* ${form.value.organization || 'N/A'}\n\n` +
    `📝 *Message:* ${form.value.description || 'No message provided'}\n\n` +
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
        organization: '',
        email: '',
        description: ''
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

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in-from-bottom-8 {
  from { transform: translateY(2rem); }
  to { transform: translateY(0); }
}

.animate-in {
  animation-duration: 0.7s;
  animation-fill-mode: both;
}

.fade-in { animation-name: fade-in; }
.slide-in-from-bottom-8 { animation-name: slide-in-from-bottom-8; }

header h1 {
  letter-spacing: -0.08em;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.05);
}

.dark header h1 {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
}

h2 {
  letter-spacing: -0.06em;
}
</style>
