document.addEventListener("DOMContentLoaded",()=>{const m=document.querySelector(".menu"),n=document.querySelector("nav");m.onclick=()=>n.classList.toggle("open");document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>n.classList.remove("open"));const fs=document.querySelectorAll(".filters button"),ps=document.querySelectorAll(".product");fs.forEach(f=>f.onclick=()=>{fs.forEach(x=>x.classList.remove("active"));f.classList.add("active");const v=f.dataset.filter;ps.forEach(p=>p.classList.toggle("hide",v!=="all"&&p.dataset.cat!==v))});document.querySelectorAll(".fav").forEach(b=>b.onclick=()=>{b.classList.toggle("active");b.textContent=b.classList.contains("active")?"♥":"♡"});document.querySelectorAll("img").forEach(i=>i.onerror=()=>{if(!i.dataset.f){i.dataset.f=1;i.src="assets/01-maroon-abaya.png"}});const up=document.querySelector(".up");addEventListener("scroll",()=>up.classList.toggle("show",scrollY>450));up.onclick=()=>scrollTo({top:0,behavior:"smooth"})});

/* ================================
   AUTO SCROLL - MAIMORA
   Mulai setelah 2 detik tanpa aktivitas.
   Berhenti sementara saat user beraktivitas.
================================ */
const AUTO_SCROLL_DELAY = 2000;
const AUTO_SCROLL_SPEED = 0.75; // makin besar = makin cepat
let autoScrollTimer = null;
let autoScrollFrame = null;
let autoScrolling = false;
let autoScrollLastTime = 0;

function stopAutoScroll() {
  autoScrolling = false;

  if (autoScrollFrame !== null) {
    cancelAnimationFrame(autoScrollFrame);
    autoScrollFrame = null;
  }
}

function startAutoScroll() {
  if (autoScrolling) return;

  autoScrolling = true;
  autoScrollLastTime = performance.now();

  const step = (now) => {
    if (!autoScrolling) return;

    const delta = now - autoScrollLastTime;
    autoScrollLastTime = now;

    // Scroll pelan dan stabil berdasarkan waktu.
    window.scrollBy(0, AUTO_SCROLL_SPEED * (delta / 16.67));

    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;

    if (atBottom) {
      // Sampai bawah -> langsung kembali ke paling atas.
      window.scrollTo({ top: 0, behavior: "auto" });

      // Lanjut lagi dari atas secara perlahan.
      autoScrollLastTime = performance.now();
    }

    autoScrollFrame = requestAnimationFrame(step);
  };

  autoScrollFrame = requestAnimationFrame(step);
}

function resetAutoScrollTimer() {
  stopAutoScroll();

  clearTimeout(autoScrollTimer);
  autoScrollTimer = setTimeout(startAutoScroll, AUTO_SCROLL_DELAY);
}

// Aktivitas user yang dianggap sebagai "user masih aktif".
[
  "wheel",
  "touchstart",
  "touchmove",
  "pointerdown",
  "keydown",
  "mousemove"
].forEach((eventName) => {
  window.addEventListener(eventName, resetAutoScrollTimer, { passive: true });
});

// Klik link/tombol juga mereset timer.
document.addEventListener("click", resetAutoScrollTimer);

// Mulai hitung 2 detik sejak halaman dibuka.
resetAutoScrollTimer();

