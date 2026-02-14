# 🚀 Quick Start Guide

## Cara Install & Jalankan (5 Menit)

### Step 1: Install Node.js
Jika belum punya, download dan install Node.js dari:
https://nodejs.org/ (pilih versi LTS)

### Step 2: Extract & Masuk ke Folder
```bash
cd valentine-bearliann
```

### Step 3: Install Dependencies
```bash
npm install
```
*Tunggu beberapa menit untuk download semua packages*

### Step 4: Jalankan!
```bash
npm run dev
```

### Step 5: Buka Browser
Buka: `http://localhost:3000`

**DONE! 🎉**

---

## Cara Kustomisasi Cepat

### 1. Ganti Foto (5 menit)
- Buka: `src/components/Gallery.jsx`
- Edit array `images`, ganti URL dengan foto kalian
- Bisa pakai online image URL atau upload ke folder `public/`

### 2. Ganti Musik (3 menit)
- Buka: `src/components/MusicPlayer.jsx`
- Edit array `playlist`, ganti URL dengan lagu favorit
- Upload MP3 ke folder `public/music/`

### 3. Ganti Pesan Love (10 menit)
- Buka: `src/components/LoveMessage.jsx`
- Edit variable `loveMessage` dengan kata-kata kalian
- Edit array `reasons` dengan 10 alasan kenapa kamu cinta dia

### 4. Ganti Nama (2 menit)
Cari dan replace di semua file:
- "Bearliann" → Nama panggilan pacar kamu
- "Estriana Ardiya Berlian" → Nama lengkap pacar kamu

---

## Deploy Online (GRATIS)

### Option 1: Vercel (Tercepat - 2 menit)
1. Daftar di https://vercel.com (gratis)
2. Install: `npm i -g vercel`
3. Jalankan: `vercel`
4. Done! Dapat link online

### Option 2: Netlify (Mudah - 3 menit)
1. Build dulu: `npm run build`
2. Buka: https://app.netlify.com/drop
3. Drag folder `dist` ke website
4. Done! Dapat link online

---

## Butuh Bantuan?

### Error: "npm not found"
→ Install Node.js dulu dari nodejs.org

### Error: "Cannot find module"
→ Jalankan: `rm -rf node_modules && npm install`

### Foto tidak muncul
→ Pastikan path foto benar: `/images/nama-foto.jpg`

### Website lambat
→ Normal di development mode, akan cepat setelah di-build

---

## Checklist Sebelum Kasih ke Pacar

- [ ] Sudah ganti semua nama
- [ ] Sudah upload foto kalian
- [ ] Sudah isi pesan love yang personal
- [ ] Sudah test semua fitur (gallery, music, games, message)
- [ ] Sudah deploy online
- [ ] Sudah test di HP (responsive)

**Good luck! Semoga pacarmu suka! 💕**
