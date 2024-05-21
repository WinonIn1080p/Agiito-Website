document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo'); // Make sure this is correct
    const sections = document.querySelectorAll('.image-banner'); // And this

    const options = {
        root: null, // viewport as the bounding box
        threshold: 0.5, // trigger when 50% of the target is visible
    };

    let observer = new IntersectionObserver((entries, observer) => {
        // Track if any section is intersecting
        let anySectionIntersecting = false;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anySectionIntersecting = true;
                const color = entry.target.getAttribute('data-logo-color');
                logo.style.color = color; // Apply color
            }
        });

        // If no sections are intersecting, revert to default color
        if (!anySectionIntersecting) {
            logo.style.color = 'white'; // Adjust this to your default color
        }
    }, options);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
