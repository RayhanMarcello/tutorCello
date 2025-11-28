# 📁 Folder Assets

Folder ini untuk menyimpan file statis seperti gambar, icon, font, dll.

## 🖼️ Cara Menambahkan & Menggunakan Gambar

### 1. Tambahkan Gambar ke Folder ini

Simpan file gambar Anda di folder `src/assets/`:

- `src/assets/my-image.jpg`
- `src/assets/logo.png`
- `src/assets/banner.webp`

### 2. Import Gambar di Komponen Vue

```vue
<script setup>
import myImage from "../assets/my-image.jpg";
import logo from "../assets/logo.png";
</script>

<template>
  <img :src="myImage" alt="Deskripsi gambar" />
  <img :src="logo" alt="Logo" class="w-32 h-32" />
</template>
```

### 3. Contoh di Home.vue

File `src/views/Home.vue` sudah menggunakan gambar dari assets:

```javascript
import logoImage from "../assets/vue.svg";
```

**Untuk mengganti gambar:**

1. Tambahkan file gambar baru ke folder `src/assets/` (contoh: `my-logo.png`)
2. Edit file `src/views/Home.vue`
3. Ganti import: `import logoImage from "../assets/my-logo.png";`
4. Gambar akan otomatis berubah!

## 📝 Format Gambar yang Didukung

- `.jpg` / `.jpeg`
- `.png`
- `.gif`
- `.svg`
- `.webp`

## 💡 Tips

- Gunakan gambar dengan ukuran yang sesuai (jangan terlalu besar)
- Format `.webp` lebih ringan dari `.jpg`
- Format `.svg` bagus untuk logo/icon karena scalable
- Beri nama file yang jelas, contoh: `logo-perusahaan.png`
