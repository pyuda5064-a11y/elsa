// ============================
// MENU MOBILE
// ============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// ============================
// CLOSE MENU SETELAH KLIK
// ============================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


// ============================
// FORM KONTAK
// ============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Terima kasih, " + name +
        "! Pesan kamu berhasil dikirim."
    );

    contactForm.reset();

});


// ============================
// TAHUN FOOTER OTOMATIS
// ============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ============================
// ANIMASI SAAT SCROLL
// ============================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .info-box"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function(card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});
