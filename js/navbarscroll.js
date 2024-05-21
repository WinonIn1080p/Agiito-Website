const navbar = document.getElementById("navbar");
const banner = document.querySelector('.image-banner').offsetHeight; 

let lastScrollTop = 0;
window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Hide/Show Navbar on scroll
    const distance = scrollTop - lastScrollTop;
    const currentTop = parseInt(getComputedStyle(navbar).top.split("px")[0]);
    let amount = Math.max(
        Math.min(
            currentTop +
            (distance < 0 ? Math.abs(distance) : -Math.abs(distance)) * 60,
            0
        ),
        -90
    );
    navbar.style.top = `${amount}px`;

    // Change Navbar text color when the top of the navbar reaches the bottom of the image banner
    if (scrollTop > (banner - navbar.offsetHeight + 50)) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});