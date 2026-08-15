/* =========================================================
   DEEP AWARENESS
   GLOBAL JAVASCRIPT
========================================================= */


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", function () {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(function () {

            loader.classList.add("hidden");

        }, 1800);

    }

});


/* =========================================================
   NAVBAR
========================================================= */

const nav = document.querySelector(".nav");

if (nav) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            nav.classList.add("scrolled");

        } else {

            nav.classList.remove("scrolled");

        }

    });

}


/* =========================================================
   MENU
========================================================= */

const menuOpen =
    document.getElementById("menuOpen");

const menuClose =
    document.getElementById("menuClose");

const menuOverlay =
    document.getElementById("menuOverlay");


if (menuOpen && menuOverlay) {

    menuOpen.addEventListener("click", function () {

        menuOverlay.classList.add("open");

        document.body.style.overflow = "hidden";

    });

}


if (menuClose && menuOverlay) {

    menuClose.addEventListener("click", function () {

        menuOverlay.classList.remove("open");

        document.body.style.overflow = "";

    });

}


/* =========================================================
   MENU LINKS
========================================================= */

document
    .querySelectorAll(".menu-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            if (menuOverlay) {

                menuOverlay.classList.remove("open");

            }

            document.body.style.overflow = "";

        });

    });


/* =========================================================
   ESCAPE FECHA O MENU
========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (menuOverlay) {

            menuOverlay.classList.remove("open");

        }

        document.body.style.overflow = "";

    }

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if (revealElements.length > 0) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("visible");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });

}