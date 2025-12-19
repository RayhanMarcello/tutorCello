<template>
  <div v-if="classData" class="class-detail-page min-h-screen bg-slate-50">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          @click="$router.push('/kelas')"
          class="flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors duration-300">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"></path>
          </svg>
          <span>Kembali ke Daftar Kelas</span>
        </button>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <span
                class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                {{ classData.level }}
              </span>
              <span
                class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                {{ classData.category }}
              </span>
              <span
                v-if="classData.isBestseller"
                class="px-3 py-1 bg-yellow-400 text-slate-900 rounded-full text-sm font-semibold">
                ⭐ Bestseller
              </span>
            </div>

            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {{ classData.title }}
            </h1>
            <p class="text-lg text-white/90 mb-6">
              {{ classData.description }}
            </p>

            <div class="flex flex-wrap items-center gap-6 text-sm">
              <div class="flex items-center space-x-2">
                <div class="flex items-center space-x-1 text-yellow-400">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="font-semibold">{{ classData.rating }}</span>
                </div>
                <span class="text-white/80"
                  >({{ classData.reviews }} ulasan)</span
                >
              </div>
              <div class="flex items-center space-x-2">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
                <span>{{ classData.students }} siswa</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{{ classData.duration }}</span>
              </div>
            </div>
          </div>

          <!-- Price Card (Desktop) -->
          <div class="hidden lg:block">
            <div class="bg-white rounded-xl p-6 shadow-xl">
              <div class="text-3xl font-bold text-indigo-600 mb-4">
                {{ classData.price }}
              </div>
              <button
                class="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-3">
                Daftar Sekarang
              </button>
              <button
                class="w-full px-6 py-4 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-all duration-300">
                Tambah ke Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Video Player Section -->
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <h2 class="text-2xl font-bold text-slate-900 mb-4">
              Video Pembelajaran Preview
            </h2>
            <VideoPlayer :videoSrc="previewVideoPath" />
            <p class="text-sm text-slate-500 mt-4">
            </p>
          </div>

          <!-- About Class -->
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <h2 class="text-2xl font-bold text-slate-900 mb-4">
              Tentang Kelas
            </h2>
            <p class="text-slate-600 leading-relaxed mb-4">
              {{ classData.longDescription }}
            </p>
            <div class="space-y-3">
              <h3 class="font-semibold text-lg text-slate-900">
                Yang Akan Anda Pelajari:
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="(item, index) in classData.learningPoints"
                  :key="index"
                  class="flex items-start space-x-3">
                  <svg
                    class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-slate-600">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Curriculum -->
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <h2 class="text-2xl font-bold text-slate-900 mb-4">
              Kurikulum Kelas
            </h2>
            <div class="space-y-3">
              <div
                v-for="(module, index) in classData.curriculum"
                :key="index"
                class="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  @click="toggleModule(index)"
                  class="w-full px-4 py-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
                  <div class="flex items-center space-x-3">
                    <span
                      class="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {{ index + 1 }}
                    </span>
                    <div class="text-left">
                      <h3 class="font-semibold text-slate-900">
                        {{ module.title }}
                      </h3>
                      <p class="text-sm text-slate-500">
                        {{ module.lessons.length }} pelajaran •
                        {{ module.duration }}
                      </p>
                    </div>
                  </div>
                  <svg
                    class="w-5 h-5 text-slate-400 transition-transform duration-300"
                    :class="{ 'rotate-180': expandedModules.includes(index) }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <transition
                  enter-active-class="transition duration-300 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0">
                  <div
                    v-if="expandedModules.includes(index)"
                    class="px-4 py-3 bg-white space-y-2">
                    <div
                      v-for="(lesson, lessonIndex) in module.lessons"
                      :key="lessonIndex"
                      class="flex items-center justify-between py-2 px-3 hover:bg-slate-50 rounded-lg transition-colors duration-200">
                      <div class="flex items-center space-x-3">
                        <svg
                          class="w-5 h-5 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-slate-700">{{ lesson.title }}</span>
                      </div>
                      <span class="text-sm text-slate-500">{{
                        lesson.duration
                      }}</span>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>

          <!-- Instructor -->
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Instruktur</h2>
            <div class="flex items-start space-x-4">
              <div
                class="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                {{ classData.instructor.initials }}
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-900 mb-1">
                  {{ classData.instructor.name }}
                </h3>
                <p class="text-indigo-600 mb-3">
                  {{ classData.instructor.title }}
                </p>
                <p class="text-slate-600 leading-relaxed">
                  {{ classData.instructor.bio }}
                </p>
                <div
                  class="flex items-center space-x-6 mt-4 text-sm text-slate-600">
                  <div class="flex items-center space-x-2">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                    <span>{{ classData.instructor.students }} siswa</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span>{{ classData.instructor.rating }} rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column (Sticky Sidebar) -->
        <div class="lg:col-span-1">
          <div class="sticky top-20 space-y-6">
            <!-- Features -->
            <div class="bg-white rounded-xl p-6 shadow-lg">
              <h3 class="font-semibold text-lg text-slate-900 mb-4">
                Yang Didapatkan:
              </h3>
              <ul class="space-y-3">
                <li
                  v-for="(feature, index) in classData.features"
                  :key="index"
                  class="flex items-start space-x-3">
                  <svg
                    class="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-slate-600 text-sm">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Requirements -->
            <div class="bg-white rounded-xl p-6 shadow-lg">
              <h3 class="font-semibold text-lg text-slate-900 mb-4">
                Persyaratan:
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="(req, index) in classData.requirements"
                  :key="index"
                  class="flex items-start space-x-2">
                  <span class="text-slate-400 mt-1">•</span>
                  <span class="text-slate-600 text-sm">{{ req }}</span>
                </li>
              </ul>
            </div>

            <!-- Share -->
            <div class="bg-white rounded-xl p-6 shadow-lg">
              <h3 class="font-semibold text-lg text-slate-900 mb-4">
                Bagikan:
              </h3>
              <div class="flex space-x-3">
                <button
                  class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  <svg
                    class="w-5 h-5 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button
                  class="flex-1 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-300">
                  <svg
                    class="w-5 h-5 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button
                  class="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
                  <svg
                    class="w-5 h-5 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Price Footer -->
    <div
      class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-lg z-40">
      <div class="flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <p class="text-sm text-slate-500">Harga</p>
          <p class="text-2xl font-bold text-indigo-600">
            {{ classData.price }}
          </p>
        </div>
        <button
          class="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
          Daftar Sekarang
        </button>
      </div>
    </div>
  </div>

  <!-- 404 State -->
  <div v-else class="min-h-screen bg-slate-50 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-slate-300 mb-4">404</h1>
      <p class="text-xl text-slate-600 mb-8">Kelas tidak ditemukan</p>
      <router-link
        to="/kelas"
        class="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors duration-300">
        Kembali ke Daftar Kelas
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import VideoPlayer from "../components/VideoPlayer.vue";

