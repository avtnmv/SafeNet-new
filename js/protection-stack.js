// Protection cards animation with GSAP
document.addEventListener('DOMContentLoaded', function() {
    // Регистрируем ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    const cards = gsap.utils.toArray('.protection__card');
    
    if (cards.length === 0) return;
    
    // Адаптивная анимация, которая подстраивается под скорость скролла
    cards.forEach((card, index) => {
        gsap.fromTo(card, 
            {
                opacity: 0,
                y: 100,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    end: "top 60%",
                    scrub: 1, // Анимация синхронизирована со скоростью скролла
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
});
