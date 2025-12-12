# Dokumentasi Halaman About Me

## File yang Dibuat

### 1. AboutMeView.vue

Lokasi: src/pages/AboutMeView.vue

Halaman profil personal yang menampilkan informasi pribadis.

### 2. profile.jpg

src/assets/images/profile.jpg

Foto profil untuk halaman About Me.

## Konfigurasi Route

Route baru ditambahkan:

- Path: /about-me
- Name: about-me
- Component: AboutMeView.vue

## Perubahan NavBar

Menu navigasi baru ditambahkan:

- Label: About Me
- Path: /about-me

## Data Profil

Nama: Rayhan Marcello Ananda Purnomo
NIM: 11231086
Program Studi: Informatika
Kampus: Universitas Multimedia Nusantara

## Skills

Skills yang ditampilkan dengan progress bar:
{ name: "express", level: 70 },
{ name: "JavaScript", level: 85 },
{ name: "Vue.js", level: 70 },
{ name: "Python", level: 50 },
{ name: "golang", level: 80 },
{ name: "MySQL", level: 85 },

## Fitur Responsive

Halaman menggunakan vue directive:

Desktop dan Tablet: Foto profil ditampilkan di kolom kiri dengan sticky positioning.

Event listener resize ditambahkan untuk update real-time saat ukuran window berubah.

## Styling

Menggunakan Tailwind CSS dengan konsistensi desiain yang sama seperti yang sebelumnya

## Struktur Layout

Grid 3 kolom di desktop:

- Kolom 1: Foto profil dan info dasar
- Kolom 2-3: Informasi detail dan skills

Mobile: vertikal tanpa foto profil