const route = useRoute();
const expandedModules = ref([]);

// In a real app, this would come from an API or store
const classesData = {
  1: {
    id: 1,
    title: "Matematika SMA - Kalkulus",
    description:
      "Pelajari konsep kalkulus dari dasar hingga tingkat lanjut dengan metode yang mudah dipahami",
    longDescription:
      "Kelas ini dirancang khusus untuk siswa SMA yang ingin menguasai kalkulus dari tingkat dasar hingga lanjutan. Dengan pendekatan yang sistematis dan mudah dipahami, kami akan membantu Anda memahami konsep-konsep penting dalam kalkulus seperti limit, turunan, integral, dan aplikasinya dalam kehidupan nyata.",
    category: "Matematika",
    level: "SMA",
    rating: "4.9",
    reviews: "20+",
    price: "Rp 50.000",
    students: "50+",
    duration: "8 minggu",
    videos: "45",
    isBestseller: true,
    learningPoints: [
      "Memahami konsep limit dan kontinuitas fungsi",
      "Menguasai teknik diferensiasi (turunan)",
      "Memahami integral tak tentu dan tentu",
    ],
    curriculum: [
      {
        title: "Pengenalan Kalkulus & Limit",
        duration: "2 minggu",
        lessons: [
          { title: "Apa itu Kalkulus?", duration: "--:--" },
          { title: "Konsep Limit", duration: "--:--" },
          { title: "Limit Tak Hingga", duration: "--:--" },
          { title: "Latihan Soal Limit", duration: "--:--" },
        ],
      },
      {
        title: "Turunan Fungsi",
        duration: "3 minggu",
        lessons: [
          { title: "Pengertian Turunan", duration: "22:10" },
          { title: "Aturan Rantai", duration: "19:30" },
          { title: "Turunan Fungsi Trigonometri", duration: "24:15" },
          { title: "Aplikasi Turunan", duration: "21:45" },
        ],
      },
      {
        title: "Integral",
        duration: "3 minggu",
        lessons: [
          { title: "Integral Tak Tentu", duration: "20:00" },
          { title: "Integral Tentu", duration: "23:30" },
          { title: "Teknik Integrasi", duration: "26:15" },
          { title: "Aplikasi Integral", duration: "22:40" },
        ],
      },
    ],
    features: [
      "45 video pembelajaran HD",
      "Modul PDF untuk setiap materi",
      "Quiz dan latihan soal",
      "Sertifikat penyelesaian",
      "Akses selamanya",
      "Forum diskusi dengan tutor",
      "Live Q&A session mingguan",
    ],
    requirements: [
      "Memahami matematika dasar",
      "Akses internet stabil",
      "Semangat belajar yang tinggi",
    ],
    instructor: {},
  },

  2: {
    id: 2,
    title: "Fisika SMA - Mekanika",
    description:
      "Memahami konsep mekanika dengan pendekatan praktis dan eksperimen virtual",
    longDescription:
      "Kelas fisika yang menyenangkan dengan simulasi interaktif dan eksperimen virtual untuk membantu Anda memahami konsep mekanika klasik.",
    category: "Fisika",
    level: "SMA",
    rating: "4.8",
    reviews: "189",
    price: "Rp 450.000",
    students: "987",
    duration: "6 minggu",
    videos: "38",
    isBestseller: true,
    learningPoints: [
      "Memahami hukum Newton",
      "Konsep kinematika gerak",
      "Energi dan momentum",
      "Gerak melingkar",
      "Gravitasi universal",
      "Simulasi dan eksperimen virtual",
    ],
    curriculum: [
      {
        title: "Kinematika",
        duration: "2 minggu",
        lessons: [
          { title: "Gerak Lurus", duration: "18:30" },
          { title: "Gerak Parabola", duration: "22:15" },
          { title: "Gerak Melingkar", duration: "20:45" },
        ],
      },
      {
        title: "Dinamika",
        duration: "2 minggu",
        lessons: [
          { title: "Hukum Newton I & II", duration: "25:10" },
          { title: "Hukum Newton III", duration: "19:30" },
          { title: "Aplikasi Hukum Newton", duration: "23:15" },
        ],
      },
      {
        title: "Energi & Momentum",
        duration: "2 minggu",
        lessons: [
          { title: "Usaha dan Energi", duration: "21:00" },
          { title: "Momentum dan Impuls", duration: "20:30" },
          { title: "Tumbukan", duration: "24:15" },
        ],
      },
    ],
    features: [
      "38 video pembelajaran interaktif",
      "Simulasi fisika virtual",
      "Modul dan rangkuman materi",
      "Bank soal lengkap",
      "Sertifikat digital",
      "Grup diskusi eksklusif",
    ],
    requirements: [
      "Matematika dasar",
      "Komputer atau smartphone",
      "Minat dalam sains",
    ],
    instructor: {
      name: "Prof. Siti Rahmawati",
      initials: "SR",
      title: "Guru Besar Fisika UI",
      bio: "Ahli dalam bidang mekanika klasik dengan pengalaman mengajar lebih dari 20 tahun.",
      students: "4,567",
      rating: "4.8",
    },
  },
};

