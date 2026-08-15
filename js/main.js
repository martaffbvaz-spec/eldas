/* =========================================================
   DEEP AWARENESS
   MAIN.JS
========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       LOADER
    ====================================================== */

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hidden");

        }, 1800);

    }


    /* =====================================================
       MENU
    ====================================================== */

    const menuOpen = document.getElementById("menuOpen");
    const menuClose = document.getElementById("menuClose");
    const menuOverlay = document.getElementById("menuOverlay");


    if (menuOpen && menuOverlay) {

        menuOpen.addEventListener("click", () => {

            menuOverlay.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    }


    if (menuClose && menuOverlay) {

        menuClose.addEventListener("click", () => {

            menuOverlay.classList.remove("active");

            document.body.style.overflow = "";

        });

    }


    /* =====================================================
       FECHAR MENU AO CLICAR NUM LINK
    ====================================================== */

    const menuLinks = document.querySelectorAll(".menu-links a");

    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (menuOverlay) {

                menuOverlay.classList.remove("active");

                document.body.style.overflow = "";

            }

        });

    });


    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealElements = document.querySelectorAll(".reveal");


    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       ESC PARA FECHAR MENU
    ====================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (menuOverlay) {

                menuOverlay.classList.remove("active");

                document.body.style.overflow = "";

            }

        }

    });


});