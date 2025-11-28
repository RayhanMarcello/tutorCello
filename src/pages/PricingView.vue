<template>
  <div class="pricing-page min-h-screen bg-slate-50">
    <!-- Header Section -->
    <section class="bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">Pilih Paket yang Tepat</h1>
        <p class="text-xl text-white/90 mb-8">Investasi terbaik untuk masa depan pendidikan Anda</p>
        
        <!-- Toggle -->
        <div class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1">
          <button
            @click="billingCycle = 'monthly'"
            :class="billingCycle === 'monthly' ? 'bg-white text-indigo-600' : 'text-white'"
            class="px-6 py-2 rounded-full font-semibold transition-all duration-300"
          >
            Bulanan
          </button>
          <button
            @click="billingCycle = 'yearly'"
            :class="billingCycle === 'yearly' ? 'bg-white text-indigo-600' : 'text-white'"
            class="px-6 py-2 rounded-full font-semibold transition-all duration-300"
          >
            Tahunan
            <span class="ml-2 px-2 py-0.5 bg-yellow-400 text-slate-900 text-xs rounded-full">Hemat 20%</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Basic Plan -->
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Basic</h3>
            <p class="text-slate-600 mb-6">Untuk pemula yang ingin mencoba</p>
            
            <div class="mb-6">
              <div class="flex items-baseline">
                <span class="text-4xl font-bold text-slate-900">Rp {{ billingCycle === 'monthly' ? '99.000' : '950.000' }}</span>
                <span class="text-slate-500 ml-2">/{{ billingCycle === 'monthly' ? 'bulan' : 'tahun' }}</span>
              </div>
              <p v-if="billingCycle === 'yearly'" class="text-sm text-green-600 mt-1">Hemat Rp 238.000/tahun</p>
            </div>

            <ul class="space-y-4 mb-8">
              <li v-for="(feature, index) in basicFeatures" :key="index" class="flex items-start space-x-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-slate-600">{{ feature }}</span>
              </li>
            </ul>

            <button class="w-full px-6 py-3 bg-slate-100 text-slate-900 font-semibold rounded-xl hover:bg-slate-200 transform group-hover:scale-105 transition-all duration-300">
              Pilih Basic
            </button>
          </div>
        </div>

        <!-- Pro Plan (Popular) -->
        <div class="bg-yellow-500 rounded-2xl shadow-2xl transform scale-105 transition-all duration-300 overflow-hidden relative">
          <div class="absolute top-0 right-0 bg-yellow-400 text-slate-900 px-4 py-1 text-sm font-semibold rounded-bl-xl">
            Paling Populer
          </div>
          <div class="p-8 text-white">
            <h3 class="text-2xl font-bold mb-2">Pro</h3>
            <p class="text-white/90 mb-6">Untuk siswa yang serius belajar</p>
            
            <div class="mb-6">
              <div class="flex items-baseline">
                <span class="text-4xl font-bold">Rp {{ billingCycle === 'monthly' ? '199.000' : '1.900.000' }}</span>
                <span class="text-white/80 ml-2">/{{ billingCycle === 'monthly' ? 'bulan' : 'tahun' }}</span>
              </div>
              <p v-if="billingCycle === 'yearly'" class="text-sm text-yellow-300 mt-1">Hemat Rp 488.000/tahun</p>
            </div>

            <ul class="space-y-4 mb-8">
              <li v-for="(feature, index) in proFeatures" :key="index" class="flex items-start space-x-3">
                <svg class="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-white">{{ feature }}</span>
              </li>
            </ul>

            <button class="w-full px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-yellow-300 hover:text-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Pilih Pro
            </button>
          </div>
        </div>

        <!-- Premium Plan -->
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Premium</h3>
            <p class="text-slate-600 mb-6">Akses penuh tanpa batas</p>
            
            <div class="mb-6">
              <div class="flex items-baseline">
                <span class="text-4xl font-bold text-slate-900">Rp {{ billingCycle === 'monthly' ? '299.000' : '2.850.000' }}</span>
                <span class="text-slate-500 ml-2">/{{ billingCycle === 'monthly' ? 'bulan' : 'tahun' }}</span>
              </div>
              <p v-if="billingCycle === 'yearly'" class="text-sm text-green-600 mt-1">Hemat Rp 738.000/tahun</p>
            </div>

            <ul class="space-y-4 mb-8">
              <li v-for="(feature, index) in premiumFeatures" :key="index" class="flex items-start space-x-3">
                <svg class="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-slate-600">{{ feature }}</span>
              </li>
            </ul>

            <button class="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transform group-hover:scale-105 transition-all duration-300">
              Pilih Premium
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-3xl font-bold text-slate-900 text-center mb-12">Perbandingan Fitur Detail</h2>
      
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-6 py-4 text-left text-sm font-semibold text-slate-900">Fitur</th>
                <th class="px-6 py-4 text-center text-sm font-semibold text-slate-900">Basic</th>
                <th class="px-6 py-4 text-center text-sm font-semibold text-indigo-600 bg-indigo-50">Pro</th>
                <th class="px-6 py-4 text-center text-sm font-semibold text-slate-900">Premium</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr v-for="(row, index) in comparisonData" :key="index" class="hover:bg-slate-50 transition-colors duration-200">
                <td class="px-6 py-4 text-slate-700">{{ row.feature }}</td>
                <td class="px-6 py-4 text-center">
                  <component :is="getComparisonIcon(row.basic)" :class="getComparisonClass(row.basic)" />
                </td>
                <td class="px-6 py-4 text-center bg-indigo-50/50">
                  <component :is="getComparisonIcon(row.pro)" :class="getComparisonClass(row.pro)" />
                </td>
                <td class="px-6 py-4 text-center">
                  <component :is="getComparisonIcon(row.premium)" :class="getComparisonClass(row.premium)" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-3xl font-bold text-slate-900 text-center mb-12">Pertanyaan yang Sering Diajukan</h2>
      
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <button
            @click="toggleFAQ(index)"
            class="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
          >
            <span class="font-semibold text-slate-900 text-left">{{ faq.question }}</span>
            <svg
              class="w-5 h-5 text-slate-400 transition-transform duration-300"
              :class="{ 'rotate-180': expandedFAQs.includes(index) }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div v-if="expandedFAQs.includes(index)" class="px-6 py-4 bg-slate-50 border-t border-slate-200">
              <p class="text-slate-600">{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-br from-blue-900 via-blue-600 to-blue-500 text-white py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">Masih Ada Pertanyaan?</h2>
        <p class="text-xl text-white/90 mb-8">Tim kami siap membantu Anda memilih paket yang tepat</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-yellow-300 hover:text-indigo-700 transform hover:scale-105 transition-all duration-300">
            Hubungi Kami
          </button>
          <router-link
            to="/kelas"
            class="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 font-semibold rounded-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
          >
            Lihat Kelas
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, h } from 'vue'

