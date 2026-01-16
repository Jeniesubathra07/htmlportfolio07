document.addEventListener('DOMContentLoaded', () => {

    // 1. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            } else {
                // Optional: remove 'active' if you want it to hide again when scrolling up
                // reveal.classList.remove('active'); 
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load to show elements already in view
    revealOnScroll();


    // 2. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a.nav-link[href^="#"], .btn[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Account for sticky navbar height (approx 60-70px)
                const headerOffset = 70;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // 3. Close Mobile Menu on Click
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                
                // Check if navbar is open (Bootstrap adds 'show' class)
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click(); // Simulate click to close
                }
            }
        });
    });

});
