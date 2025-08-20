// Protection and Advantages cards animation with GSAP
document.addEventListener('DOMContentLoaded', function() {
    // Регистрируем ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    const protectionCards = gsap.utils.toArray('.protection__card');
    const advantagesCards = gsap.utils.toArray('.advantages__card');
    
    // Функция для создания анимации карточек protection
    function animateProtectionCards(cards) {
        if (cards.length === 0) return;
        
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
    }
    
    // Функция для создания анимации карточек advantages (справа)
    function animateAdvantagesCards(cards) {
        if (cards.length === 0) return;
        
        // Проверяем размер экрана
        const isDesktop = window.innerWidth > 990;
        
        cards.forEach((card, index) => {
            gsap.fromTo(card, 
                {
                    opacity: 0,
                    x: 100,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    ease: "power2.out",
                    delay: isDesktop ? index * 0.3 : 0, // Задержка только на десктопе
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "top 60%",
                        scrub: isDesktop ? false : 1, // На десктопе без scrub, на мобиле со scrub
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }
    
    // Применяем анимацию к protection cards
    animateProtectionCards(protectionCards);
    
    // Применяем анимацию к advantages cards
    animateAdvantagesCards(advantagesCards);
});
