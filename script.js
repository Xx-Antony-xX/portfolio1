document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero Animations
    const tl = gsap.timeline();

    tl.from('.logo', {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
        .from('.nav-links li', {
            y: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.badge', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-title', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.hero-text', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.hero-btns a', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.hero-visual', {
            x: 50,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        }, '-=1');

    // Floating Cards Animation
    gsap.to('.float-card-1', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });

    gsap.to('.float-card-2', {
        y: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 1
    });

    gsap.to('.float-card-3', {
        y: -15,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 0.5
    });

    gsap.to('.float-card-4', {
        y: 25,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 1.5
    });

    // Scroll Animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.from(section.querySelectorAll('.section-title, .section-header p'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });
    });

    // Stagger Grids (Services, Skills)
    const grids = ['.services-grid', '.skills-grid'];
    grids.forEach(grid => {
        if (document.querySelector(grid)) {
            gsap.from(document.querySelectorAll(`${grid} > *`), {
                scrollTrigger: {
                    trigger: grid,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }
    });

    // Portfolio Animation - no opacity to prevent transparency
    if (document.querySelector('.portfolio-grid')) {
        gsap.from(document.querySelectorAll('.portfolio-grid > *'), {
            scrollTrigger: {
                trigger: '.portfolio-grid',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
        });
    }

    // Timeline Animation - scroll down effect
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 60,
            duration: 0.8,
            ease: 'power3.out',
            delay: index * 0.1
        });
    });

    // About Image Reveal
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });

    // Stats Counter Animation
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const value = parseFloat(stat.innerText);
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            textContent: 0,
            duration: 2,
            ease: 'power1.out',
            snap: { textContent: 0.1 },
            onUpdate: function () {
                stat.innerText = Math.ceil(this.targets()[0].textContent) + (stat.innerText.includes('+') ? '+' : '');
            }
        });
    });

    // Custom Cursor Logic
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const links = document.querySelectorAll('a, button, .btn, .project-card, .service-card');

    if (cursor && follower) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });
        });

        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                follower.classList.add('active');
            });
            link.addEventListener('mouseleave', () => {
                follower.classList.remove('active');
            });
        });
    }
});
