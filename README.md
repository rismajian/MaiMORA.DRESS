# Dress MaiMORA — Modest Islamic Campus Edit (SEO Revision)

Website gamis muslimah Gen Z dengan konsep modest Islamic campus: koleksi, style guide, FAQ, wishlist sederhana, dan WhatsApp admin.

## Pembaruan revisi
- Menambahkan 3 artikel SEO lengkap di folder `artikel/`.
- Menambahkan bagian Style Journal di beranda dengan tautan internal ke setiap artikel.
- Menambahkan title/meta description, canonical, Open Graph, alt text, favicon SVG, dan Article JSON-LD.
- Memperbarui `robots.txt` dan `sitemap.xml`.
- Memperbaiki fallback gambar agar menggunakan aset yang memang ada di ZIP.
- Mengonversi foto produk PNG ke WebP untuk mengurangi ukuran transfer.
- Menambahkan lazy loading pada gambar di bawah lipatan halaman, prioritas tinggi pada gambar hero, serta atribut dimensi gambar untuk mengurangi layout shift.
- Mengganti URL canonical, Open Graph, robots, dan sitemap ke domain `https://maimora.my.id/` berdasarkan alamat yang diuji di PageSpeed Insights.
- Menyertakan `SEO-CHECKLIST.md` berisi 7 langkah SEO yang diterapkan.

## PENTING: URL dan domain
Revisi ini dikonfigurasi untuk domain `https://maimora.my.id/` sesuai alamat yang diuji. Pastikan domain tersebut memang domain produksi website kamu. Jika deploy ke domain lain, sesuaikan canonical, Open Graph URL, `robots.txt`, `sitemap.xml`, dan URL JSON-LD sebelum dipublikasikan.

## Deploy
1. Buat salinan cadangan website yang saat ini aktif.
2. Ekstrak ZIP ini.
3. Unggah/ganti file website dengan seluruh isi ZIP, termasuk folder `assets/` dan `artikel/`.
4. Pastikan file `.webp` ikut terunggah dan URL domain sesuai.
5. Buka kembali website, lalu jalankan PageSpeed Insights untuk Mobile dan Desktop.
6. Buka bagian Insights/Peluang setelah tes dan bandingkan hasilnya. Skor tidak dijamin mencapai angka tertentu karena dipengaruhi kondisi jaringan, perangkat simulasi, server, dan skrip pihak ketiga.

Catatan: pengaturan cache browser bergantung pada hosting/server. Jika hosting tidak mengizinkan konfigurasi header cache, perubahan `robots.txt` atau HTML saja tidak dapat memperbaiki header cache. Untuk audit yang lebih rinci, buka setiap baris peringatan PageSpeed dan ikuti URL/resource yang ditunjukkan.

## Artikel
1. `artikel/outfit-gamis-untuk-kuliah.html`
2. `artikel/cara-memilih-bahan-gamis.html`
3. `artikel/styling-abaya-modern.html`

## WhatsApp
Nomor admin yang tertanam: 0857-7525-2919. Template pesan: `HAI KAK, MAU DRESS MUSLIMAH......`

## Catatan tren
Topik artikel dipilih berdasarkan relevansi tren modest fashion 2026 yang diberitakan media dan tren produk kategori. Ini bukan data volume pencarian langsung atau jaminan ranking. Verifikasi performa setelah publikasi menggunakan Google Search Console dan Google Trends.


## Optimasi performa lanjutan
- Menghapus ketergantungan font eksternal Google Fonts pada halaman utama dan artikel agar mengurangi permintaan jaringan pihak ketiga. Tipografi menggunakan font sistem sebagai fallback cepat.
- Memprioritaskan preload gambar hero dan memuatnya secara eager agar browser lebih cepat menemukan elemen LCP.
- Skor PageSpeed tetap harus diuji ulang setelah publikasi; skor 100 tidak dapat dijamin karena dipengaruhi kondisi pengujian dan jaringan.
