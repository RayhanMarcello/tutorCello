<template>
  <div class="about-page min-h-screen bg-slate-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300  text-white py-20 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Tentang TutorCello</h1>
        <p class="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
          Platform bimbel online terpercaya yang telah membantu ribuan siswa mencapai prestasi terbaik mereka
        </p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
          <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Misi Kami</h2>
          <p class="text-slate-600 leading-relaxed">
            Memberikan akses pendidikan berkualitas tinggi kepada setiap siswa di Indonesia melalui platform pembelajaran online yang inovatif, terjangkau, dan mudah diakses kapan saja, di mana saja.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
          <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Visi Kami</h2>
          <p class="text-slate-600 leading-relaxed">
            Menjadi platform pembelajaran online terdepan di Indonesia yang memberdayakan generasi muda untuk meraih potensi maksimal mereka dan menciptakan masa depan yang lebih cerah.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="bg-white py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-8">Cerita Kami</h2>
        <div class="prose prose-lg max-w-none text-slate-600">
          <p class="mb-4">
            - bla bla bla
          </p>
          <p class="mb-4">
            - bla bla bla
          </p>
          <p>
            - bla bla bla

          </p>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-16 bg-gradient-to-br from-blue-900 via-blue-600 to-blue-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center transform hover:scale-110 transition-transform duration-300"
          >
            <div class="text-4xl sm:text-5xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-white/80 text-sm sm:text-base">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">Nilai-Nilai Kami</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div 
              class="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              :class="value.bgColor"
            >
              <div v-html="value.icon" class="w-7 h-7"></div>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">{{ value.title }}</h3>
            <p class="text-slate-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">Tim Kami</h2>
        <p class="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Bertemu dengan para ahli dan profesional yang berdedikasi untuk kesuksesan Anda
        </p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- <div
            v-for="(member, index) in team"
            :key="index"
            class="group"
          >
            <div class="bg-gradient-to-br rounded-2xl p-1 mb-4 transform group-hover:scale-105 transition-all duration-300"
                 :class="member.gradient">
              <div class="bg-white rounded-2xl p-6">
                <div 
                  class="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold bg-gradient-to-br"
                  :class="member.gradient"
                >
                  {{ member.initials }}
                </div>
                <h3 class="text-lg font-bold text-slate-900 text-center mb-1">{{ member.name }}</h3>
                <p class="text-sm text-indigo-600 text-center mb-3">{{ member.position }}</p>
                <p class="text-sm text-slate-600 text-center">{{ member.bio }}</p>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="py-16 bg-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-slate-900 text-center mb-12">Mitra Kami</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="n in 8"
            :key="n"
            class="bg-white rounded-xl p-8 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div class="text-center">
              <div class="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-2"></div>
              <p class="text-sm text-slate-500">Partner {{ n }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">Siap Bergabung dengan Kami?</h2>
        <p class="text-xl text-white/90 mb-8">
          Mulai perjalanan belajar Anda sekarang dan raih prestasi terbaik bersama TutorCello
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/kelas"
            class="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-yellow-300 hover:text-indigo-700 transform hover:scale-105 transition-all duration-300"
          >
            Mulai Belajar
          </router-link>
          <router-link
            to="/harga"
            class="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 font-semibold rounded-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
          >
            Lihat Harga
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats = [
  { value: '10,000+', label: 'Siswa Aktif' },
  { value: '500+', label: 'Tutor Profesional' },
  { value: '1,000+', label: 'Kelas Tersedia' },
  { value: '98%', label: 'Tingkat Kepuasan' }
]

const values = [
  {
    icon: '<svg class="text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>',
    title: 'Inovasi',
    description: 'Selalu berinovasi dalam metode pembelajaran untuk pengalaman belajar yang lebih baik',
    bgColor: 'bg-indigo-100'
  },
  {
    icon: '<svg class="text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>',
    title: 'Kualitas',
    description: 'Berkomitmen memberikan materi dan pengajaran berkualitas tinggi',
    bgColor: 'bg-green-100'
  },
  {
    icon: '<svg class="text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>',
    title: 'Empati',
    description: 'Memahami kebutuhan setiap siswa dan memberikan dukungan penuh',
    bgColor: 'bg-pink-100'
  },
  {
    icon: '<svg class="text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',
    title: 'Kolaborasi',
    description: 'Membangun komunitas belajar yang saling mendukung dan berbagi',
    bgColor: 'bg-yellow-100'
  },
  {
    icon: '<svg class="text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',
    title: 'Aksesibilitas',
    description: 'Membuat pendidikan berkualitas dapat diakses oleh semua orang',
    bgColor: 'bg-purple-100'
  },
  {
    icon: '<svg class="text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',
    title: 'Integritas',
    description: 'Beroperasi dengan transparansi dan kejujuran dalam setiap aspek',
    bgColor: 'bg-blue-100'
  }
]

const team = [
  {
    name: 'Budi Santoso',
    initials: 'BS',
    position: 'CEO & Founder',
    bio: 'Visioner di balik TutorCello',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    name: 'Siti Nurhaliza',
    initials: 'SN',
    position: 'Head of Education',
    bio: 'Expert dalam kurikulum pembelajaran',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    name: 'Ahmad Wijaya',
    initials: 'AW',
    position: 'CTO',
    bio: 'Memimpin inovasi teknologi',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Rina Kartika',
    initials: 'RK',
    position: 'Head of Marketing',
    bio: 'Menghubungkan dengan siswa',
    gradient: 'from-yellow-500 to-orange-500'
  }
]
</script>
