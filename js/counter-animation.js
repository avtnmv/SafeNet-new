// Counter Animation Script
class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.our-mission__card-number');
        this.hasAnimated = false;
        this.init();
    }

    init() {
        // Create intersection observer to trigger animation when cards come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.animateCounters();
                    this.hasAnimated = true;
                }
            });
        }, {
            threshold: 0.5 // Trigger when 50% of the element is visible
        });

        // Observe the cards container
        const cardsContainer = document.querySelector('.our-mission__cards');
        if (cardsContainer) {
            observer.observe(cardsContainer);
        }
    }

    animateCounters() {
        // Starting values and final values for each counter
        const animationData = [
            { start: 85, end: 168 },  // First counter
            { start: 12, end: 48 },   // Second counter  
            { start: 8, end: 36 },    // Third counter
            { start: 45, end: 86 }    // Fourth counter (percentage)
        ];
        
        this.counters.forEach((counter, index) => {
            const currentValue = counter.textContent.trim();
            const isPercentage = currentValue.includes('%');
            const data = animationData[index];
            
            if (data) {
                // Set initial value to starting value
                counter.textContent = isPercentage ? data.start + '%' : data.start;
                
                // Animate counter to final value (slower duration)
                this.animateNumber(counter, data.start, data.end, isPercentage, 3500 + (index * 300));
            }
        });
    }

    animateNumber(element, start, end, isPercentage, duration) {
        const startTime = Date.now();
        
        const updateCounter = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Use easeOut animation curve for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(start + (end - start) * easeOut);
            
            element.textContent = isPercentage ? currentValue + '%' : currentValue;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                // Ensure final value is exact
                element.textContent = isPercentage ? end + '%' : end;
            }
        };
        
        requestAnimationFrame(updateCounter);
    }
}

// Initialize counter animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CounterAnimation();
});
