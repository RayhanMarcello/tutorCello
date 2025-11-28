<template>
  <div class="video-player-container bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
    <div class="relative group">
      <!-- Video Element -->
      <video
        ref="videoRef"
        class="w-full aspect-video bg-black"
        @click="togglePlay"
        @timeupdate="updateProgress"
        @loadedmetadata="onVideoLoaded"
      >
        <source :src="videoSrc" type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <!-- Play/Pause Overlay -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-50"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-50"
      >
        <div
          v-if="showPlayButton"
          class="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
          @click="togglePlay"
        >
          <div class="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
            <svg v-if="!isPlaying" class="w-10 h-10 text-indigo-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <svg v-else class="w-10 h-10 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          </div>
        </div>
      </transition>

      <!-- Custom Controls -->
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <!-- Progress Bar -->
        <div class="mb-3">
          <div 
            class="w-full h-1.5 bg-white/30 rounded-full cursor-pointer group/progress"
            @click="seek"
            ref="progressBarRef"
          >
            <div 
              class="h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full relative group-hover/progress:h-2 transition-all duration-200"
              :style="{ width: progress + '%' }"
            >
              <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100"></div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <!-- Left Controls -->
          <div class="flex items-center space-x-3">
            <!-- Play/Pause Button -->
            <button
              @click="togglePlay"
              class="w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded-full transition-all duration-200"
            >
              <svg v-if="!isPlaying" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <svg v-else class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            </button>

            <!-- Rewind Button -->
            <button
              @click="rewind"
              class="w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded-full transition-all duration-200"
              title="Rewind 10s"
            >
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"/>
              </svg>
            </button>

            <!-- Forward Button -->
            <button
              @click="forward"
              class="w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded-full transition-all duration-200"
              title="Forward 10s"
            >
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"/>
              </svg>
            </button>

            <!-- Time Display -->
            <div class="text-white text-sm font-medium">
              {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
            </div>
          </div>

          <!-- Right Controls -->
          <div class="flex items-center space-x-3">
            <!-- Volume Control -->
            <div class="flex items-center space-x-2 group/volume">
              <button
                @click="toggleMute"
                class="w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded-full transition-all duration-200"
              >
                <svg v-if="!isMuted && volume > 0.5" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                </svg>
                <svg v-else-if="!isMuted && volume > 0" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                </svg>
                <svg v-else class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>
                </svg>
              </button>
              
              <input
                type="range"
                min="0"
                max="100"
                v-model="volume"
                @input="changeVolume"
                class="w-0 opacity-0 group-hover/volume:w-20 group-hover/volume:opacity-100 transition-all duration-300 accent-indigo-500"
              />
            </div>

            <!-- Fullscreen Button -->
            <button
              @click="toggleFullscreen"
              class="w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded-full transition-all duration-200"
            >
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  videoSrc: {
    type: String,
    default: ''
  }
})

const videoRef = ref(null)
const progressBarRef = ref(null)
const isPlaying = ref(false)
const showPlayButton = ref(true)
const currentTime = ref(0)
const duration = ref(0)
const progress = ref(0)
const volume = ref(100)
const isMuted = ref(false)

let hideButtonTimeout = null

const togglePlay = () => {
  if (!videoRef.value) return
  
  if (isPlaying.value) {
    videoRef.value.pause()
  } else {
    videoRef.value.play()
  }
  isPlaying.value = !isPlaying.value
  
  // Show button temporarily
  showPlayButton.value = true
  clearTimeout(hideButtonTimeout)
  hideButtonTimeout = setTimeout(() => {
    if (isPlaying.value) {
      showPlayButton.value = false
    }
  }, 1000)
}

const rewind = () => {
  if (!videoRef.value) return
  videoRef.value.currentTime = Math.max(0, videoRef.value.currentTime - 10)
}

const forward = () => {
  if (!videoRef.value) return
  videoRef.value.currentTime = Math.min(duration.value, videoRef.value.currentTime + 10)
}

const updateProgress = () => {
  if (!videoRef.value) return
  currentTime.value = videoRef.value.currentTime
  progress.value = (currentTime.value / duration.value) * 100
}

const onVideoLoaded = () => {
  if (!videoRef.value) return
  duration.value = videoRef.value.duration
}

const seek = (event) => {
  if (!videoRef.value || !progressBarRef.value) return
  const rect = progressBarRef.value.getBoundingClientRect()
  const pos = (event.clientX - rect.left) / rect.width
  videoRef.value.currentTime = pos * duration.value
}

const changeVolume = () => {
  if (!videoRef.value) return
  videoRef.value.volume = volume.value / 100
  isMuted.value = volume.value === 0
}

const toggleMute = () => {
  if (!videoRef.value) return
  isMuted.value = !isMuted.value
  videoRef.value.muted = isMuted.value
}

const toggleFullscreen = () => {
  if (!videoRef.value) return
  if (!document.fullscreenElement) {
    videoRef.value.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

const formatTime = (seconds) => {
  if (isNaN(seconds)) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.volume = volume.value / 100
  }
})

onUnmounted(() => {
  clearTimeout(hideButtonTimeout)
})
</script>