const billingCycle = ref('monthly')
const expandedFAQs = ref([])

const basicFeatures = [
  'Akses 10 kelas pilihan',
  'Video pembelajaran HD',
  'Modul PDF',
  'Quiz dan latihan',
  'Sertifikat penyelesaian',
  'Forum diskusi'
]

const proFeatures = [
  'Semua fitur Basic',
  'Akses unlimited kelas',
  'Live Q&A mingguan',
  'Prioritas support',
  'Unduh materi offline',
  'Grup belajar eksklusif',
  'Konsultasi 1-on-1 bulanan'
]

const premiumFeatures = [
  'Semua fitur Pro',
  'Akses seumur hidup',
  'Konsultasi unlimited',
  'Bimbingan karir',
  'Akses early release',
  'Workshop eksklusif',
  'Mentoring personal',
  'Sertifikat premium'
]

const comparisonData = [
  { feature: 'Jumlah Kelas', basic: '10 kelas', pro: 'Unlimited', premium: 'Unlimited' },
  { feature: 'Video Pembelajaran', basic: true, pro: true, premium: true },
  { feature: 'Modul & Materi', basic: true, pro: true, premium: true },
  { feature: 'Live Q&A', basic: false, pro: 'Mingguan', premium: 'Unlimited' },
  { feature: 'Konsultasi 1-on-1', basic: false, pro: '1x/bulan', premium: 'Unlimited' },
  { feature: 'Unduh Offline', basic: false, pro: true, premium: true },
  { feature: 'Sertifikat', basic: 'Digital', pro: 'Digital', premium: 'Premium' },
  { feature: 'Support', basic: 'Email', pro: 'Prioritas', premium: 'VIP' },
  { feature: 'Workshop', basic: false, pro: false, premium: true },
  { feature: 'Mentoring', basic: false, pro: false, premium: true }
]

const faqs = [
  {
    question: 'Apakah saya bisa upgrade paket kapan saja?',
    answer: 'Ya, Anda bisa upgrade paket kapan saja. Perbedaan harga akan disesuaikan secara proporsional dengan sisa waktu langganan.'
  },
  {
    question: 'Bagaimana cara pembayaran?',
    answer: 'Kami menerima berbagai metode pembayaran termasuk transfer bank, e-wallet (GoPay, OVO, Dana), dan kartu kredit/debit.'
  },
  {
    question: 'Apakah ada garansi uang kembali?',
    answer: 'Ya, kami memberikan garansi 30 hari uang kembali tanpa syarat jika Anda tidak puas dengan layanan kami.'
  },
  {
    question: 'Berapa lama akses kelas berlaku?',
    answer: 'Untuk paket bulanan dan tahunan, akses berlaku sesuai periode yang dipilih. Untuk paket Premium, Anda mendapat akses seumur hidup.'
  },
  {
    question: 'Apakah tersedia paket untuk institusi/sekolah?',
    answer: 'Ya, kami memiliki paket khusus untuk institusi dan sekolah dengan harga spesial. Hubungi tim sales kami untuk informasi lebih lanjut.'
  }
]

const toggleFAQ = (index) => {
  const idx = expandedFAQs.value.indexOf(index)
  if (idx > -1) {
    expandedFAQs.value.splice(idx, 1)
  } else {
    expandedFAQs.value.push(index)
  }
}

const getComparisonIcon = (value) => {
  if (value === true) {
    return h('svg', {
      class: 'w-6 h-6 mx-auto text-green-500',
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M5 13l4 4L19 7'
      })
    ])
  } else if (value === false) {
    return h('svg', {
      class: 'w-6 h-6 mx-auto text-slate-300',
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M6 18L18 6M6 6l12 12'
      })
    ])
  } else {
    return h('span', { class: 'text-sm text-slate-700 font-medium' }, value)
  }
}

const getComparisonClass = (value) => {
  return ''
}
</script>
