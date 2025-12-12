<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 relative overflow-hidden py-8 md:py-0">
    <!-- Background Decorative Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full opacity-20 blur-3xl transform translate-x-32 -translate-y-32"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full opacity-20 blur-3xl transform -translate-x-32 translate-y-32"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left Side - Illustration and Branding -->
          <div class="text-center md:text-left">
            <!-- Hero Image -->
            <div class="mb-8 md:mb-10 flex justify-center md:justify-start">
              <div class="relative">
                <img 
                  src="../assets/images/heroSection.png" 
                  alt="Tutor Cello Illustration" 
                  class="w-full max-w-sm md:max-w-lg lg:max-w-2xl drop-shadow-2xl transform transition-transform hover:scale-105 duration-300"
                />
              </div>
            </div>

            <!-- Branding Text -->
            <div class="text-white">
              <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 drop-shadow-lg" style="font-family: 'Georgia', serif;">
                Tutor Cello
              </h1>
              <p class="text-lg md:text-2xl lg:text-3xl font-light tracking-wide drop-shadow-md">
                meraih mimpi bersama<br/>kak cello
              </p>
            </div>
          </div>

          <!-- Right Side - Login Form -->
          <div class="flex justify-center md:justify-end">
            <div class="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12 w-full max-w-md md:max-w-lg">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6 md:mb-8">Masuk</h2>
              
              <form @submit.prevent="handleLogin" class="space-y-5 md:space-y-6">
                <!-- Username Field -->
                <div>
                  <input 
                    v-model="formData.username"
                    type="text" 
                    placeholder="Username"
                    class="w-full px-4 md:px-5 py-3 md:py-4 text-base md:text-lg bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <!-- School Dropdown -->
                <div>
                  <select 
                    v-model="formData.school"
                    class="w-full px-4 md:px-5 py-3 md:py-4 text-base md:text-lg bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                    style="background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e'); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1em;"
                    required
                  >
                    <option value="" disabled selected>Pilih Nama Sekolah</option>
                    <option value="SMA Negeri 1 Balikpapan">SMA Negeri 1 Balikpapan</option>
                    <option value="SMA Negeri 5 Balikpapan">SMA Negeri 5 Balikpapan</option>
                    <option value="SMA Negeri 4 Balikpapan">SMA Negeri 4 Balikpapan</option>
                    <option value="SMA Negeri 7 Balikpapan">SMA Negeri 7 Balikpapan</option>
                    <option value="SMA Negeri 6 Balikpapan">SMA Negeri 6 Balikpapan</option>
                    <option value="SMA Negeri 10 Balikpapan">SMA Negeri 10 Balikpapan</option>
                    <option value="SMA Labschool Balikpapan">SMA Labschool Balikpapan</option>
                  </select>
                </div>

                <!-- Login Button -->
                <div>
                  <button 
                    type="submit"
                    class="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-3 md:py-4 text-base md:text-lg rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Masuk
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = ref({
  username: '',
  school: ''
})

const handleLogin = () => {
  // Validation
  if (!formData.value.username || !formData.value.school) {
    alert('Silakan isi semua field')
    return
  }

  // Store user data (you can use localStorage or Vuex/Pinia for state management)
  localStorage.setItem('userData', JSON.stringify({
    username: formData.value.username,
    school: formData.value.school
  }))

  // Navigate to home page
  router.push('/')
}
</script>

<style scoped>
/* Additional custom styles if needed */
select {
  color: #4a5568;
}

select option {
  padding: 10px;
}

select:invalid {
  color: #9ca3af;
}

select option:first-child {
  color: #9ca3af;
}

select option:not(:first-child) {
  color: #1f2937;
}
</style>
