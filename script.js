console.log("Website berhasil dibuka ❤️");

// =========================
// MUSIC PLAYER
// =========================

const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

if (music && playBtn) {

    playBtn.addEventListener("click", function () {

        if (music.paused) {

            music.play();

            playBtn.textContent = "⏸️";

        } else {

            music.pause();

            playBtn.textContent = "▶️";

        }

    });

}


// =========================
// LIGHTBOX + SLIDESHOW
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".gallery-item img");

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");

    const close = document.getElementById("closeLightbox");

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;


    // Buka foto
    images.forEach(function (img, index) {

        img.addEventListener("click", function () {

            currentIndex = index;

            lightboxImg.src = images[currentIndex].src;

            lightbox.style.display = "flex";

        });

    });


    // Foto sebelumnya
    if (prevBtn) {

        prevBtn.addEventListener("click", function (event) {

            event.stopPropagation();

            currentIndex--;

            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }

            lightboxImg.src = images[currentIndex].src;

        });

    }


    // Foto berikutnya
    if (nextBtn) {

        nextBtn.addEventListener("click", function (event) {

            event.stopPropagation();

            currentIndex++;

            if (currentIndex >= images.length) {
                currentIndex = 0;
            }

            lightboxImg.src = images[currentIndex].src;

        });

    }


    // Tutup
    if (close) {

        close.addEventListener("click", function () {

            lightbox.style.display = "none";

        });

    }


    // Klik area hitam
    if (lightbox) {

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {

                lightbox.style.display = "none";

            }

        });

    }


    // Keyboard
    document.addEventListener("keydown", function (event) {

        if (!lightbox || lightbox.style.display !== "flex") {
            return;
        }


        if (event.key === "ArrowLeft") {

            currentIndex--;

            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }

            lightboxImg.src = images[currentIndex].src;

        }


        if (event.key === "ArrowRight") {

            currentIndex++;

            if (currentIndex >= images.length) {
                currentIndex = 0;
            }

            lightboxImg.src = images[currentIndex].src;

        }


        if (event.key === "Escape") {

            lightbox.style.display = "none";

        }

    });

});


// =========================
// SURAT
// =========================

function bukaSurat() {

    const surat = document.getElementById("letter");

    if (surat) {

        surat.classList.toggle("show");

    }

}


// =========================
// SURPRISE / HADIAH
// =========================

function bukaHadiah() {

    const surprise = document.getElementById("surpriseMessage");

    if (surprise) {

        surprise.classList.toggle("show");

    }

}


// =========================
// COUNTER WAKTU
// =========================

function updateCounter() {

    const tanggalSpesial = new Date("2026-01-19T00:00:00");

    const sekarang = new Date();

    const selisih = sekarang - tanggalSpesial;

    const totalDetik = Math.floor(selisih / 1000);


    const hari = Math.floor(totalDetik / 86400);

    const jam = Math.floor(
        (totalDetik % 86400) / 3600
    );

    const menit = Math.floor(
        (totalDetik % 3600) / 60
    );

    const detik = totalDetik % 60;


    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");


    if (days) {
        days.textContent = hari;
    }

    if (hours) {
        hours.textContent = jam;
    }

    if (minutes) {
        minutes.textContent = menit;
    }

    if (seconds) {
        seconds.textContent = detik;
    }

}


// Jalankan counter
updateCounter();

setInterval(updateCounter, 1000);

