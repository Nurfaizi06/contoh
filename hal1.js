window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const video = document.getElementById("loading-video");

  // Ketika video selesai diputar, hilangkan preloader
  video.addEventListener("ended", function () {
    preloader.classList.add("loader-hidden");
  });
});
/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");

const mobileMenu = document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


/* ================= CLOSE MOBILE MENU ================= */

const mobileLinks = document.querySelectorAll(
    ".mobile-menu a"
);


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".reveal"
);


function revealOnScroll() {

    const windowHeight = window.innerHeight;


    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;


        const revealPoint = 120;


        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


/* ================= NAVBAR SCROLL ================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "#262423";

    } else {

        navbar.style.background =
            "#262423";

    }

});


/* ================= HERO PARALLAX ================= */

const hero =
    document.querySelector(".hero");


window.addEventListener("scroll", () => {

    const scrollPosition =
        window.scrollY;


    if (scrollPosition < window.innerHeight) {

        hero.style.backgroundPosition =
            `center ${scrollPosition * 0.35}px`;

    }

});