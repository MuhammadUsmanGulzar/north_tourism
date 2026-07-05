// Register ScrollTrigger
if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

window.initAnimationsJS = function() {
    // ==========================================
    // 2. MAGNETIC BUTTONS
    // ==========================================
    const magnetics = document.querySelectorAll(".btn, .navbar__social a, .footer__socials a");
    
    magnetics.forEach((btn) => {
        btn.addEventListener("mousemove", function(e) {
            const rect = this.getBoundingClientRect();
            const h = rect.width / 2;
            const w = rect.height / 2;
            
            // Calculate distance from center
            const x = e.clientX - rect.left - h;
            const y = e.clientY - rect.top - w;
            
            gsap.to(this, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.4,
                ease: "power2.out"
            });
        });
        
        btn.addEventListener("mouseleave", function() {
            gsap.to(this, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    // ==========================================
    // 3. GSAP SCROLL ANIMATIONS
    // ==========================================
    
    // Hero Text Reveal
    const heroTitle = document.querySelector(".hero__title");
    if (heroTitle) {
        // We will split by newlines first to preserve the line breaks
        const htmlContent = heroTitle.innerHTML;
        heroTitle.innerHTML = "";
        
        // Split by <br> or <br/>
        const lines = htmlContent.split(/<br\s*\/?>/i);
        
        lines.forEach((line, index) => {
            // Create a wrapper for the line to ensure it breaks
            const lineDiv = document.createElement("div");
            lineDiv.style.overflow = "hidden"; // for the slide up effect
            
            // Split the line by spaces to animate words
            const words = line.trim().split(/\s+/);
            words.forEach(word => {
                if (!word) return;
                const wordSpan = document.createElement("span");
                wordSpan.style.display = "inline-block";
                wordSpan.style.paddingRight = "15px";
                
                const innerSpan = document.createElement("span");
                innerSpan.style.display = "inline-block";
                innerSpan.innerText = word;
                
                wordSpan.appendChild(innerSpan);
                lineDiv.appendChild(wordSpan);
            });
            
            heroTitle.appendChild(lineDiv);
        });
        
        const childSpans = heroTitle.querySelectorAll("span span");
        if (childSpans.length > 0) {
            gsap.from(childSpans, {
                y: "100%",
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power4.out",
                delay: 0.2
            });
        }
    }

    // Subtitle & buttons reveal
    if (document.querySelector(".hero__subtitle")) {
        gsap.from(".hero__subtitle", {
            y: 20, opacity: 0, duration: 1, delay: 1, ease: "power3.out"
        });
    }
    if (document.querySelector(".hero__cta")) {
        gsap.from(".hero__cta", {
            y: 20, opacity: 0, duration: 1, delay: 1.2, ease: "power3.out"
        });
    }

    // Who We Are Images Parallax
    if (document.querySelector(".who-we-are") && document.querySelector(".who-we-are__images")) {
        gsap.to(".who-we-are__images", {
            scrollTrigger: {
                trigger: ".who-we-are",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            },
            y: -50,
            ease: "none"
        });
    }

    if (document.querySelector(".who-we-are__content") && document.querySelector(".value-item")) {
        gsap.from(".value-item", {
            scrollTrigger: {
                trigger: ".who-we-are__content",
                start: "top 80%",
            },
            x: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out"
        });
    }

    // CTA Section Reveal
    if (document.querySelector(".cta-section")) {
        const ctaTargets = [];
        if (document.querySelector(".cta-section__text")) ctaTargets.push(".cta-section__text");
        if (document.querySelector(".cta-section__buttons")) ctaTargets.push(".cta-section__buttons");
        
        if (ctaTargets.length > 0) {
            gsap.from(ctaTargets, {
                scrollTrigger: {
                    trigger: ".cta-section",
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }
    }
};

// Recalculate ScrollTrigger positions after all images load
window.addEventListener("load", () => {
    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
    }
});

// Initial run on script load
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(() => window.initAnimationsJS && window.initAnimationsJS(), 200);
} else {
  document.addEventListener('DOMContentLoaded', () => {
    window.initAnimationsJS && window.initAnimationsJS();
  });
}