const classData = computed(() => {
  const id = parseInt(route.params.id);
  return classesData[id] || null;
});

const previewVideoPath = ref("");

const toggleModule = (index) => {
  const idx = expandedModules.value.indexOf(index);
  if (idx > -1) {
    expandedModules.value.splice(idx, 1);
  } else {
    expandedModules.value.push(index);
  }
};

onMounted(() => {
  // Set video path based on class ID
  const id = parseInt(route.params.id);

  // MAPPING VIDEO: Setiap kelas punya video sendiri
  const videoMap = {
    1: "/src/assets/videos/smala1.mp4", // Kelas Matematika (ID 1)
    2: "/src/assets/videos/fisika-mekanika.mp4", // Kelas Fisika (ID 2)
    3: "/src/assets/videos/bahasa-inggris.mp4", // Kelas Bahasa Inggris (ID 3)
    // Tambahkan mapping untuk kelas lain di bawah ini:
    // 4: '/src/assets/videos/kimia-organik.mp4',
    // 5: '/src/assets/videos/biologi-sel.mp4',
  };

  // Set video berdasarkan ID kelas
  previewVideoPath.value = videoMap[id] || "";

  /*
   * CARA PAKAI:
   * 1. Upload file MP4 Anda ke: src/assets/videos/
   * 2. Tambahkan mapping di videoMap di atas
   * 3. Format: ID: 'path/ke/video.mp4'
   * 4. Save dan refresh browser
   */
});
</script>
