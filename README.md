# TutorCello - Bimbel Online Platform

Website bimbel online "TutorCello" dengan Vue.js dan Tailwind CSS.

## Fitur

- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Navigasi bar dengan user account info
- ✅ Routing halaman (5 halaman)
- ✅ Video player kustom (play, pause, forward, backward)
- ✅ Dynamic routing untuk detail kelas
- ✅ Animasi dan transisi yang smooth
- ✅ Layout menggunakan Flexbox dan Grid

## Halaman

1. **Beranda** (`/`) - Hero section, fitur, kelas populer
2. **Kelas** (`/kelas`) - Daftar kelas dengan filter dan search
3. **Detail Kelas** (`/kelas/:id`) - Dynamic route dengan video player
4. **Harga** (`/harga`) - Paket berlangganan dengan perbandingan
5. **Tentang** (`/tentang`) - Informasi tentang TutorCello

## Menambahkan Aset

### Gambar
- Letakkan gambar di folder `src/assets/images/`
- Update component yang menggunakannya

### Video Pembelajaran
- Letakkan file MP4 di folder `src/assets/videos/`
- Update path di `ClassDetailView.vue`:
  ```javascript
  previewVideoPath.value = '/src/assets/videos/nama-video.mp4'
  ```

## Menjalankan Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Struktur Folder

```
src/
├── assets/
│   ├── images/      # Tempat gambar (Hero, dll)
│   └── videos/      # Tempat video pembelajaran MP4
├── components/
│   ├── NavBar.vue   # Navigation bar
│   └── VideoPlayer.vue  # Custom video player
├── pages/
│   ├── HomeView.vue         # Halaman Beranda
│   ├── ClassesView.vue      # Halaman Kelas
│   ├── ClassDetailView.vue  # Halaman Detail Kelas
│   ├── PricingView.vue      # Halaman Harga
│   └── AboutView.vue        # Halaman Tentang
├── router/
│   └── index.js     # Vue Router configuration
├── styles/
│   └── main.css     # Tailwind & custom styles
├── App.vue          # Root component
└── main.js          # Entry point
```

## Custom Video Player

Video player mendukung:
- ▶️ Play / Pause
- ⏪ Rewind 10 detik
- ⏩ Forward 10 detik
- 🔊 Volume control
- 📺 Fullscreen
- ⏱️ Progress bar dengan seek

## Teknologi

- Vue 3 (Composition API)
- Vue Router 4
- Tailwind CSS 3
- Vite

---

Dibuat dengan ❤️ untuk pendidikan Indonesia
