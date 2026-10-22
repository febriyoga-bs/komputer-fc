# Komputer FC

Website komunitas sepak bola JTK Polban. Dibangun dari starter React/Vite yang diberikan, dengan data klub terpisah dari komponen, CSS responsif, dan font lokal. Frontend bisa dijalankan tanpa database atau kredensial.

## Menjalankan website

Prasyarat: Node.js 22+ dan npm.

```bash
cd /workspace/komputer-fc/frontend
npm ci
npm run dev -- --port 5173
```

Build produksi: `npm run build`. Uji hasil build: `npm run preview -- --host 0.0.0.0 --port 4173`.

## Struktur

```text
frontend/
  public/             favicon dan aset statis
  src/
    components/
      Header.jsx      navigasi desktop/mobile
      MatchCenter.jsx kartu pertandingan dan filter hasil
      Squad.jsx       daftar pemain, filter posisi, pencarian
      ui.jsx          komponen dasar, tautan, heading, dialog
    data/club.js      data skuad, skor, partner, cerita, navigasi
    App.jsx           komposisi halaman dan section editorial
    main.jsx          entry point dan font lokal
    style.css         token desain, layout, breakpoint, reduced motion
  scripts/smoke.cjs    uji interaksi browser
backend/              starter Rust/Axum/PostgreSQL dari ZIP
```

## Konten dan media

Skor, nama pemain, angkatan, pelatih, serta partner ditranskripsi dari screenshot Instagram yang diberikan. Tanggal pertandingan tidak ditambahkan karena tidak terlihat. Ejaan nama perlu diperiksa oleh pengelola klub sebelum publikasi. Naskah editorial ditulis untuk website berdasarkan konteks starter dan screenshot.

Screenshot grid bukan kumpulan foto asli. Visual stadion, jersey, kartu cerita, dan lambang saat ini berupa ilustrasi lokal, bukan foto tim atau logo resmi. Identitas sponsor tampil sebagai teks. Tidak ada foto Instagram yang diunduh atau disalin. Untuk menggantinya, simpan foto resmi di `frontend/public/images/`, gunakan pada komponen yang relevan dengan alt yang deskriptif, dan optimalkan ukuran sebelum publikasi. Jangan mengklaim ilustrasi sebagai dokumentasi pertandingan.

Tombol gabung, kolaborasi, dan Instagram menuju akun resmi `@komputerfc`. Cerita terbuka dalam dialog; tidak ada formulir atau alur admin palsu.

## Validasi

```bash
cd frontend
npm run build
# Jalankan dev server di terminal lain, lalu:
npm run test:smoke
```

Smoke test menggunakan Playwright dengan Chromium di `/usr/bin/chromium`. Untuk mesin lain, atur `CHROMIUM_PATH` ke executable Chromium. `TEST_URL` dapat diubah untuk menguji preview produksi. Pengujian mencakup filter skor, pencarian/posisi pemain, reset, dialog, menu mobile, error JavaScript, dan overflow pada lebar 320/390/768/1440 px.

## Backend starter

Backend belum menjadi CMS dan belum dihubungkan ke frontend. Data website saat ini statis; tidak ada login, unggah media, atau CRUD admin. Endpoint health backend membutuhkan PostgreSQL. Jika kelak dipakai:

1. Instal Rust dan PostgreSQL.
2. Siapkan database lokal dengan user khusus dan set `DATABASE_URL` secara aman.
3. Terapkan `backend/migrations/001_initial.sql` pada database baru.
4. Jalankan `cargo run` di `backend/` dan periksa `GET /api/v1/health` pada port 8080.

Backend tidak diperlukan untuk workflow frontend dan belum divalidasi pada pengerjaan ini. Jangan simpan kredensial dalam repository.
