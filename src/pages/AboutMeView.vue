<template>
  <div class="min-h-screen bg-slate-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8 items-start">
        <div v-show="!isMobile" class="md:col-span-1">
          <div class="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
            <div class="flex flex-col items-center">
              <div
                class="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-indigo-100">
                <img
                  src="../assets/images/rayhan.jpg"
                  alt="Rayhan Marcello Ananda Purnomo"
                  class="w-full h-full object-cover" />
              </div>
              <h2 class="text-2xl font-bold text-gray-900 text-center mb-2">
                Rayhan Marcello Ananda Purnomo
              </h2>
              <p class="text-gray-600 text-center">NIM: 11231086</p>
            </div>
          </div>
        </div>

        <div class="md:col-span-2">
          <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-6 text-justify">
              saya adalah seorang mahasiswa di institut teknologi kalimantan
              dengan prodi informatika tahun 2023 semester 5. bidang minat saya
              yaitu backend developer menggunakan bahasa golang dengan library
              gin dan JavaScript dengan library express
            </h1>

            <div class="space-y-4 mb-8">
              <div class="flex items-start">
                <div
                  class="rounded-lg flex items-center justify-center mr-4 flex-shrink-0"></div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">
                    Nama Lengkap
                  </h3>
                  <p class="text-gray-600">Rayhan Marcello Ananda Purnomo</p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="rounded-lg flex items-center justify-center mr-4 flex-shrink-0"></div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">NIM</h3>
                  <p class="text-gray-600">11231086</p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="rounded-lg flex items-center justify-center mr-4 flex-shrink-0"></div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">
                    Program Studi
                  </h3>
                  <p class="text-gray-600">Informatika</p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="rounded-lg flex items-center justify-center mr-4 flex-shrink-0"></div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">
                    Kampus
                  </h3>
                  <p class="text-gray-600">institut teknologi kalimantan</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Skills</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="skill in skills"
                :key="skill.name"
                class="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors duration-200">
                <div class="flex items-center mb-3">
                  <div
                    class="rounded-lg flex items-center justify-center mr-3"></div>
                  <h3 class="text-lg font-semibold text-gray-900">
                    {{ skill.name }}
                  </h3>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-indigo-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                    :style="{ width: skill.level + '%' }"></div>
                </div>
                <p class="text-sm text-gray-600 mt-2">{{ skill.level }}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMobile = ref(false);

const skills = [
  { name: "express", level: 70 },
  { name: "JavaScript", level: 85 },
  { name: "Vue.js", level: 70 },
  { name: "Python", level: 50 },
  { name: "golang", level: 80 },
  { name: "MySQL", level: 85 },
];

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>
