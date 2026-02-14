# 💕 Valentine Website for Bearliann

Website Valentine interaktif dengan tema retro gaming untuk Estriana Ardiya Berlian (Bearliann) yang dibuat menggunakan React + Vite.

## ✨ Fitur-Fitur

### 1. 🎮 Loading Screen
- Animasi loading bar yang smooth
- Tombol START untuk memulai

### 2. 📱 Dashboard Menu
- 5 menu utama dengan desain retro gaming
- Animasi hover yang menarik
- Theme warna pink Valentine

### 3. 📸 Gallery
- Grid foto 2 kolom responsive
- Lightbox untuk melihat foto full screen
- Caption dan tanggal untuk setiap foto
- Animasi zoom dan overlay effect

### 4. 🎵 Music Player
- Playlist lagu romantis
- Album art berputar saat playing
- Progress bar dan kontrol play/pause/next/prev
- Daftar playlist yang bisa diklik

### 5. 🎮 Tetris Game
- Game Tetris klasik yang playable
- Keyboard controls (Arrow keys)
- Mobile controls dengan tombol
- Score tracking dan level
- Game over modal

### 6. 🧠 Memory Game
- Card matching game dengan emoji love
- Flip animation 3D
- Move counter
- Win celebration modal

### 7. 💕 Love Message
- Amplop animasi yang bisa dibuka
- Typing effect untuk pesan romantis
- 10 alasan kenapa I love you
- Floating hearts background

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js versi 16 atau lebih baru
- npm atau yarn

### Instalasi

1. **Masuk ke folder project:**
```bash
cd valentine-bearliann
```

2. **Install dependencies:**
```bash
npm install
```

3. **Jalankan development server:**
```bash
npm run dev
```

4. **Buka browser dan akses:**
```
http://localhost:3000
```

## 📝 Cara Kustomisasi

### 1. Mengganti Foto di Gallery
Edit file `src/components/Gallery.jsx`:
```javascript
const images = [
  {
    id: 1,
    url: '/path/to/your/image1.jpg',  // Ganti dengan path foto kalian
    caption: 'Caption foto',
    date: 'Tanggal'
  },
  // Tambahkan foto lainnya...
]
```

### 2. Mengganti Playlist Musik
Edit file `src/components/MusicPlayer.jsx`:
```javascript
const playlist = [
  {
    title: 'Judul Lagu',
    artist: 'Nama Artis',
    url: '/path/to/music.mp3'  // Ganti dengan path file musik
  },
  // Tambahkan lagu lainnya...
]
```

### 3. Mengedit Love Message
Edit file `src/components/LoveMessage.jsx`:
```javascript
const loveMessage = `
Dear Bearliann,

[Tulis pesan romantis kalian di sini...]

- Your Special Someone
`

const reasons = [
  '💕 Alasan pertama...',
  '💖 Alasan kedua...',
  // Tambahkan 10 alasan...
]
```

### 4. Mengganti Nama
Cari dan replace semua "Bearliann" atau "Estriana Ardiya Berlian" dengan nama pacar kamu di:
- `src/components/DeviceFrame.jsx`
- `src/components/Dashboard.jsx`
- `src/components/LoveMessage.jsx`
- `src/components/TetrisGame.jsx`
- `src/components/MemoryGame.jsx`

### 5. Mengganti Warna Theme
Edit file `src/index.css` bagian `:root`:
```css
:root {
  --pink-accent: #ff6b9d;     /* Warna pink utama */
  --heart-red: #ff1744;       /* Warna merah hati */
  --green-primary: #00ff41;   /* Warna hijau retro */
  --yellow-accent: #ffd700;   /* Warna kuning aksen */
  /* Ubah sesuai selera */
}
```

## 🎨 Teknologi yang Digunakan

- **React 18** - Library UI modern
- **Vite** - Build tool yang super cepat
- **CSS3** - Styling dengan animasi modern
- **Press Start 2P Font** - Font retro gaming dari Google Fonts

## 📦 Build untuk Production

Untuk membuat versi production:

```bash
npm run build
```

File hasil build akan ada di folder `dist/` dan siap di-deploy ke hosting.

## 🌐 Deploy ke Hosting

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Jalankan: `vercel`
3. Follow the prompts

### Netlify
1. Drag & drop folder `dist/` ke [Netlify Drop](https://app.netlify.com/drop)

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Tambahkan di package.json:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Jalankan: `npm run deploy`

## 💡 Tips & Trik

1. **Untuk foto yang lebih baik:** Upload foto ke folder `public/images/` lalu reference dengan `/images/foto.jpg`
2. **Musik lokal:** Letakkan file MP3 di folder `public/music/` lalu reference dengan `/music/lagu.mp3`
3. **Tambah fitur baru:** Buat komponen baru di folder `src/components/` dan tambahkan menu di Dashboard
4. **Mobile friendly:** Website sudah responsive, test di berbagai device

## 🐛 Troubleshooting

**Q: npm install gagal?**
A: Coba hapus folder `node_modules` dan file `package-lock.json`, lalu run `npm install` lagi

**Q: Foto tidak muncul?**
A: Pastikan path foto sudah benar. Untuk file di folder public, gunakan path `/nama-file.jpg`

**Q: Musik tidak play?**
A: Beberapa browser memerlukan user interaction sebelum bisa play audio. Pastikan user sudah klik tombol play.

**Q: Build error?**
A: Pastikan semua dependencies sudah terinstall dengan `npm install`

## 📱 Screenshot Preview

Website ini memiliki:
- ✅ Retro gaming aesthetic dengan CRT effect
- ✅ Animasi smooth dan interactive
- ✅ Fully responsive (mobile & desktop)
- ✅ 5+ interactive features
- ✅ Custom Game Boy device frame
- ✅ Floating hearts background effect

## 💖 Pesan untuk Developer

Website ini dibuat dengan penuh cinta untuk Bearliann. Semoga website ini bisa membuat hari Valentine-nya lebih special dan berkesan!

Feel free untuk customize sesuka hati. Yang penting dari hati! 💕

---

Made with 💖 by a passionate developer for the most special person in the world.

**Happy Valentine's Day, Bearliann!** 🎉💕✨
