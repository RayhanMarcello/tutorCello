<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section
      class="hero-section relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 text-white">
      <div class="absolute inset-0 bg-black/10"></div>

      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-lg animate-pulse"></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/bg-gradient-to-br from-blue-900 via-blue-600 to-blue-30020 rounded-full blur-3xl animate-pulse"
          style="animation-delay: 1s"></div>
      </div>

      <div
        class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 animate-fade-in">
            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Belajar Lebih Mudah dengan
              <span
                class="block bg-gradient-to-r from-yellow-500 to-orange-200 bg-clip-text text-transparent">
                TutorCello
              </span>
            </h1>
            <p class="text-lg sm:text-xl text-white/90">
              Platform bimbel online terbaik dengan tutor berpengalaman, materi
              lengkap, dan metode pembelajaran yang interaktif.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link
                to="/kelas"
                class="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-yellow-300 hover:text-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl text-center">
                Mulai Belajar Sekarang
              </router-link>
              <router-link
                to="/tentang"
                class="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 font-semibold rounded-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300 text-center">
                Pelajari Lebih Lanjut
              </router-link>
            </div>
          </div>

          <!-- Hero Image Placeholder -->
          <div class="relative group">
            <div
              class="absolute inset-0 bg-gradient-to-br from-yellow-400 to-blue-500 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
            <div
              class="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <!-- Image placeholder - User will add their image here -->
              <img
                src="/src/assets/images/heroSection.png"
                alt="TutorCello Hero"
                class="aspect-video rounded-xl object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      <!-- Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0 transform translate-y-px">
        <svg
          class="w-full block"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#f8fafc" />
        </svg>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Mengapa Memilih TutorCello?
          </h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">
            Kami menyediakan pembelajaran berkualitas dengan berbagai keunggulan
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group">
            <div
              class="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              :class="feature.bgColor">
              <div v-html="feature.icon" class="w-8 h-8"></div>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">
              {{ feature.title }}
            </h3>
            <p class="text-slate-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Classes Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-12">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Kelas Populer
            </h2>
            <p class="text-lg text-slate-600">
              Bergabunglah dengan ribuan siswa lainnya
            </p>
          </div>
          <router-link
            to="/kelas"
            class="hidden sm:block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300">
            Lihat Semua Kelas
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="classItem in popularClasses"
            :key="classItem.id"
            @click="$router.push(`/kelas/${classItem.id}`)"
            class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
            <div
              class="aspect-video bg-gradient-to-br from-blue-600 to-cyan-500 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg
                  class="w-16 h-16 text-white/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div
                class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-indigo-600">
                {{ classItem.level }}
              </div>
            </div>
            <div class="p-6">
              <h3
                class="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                {{ classItem.title }}
              </h3>
              <p class="text-slate-600 mb-4 text-sm">
                {{ classItem.description }}
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-1 text-yellow-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="text-slate-700 font-semibold">{{
                    classItem.rating
                  }}</span>
                </div>
                <span class="text-lg font-bold text-indigo-600">{{
                  classItem.price
                }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:hidden text-center mt-8">
          <router-link
            to="/kelas"
            class="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300">
            Lihat Semua Kelas
          </router-link>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section
      class="py-20 bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center group">
            <div
              class="text-4xl sm:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
              {{ stat.value }}
            </div>
            <div class="text-white/80 text-sm sm:text-base">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Siap Memulai Perjalanan Belajar Anda?
        </h2>
        <p class="text-lg text-slate-600 mb-8">
          Bergabunglah dengan ribuan siswa yang telah meraih kesuksesan bersama
          TutorCello
        </p>
        <router-link
          to="/kelas"
          class="inline-block px-8 py-4 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-300 text-white font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          Daftar Sekarang
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const features = [
  {
    icon: '<svg class="text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>',
    title: "Materi Lengkap",
    description:
      "Materi pembelajaran yang komprehensif dan terstruktur dengan baik",
    bgColor: "bg-indigo-100",
  },
  {
    icon: '<svg class="text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',
    title: "Tutor Berpengalaman",
    description: "Diajar oleh tutor profesional dan berpengalaman di bidangnya",
    bgColor: "bg-red-200",
  },
  {
    icon: '<svg class="text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    title: "Video Pembelajaran",
    description:
      "Akses video pembelajaran berkualitas tinggi kapan saja dan dimana saja",
    bgColor: "bg-purple-100",
  },
];

const popularClasses = [
  {
    id: 1,
    title: "Matematika SMA",
    description:
      "Pelajari konsep matematika tingkat SMA dengan mudah dan menyenangkan",
    level: "SMA",
    rating: "4.9",
    price: "Rp 50.000",
  },
  {
    id: 2,
    title: "Fisika SMA",
    description: "Memahami konsep fisika dengan pendekatan yang praktis",
    level: "SMA",
    rating: "4.8",
    price: "Rp 50.000",
  },
  {
    id: 3,
    title: "Bahasa Inggris",
    description:
      "Tingkatkan kemampuan bahasa Inggris Anda dari dasar hingga mahir",
    level: "Semua Level",
    rating: "4.9",
    price: "Rp 80.000",
  },
];

const stats = [
  { value: "250+", label: "Siswa Aktif" },
  { value: "20", label: "Tutor Profesional" },
  { value: "55+", label: "Kelas Tersedia" },
  { value: "98%", label: "Tingkat Kepuasan" },
];
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
