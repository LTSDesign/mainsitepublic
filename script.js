// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Landing page animation
gsap.from('.landing-content', { opacity: 0, y: 50, duration: 1, delay: 0.5 });

// Section entrance animations
gsap.from('.about-section', { opacity: 0, y: 50, duration: 1, delay: 1, scrollTrigger: '.about-section' });
gsap.from('.services-section', { opacity: 0, y: 50, duration: 1, delay: 1, scrollTrigger: '.services-section' });
gsap.from('.portfolio-section', { opacity: 0, y: 50, duration: 1, delay: 1, scrollTrigger: '.portfolio-section' });
gsap.from('.contact-section', { opacity: 0, y: 50, duration: 1, delay: 1, scrollTrigger: '.contact-section' });

// Project card hover animations
gsap.utils.toArray('.animated-project').forEach(project => {
    project.addEventListener('mouseenter', function () {
        gsap.to(project, { scale: 1.5, duration: 0.3 });
        gsap.to(project, { boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)', duration: 0.3 });
    });

    project.addEventListener('mouseleave', function () {
        gsap.to(project, { scale: 1, duration: 0.3 });
        gsap.to(project, { boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.3)', duration: 0.3 });
    });
});

