<template>
  <div class="classes-page min-h-screen bg-slate-50">
    <!-- Header Section -->
    <section class="bg-gradient-to-br from-blue-700 to-cyan-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">Pilih Kelas Anda</h1>
        <p class="text-xl text-white/90">Temukan kelas yang sesuai dengan kebutuhan belajar Anda</p>
      </div>
    </section>

    <!-- Filters & Search -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white rounded-xl shadow-md p-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <!-- Search -->
          <div class="md:col-span-2">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Cari kelas..."
                class="w-full px-4 py-3 pl-12 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
              />
              <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          <!-- Category Filter -->
          <select 
            v-model="selectedCategory"
            class="px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
          >
            <option value="">Semua Kategori</option>
            <option value="matematika">Matematika</option>
            <option value="fisika">Fisika</option>
            <option value="kimia">Kimia</option>
            <option value="bahasa">Bahasa</option>
            <option value="komputer">Komputer</option>
          </select>

          <!-- Level Filter -->
          <select 
            v-model="selectedLevel"
            class="px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
          >
            <option value="">Semua Level</option>
            <option value="SD">SD</option>
            <option value="SMP">SMP</option>
            <option value="SMA">SMA</option>
            <option value="Universitas">Universitas</option>
          </select>
        </div>
      </div>
    </section>

    <!-- Classes Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div class="mb-6">
        <p class="text-slate-600">
          Menampilkan <span class="font-semibold text-indigo-600">{{ filteredClasses.length }}</span> kelas
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="classItem in filteredClasses"
          :key="classItem.id"
          @click="$router.push(`/kelas/${classItem.id}`)"
          class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
        >
          <!-- Class Thumbnail -->
          <div class="aspect-video relative overflow-hidden"
               :class="classItem.bgGradient">
            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="w-20 h-20 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            
            <!-- Badges -->
            <div class="absolute top-4 left-4 right-4 flex justify-between items-start">
              <span class="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold"
                    :class="classItem.levelColor">
                {{ classItem.level }}
              </span>
              <span v-if="classItem.isBestseller" class="px-3 py-1 bg-yellow-400 rounded-full text-sm font-semibold text-slate-900">
                ⭐ Bestseller
              </span>
            </div>
          </div>

          <!-- Class Info -->
          <div class="p-6">
            <div class="flex items-center space-x-2 mb-2">
              <span class="px-2 py-1 bg-indigo-100 text-indigo-600 text-xs font-semibold rounded">
                {{ classItem.category }}
              </span>
              <span class="text-slate-500 text-sm">• {{ classItem.students }} siswa</span>
            </div>

            <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
              {{ classItem.title }}
            </h3>
            <p class="text-slate-600 mb-4 text-sm line-clamp-2">{{ classItem.description }}</p>

            <div class="flex items-center space-x-4 mb-4 text-sm text-slate-600">
              <div class="flex items-center space-x-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{{ classItem.duration }}</span>
              </div>
              <div class="flex items-center space-x-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{{ classItem.videos }} video</span>
              </div>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-slate-200">
              <div class="flex items-center space-x-1">
                <div class="flex items-center space-x-1 text-yellow-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="text-slate-700 font-semibold">{{ classItem.rating }}</span>
                </div>
                <span class="text-slate-500 text-sm">({{ classItem.reviews }})</span>
              </div>
              <span class="text-xl font-bold text-indigo-600">{{ classItem.price }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredClasses.length === 0" class="text-center py-20">
        <svg class="w-24 h-24 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 class="text-2xl font-bold text-slate-700 mb-2">Tidak ada kelas ditemukan</h3>
        <p class="text-slate-500">Coba ubah filter atau kata kunci pencarian Anda</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedLevel = ref('')

const allClasses = [
  {
    id: 1,
    title: 'Matematika SMA - kelas X',
    description: 'Pelajari konsep exponensial dari dasar hingga tingkat lanjut dengan metode yang mudah dipahami',
    category: 'matematika',
    level: 'SMA',
    levelColor: 'text-indigo-600',
    rating: '4.9',
    reviews: '20+',
    price: 'Rp 50.000',
    students: '50+',
    duration: '8 minggu',
    videos: '45',
    isBestseller: true,
    bgGradient: 'bg-gradient-to-br from-blue-600 to-cyan-500'
  },
  {
    id: 2,
    title: 'Fisika SMA - Mekanika',
    description: 'Memahami konsep mekanika dengan pendekatan praktis dan eksperimen virtual',
    category: 'fisika',
    level: 'SMA',
    levelColor: 'text-blue-600',
    rating: '4.8',
    reviews: '30+',
    price: 'Rp 50.000',
    students: '50+',
    duration: '6 minggu',
    videos: '38',
    isBestseller: false,
    bgGradient: 'bg-gradient-to-br from-blue-600 to-cyan-500'
  },
  {
    id: 3,
    title: 'Bahasa Inggris - TOEFL Preparation',
    description: 'Persiapan lengkap untuk ujian TOEFL dengan strategi dan latihan soal',
    category: 'bahasa',
    level: 'SMA',
    levelColor: 'text-green-600',
    rating: '4.9',
    reviews: '20+',
    price: 'Rp 60.000',
    students: '10+',
    duration: '10 minggu',
    videos: '52',
    isBestseller: false,
    bgGradient: 'bg-gradient-to-br from-blue-600 to-cyan-500'
  },
  {
    id: 4,
    title: 'Kimia SMA - Kimia Organik',
    description: 'Pelajari kimia organik dengan visualisasi 3D dan eksperimen interaktif',
    category: 'kimia',
    level: 'SMA',
    levelColor: 'text-pink-600',
    rating: '4.7',
    reviews: '167',
    price: 'Rp 475.000',
    students: '756',
    duration: '7 minggu',
    videos: '41',
    isBestseller: false,
    bgGradient: 'bg-gradient-to-br from-blue-600 to-cyan-500'
  },
  {
    id: 5,
    title: 'Matematika SMP - Aljabar',
    description: 'Kuasai konsep aljabar dengan metode pembelajaran yang interaktif',
    category: 'matematika',
    level: 'SMP',
    levelColor: 'text-yellow-600',
    rating: '4.8',
    reviews: '312',
    price: 'Rp 350.000',
    students: '1,567',
    duration: '6 minggu',
    videos: '36',
    isBestseller: false,
    bgGradient: 'bg-gradient-to-br from-blue-600 to-cyan-500'
  },
  {
    id: 6,
    title: 'Pemrograman Web - HTML & CSS',
    description: 'Belajar membuat website dari nol dengan HTML dan CSS',
    category: 'komputer',
    level: 'SMA',
    levelColor: 'text-purple-600',
    rating: '4.9',
    reviews: '523',
    price: 'Rp 550.000',
    students: '3,456',
    duration: '8 minggu',
    videos: '48',
    isBestseller: true,
    bgGradient: 'bg-gradient-to-br from-blue-600 to-cyan-500'
  },
  {
    id: 7,
    title: 'Fisika SMP - Dasar-Dasar Fisika',
    description: 'Pengenalan konsep fisika dasar dengan pendekatan yang menyenangkan',
    category: 'fisika',
    level: 'SMP',
    levelColor: 'text-cyan-600',
    rating: '4.7',
    reviews: '198',
    price: 'Rp 300.000',
    students: '892',
    duration: '5 minggu',
    videos: '30',
    isBestseller: false,
    bgGradient: 'bg-gradient-to-br from-blue-600 to-cyan-500'
  },
  {
    id: 8,
    title: 'Bahasa Indonesia - Sastra',
    description: 'Mempelajari sastra Indonesia dengan analisis karya-karya klasik',
    category: 'bahasa',
    level: 'SMA',
    levelColor: 'text-red-600',
    rating: '4.6',
    reviews: '145',
    price: 'Rp 325.000',
    students: '678',
    duration: '6 minggu',
    videos: '34',
    isBestseller: false,
    bgGradient: 'bg-gradient-to-br from-blue-600 to-cyan-500'
  },
  {
    id: 9,
    title: 'Matematika SD - Aritmatika',
    description: 'Belajar matematika dasar dengan cara yang fun dan mudah dipahami',
    category: 'matematika',
    level: 'SD',
    levelColor: 'text-lime-600',
    rating: '4.9',
    reviews: '421',
    price: 'Rp 250.000',
    students: '2,134',
    duration: '4 minggu',
    videos: '25',
    isBestseller: false,
    bgGradient: 'bg-gradient-to-br from-blue-600 to-cyan-500'
  }
]

const filteredClasses = computed(() => {
  return allClasses.filter(classItem => {
    const matchesSearch = classItem.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         classItem.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = !selectedCategory.value || classItem.category === selectedCategory.value
    const matchesLevel = !selectedLevel.value || classItem.level === selectedLevel.value
    
    return matchesSearch && matchesCategory && matchesLevel
  })
})
</script>
