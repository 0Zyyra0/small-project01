document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    const headerOffset = () => (header ? header.offsetHeight + 14 : 0);

    function setActiveLink() {
        const scrollPos = window.scrollY + headerOffset() + 20;

        let current = "hero";
        sections.forEach((section) => {
            if (scrollPos >= section.offsetTop) {
                current = section.id;
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (!href || !href.startsWith("#")) return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (!target) return;

            const top = target.getBoundingClientRect().top + window.scrollY - headerOffset();
            window.scrollTo({
                top,
                behavior: "smooth"
            });
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, {
        threshold: 0.18
    });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    window.addEventListener("scroll", setActiveLink, { passive: true });
    window.addEventListener("resize", setActiveLink);
    setActiveLink();

    const form = document.querySelector("#contact form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for your message! This is a fan tribute site."); // English alert
            form.reset();
        });
    }
});
