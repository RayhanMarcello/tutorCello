<template>
  <nav class="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo / Brand -->
        <router-link to="/" class="flex items-center space-x-2 group">
          <div
            class="w-10 h-10 bg-gradient-to-br bg-indigo-700 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">T</span>
          </div>
          <span
            class="text-2xl font-bold bg-blue-900 bg-clip-text text-transparent">
            TutorCello
          </span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-slate-700 hover:text-indigo-600 font-medium transition-all duration-300 relative group"
            active-class="text-indigo-600">
            {{ link.name }}
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </router-link>
        </div>

        <!-- User Account (Desktop) -->
        <div class="hidden md:flex items-center space-x-4 relative">
          <div
            @click="showUserMenu = !showUserMenu"
            class="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-full hover:shadow-md transition-all duration-300 cursor-pointer group">
            <div
              class="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <div class="text-left">
              <p class="text-sm font-semibold text-slate-800">{{ userName }}</p>
              <p class="text-xs text-slate-500">{{ userSchool }}</p>
            </div>
            <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          
          <!-- Dropdown Menu -->
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div
              v-if="showUserMenu"
              class="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
              <div class="px-4 py-3 border-b border-slate-200">
                <p class="text-sm font-semibold text-slate-800">{{ userName }}</p>
                <p class="text-xs text-slate-500">{{ userSchool }}</p>
              </div>
              <button
                @click="logout"
                class="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors duration-200 flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </transition>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300">
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6 text-slate-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg
            v-else
            class="w-6 h-6 text-slate-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0">
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-white border-t border-slate-200">
        <div class="px-4 py-3 space-y-3">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="block py-2 px-4 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-300"
            active-class="bg-indigo-50 text-indigo-600">
            {{ link.name }}
          </router-link>

          <!-- Mobile User Info -->
          <div class="pt-3 border-t border-slate-200">
            <div
              class="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-lg mb-2">
              <div
                class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-800">
                  {{ userName }}
                </p>
                <p class="text-xs text-slate-500">{{ userSchool }}</p>
              </div>
            </div>
            <button
              @click="logout"
              class="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 flex items-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileMenuOpen = ref(false);
const showUserMenu = ref(false);
const userData = ref(null);

const userName = computed(() => {
  if (userData.value && userData.value.username) {
    return userData.value.username
  }
  return "User"
});

const userSchool = computed(() => {
  if (userData.value && userData.value.school) {
    return userData.value.school
  }
  return ""
});

onMounted(() => {
  const storedData = localStorage.getItem('userData')
  if (storedData) {
    userData.value = JSON.parse(storedData)
  }
})

const logout = () => {
  localStorage.removeItem('userData')
  router.push('/login')
}

const navLinks = [
  { name: "Beranda", path: "/" },
  { name: "Kelas", path: "/kelas" },
  { name: "Harga", path: "/harga" },
  { name: "Tentang", path: "/tentang" },
];
</script>
