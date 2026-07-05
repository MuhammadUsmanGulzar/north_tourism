window.initMainJS = function() {
  console.log('Initializing Main JS...');
  
  if (window._mainJSCleanup) {
    try {
      window._mainJSCleanup();
    } catch(e) {
      console.warn('Error running previous main.js cleanup:', e);
    }
  }

  const cleanups = [];
  window._mainJSCleanup = () => {
    cleanups.forEach(fn => fn());
  };

  const addGlobalListener = (target, type, listener, options) => {
    if (target) {
      target.addEventListener(type, listener, options);
      cleanups.push(() => target.removeEventListener(type, listener, options));
    }
  };
  
  /* ==========================================
   HERO VIDEO & NAVBAR SCROLL
========================================== */
const video = document.querySelector(".hero__video");
const soundBtn = document.querySelector(".hero__sound-toggle");
const icon = soundBtn ? soundBtn.querySelector("i") : null;

if (soundBtn && video && icon) {
    soundBtn.addEventListener("click", () => {
        if (video.muted) {
            video.muted = false;
            icon.className = "ri-volume-up-line";
        } else {
            video.muted = true;
            icon.className = "ri-volume-mute-line";
        }
    });
}

const header = document.querySelector('.header');
addGlobalListener(window, 'scroll', () => {
    if (video && !document.body.contains(video)) {
        return;
    }
    // Only toggle the navbar state when scrolling past the hero section
    if (window.scrollY > window.innerHeight - 100) {
        if (header) header.classList.add('header--scrolled');
        
        // Pause and mute video when exiting hero section
        if (video) {
            if (!video.paused) {
                try {
                    video.pause();
                } catch(e) {
                    // Ignore interruption errors
                }
            }
            if (!video.muted) {
                video.muted = true;
                if (icon) icon.className = "ri-volume-mute-line";
            }
        }
    } else {
        if (header) header.classList.remove('header--scrolled');
        
        // Resume video playback when in hero section
        if (video && video.paused) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Ignore autoplay or play interruption errors safely
                });
            }
        }
    }
});

/* ==========================================
   MOBILE MENU LOGIC
========================================== */
const hamburger = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu__links a");

if (hamburger && mobileMenu && mobileMenuClose) {
    // Open menu
    hamburger.addEventListener("click", () => {
        mobileMenu.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent scrolling
    });

    // Close menu
    mobileMenuClose.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
    });

    // Close menu on link click
    mobileMenuLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            document.body.style.overflow = "";
        });
    });
}

/* ==========================================
   FEATURED TRIPS SLIDER
========================================== */

const slider = document.querySelector('.featured-trips__slider');
const progressBar = document.querySelector('.featured-trips__progress-bar');
const progressContainer = document.querySelector('.featured-trips__progress-container');
const paginationContainer = document.querySelector('.featured-trips__pagination');
const tripCards = document.querySelectorAll('.trip-card');
let paginationItems = [];

if (slider && progressBar && paginationContainer && tripCards.length > 0) {
    // Generate pagination dots dynamically based on number of trip cards
    tripCards.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('featured-trips__pagination-item');
        if (index === 0) dot.classList.add('featured-trips__pagination-item--active');
        paginationContainer.appendChild(dot);
        paginationItems.push(dot);
    });
    
    // --- 1. Sync Progress Bar with Scroll ---
    const updateProgress = () => {
        const scrollWidth = slider.scrollWidth;
        const clientWidth = slider.clientWidth;
        const scrollLeft = slider.scrollLeft;

        // Calculate thumb width and position
        const thumbWidthPercentage = (clientWidth / scrollWidth) * 100;
        const thumbLeftPercentage = (scrollLeft / scrollWidth) * 100;

        progressBar.style.width = `${thumbWidthPercentage}%`;
        progressBar.style.left = `${thumbLeftPercentage}%`;

        // Update pagination dashes
        if (paginationItems.length > 0) {
            const totalItems = paginationItems.length;
            
            // Avoid division by zero if not scrollable
            if (scrollWidth <= clientWidth) {
                paginationItems.forEach((item, index) => {
                    item.classList.toggle('featured-trips__pagination-item--active', index === 0);
                });
                return;
            }

            const scrollRatio = scrollLeft / (scrollWidth - clientWidth);
            let activeIndex = Math.round(scrollRatio * (totalItems - 1));
            
            if (activeIndex < 0) activeIndex = 0;
            if (activeIndex >= totalItems) activeIndex = totalItems - 1;

            paginationItems.forEach((item, index) => {
                item.classList.toggle('featured-trips__pagination-item--active', index === activeIndex);
            });
        }
    };

    slider.addEventListener('scroll', updateProgress);
    addGlobalListener(window, 'load', updateProgress);
    addGlobalListener(window, 'resize', updateProgress);
    updateProgress();

    // --- 2. Make Progress Container Draggable / Clickable ---
    if (progressContainer) {
        progressContainer.style.cursor = 'pointer';
        
        let isDraggingBar = false;

        const scrollToPercentage = (e) => {
            const rect = progressContainer.getBoundingClientRect();
            let clickX = e.clientX - rect.left;
            
            // Restrict bounds so it doesn't scroll past ends if mouse moves off edges
            if (clickX < 0) clickX = 0;
            if (clickX > rect.width) clickX = rect.width;

            const percentage = clickX / rect.width;
            
            const scrollWidth = slider.scrollWidth;
            const clientWidth = slider.clientWidth;
            const maxScroll = scrollWidth - clientWidth;
            
            slider.scrollTo({
                left: percentage * maxScroll,
                behavior: isDraggingBar ? 'auto' : 'smooth'
            });
        };

        progressContainer.addEventListener('mousedown', (e) => {
            isDraggingBar = true;
            slider.style.scrollSnapType = 'none'; // Disable snapping during drag for smoothness
            scrollToPercentage(e);
        });

        addGlobalListener(window, 'mousemove', (e) => {
            if (!isDraggingBar) return;
            e.preventDefault();
            scrollToPercentage(e);
        });

        addGlobalListener(window, 'mouseup', () => {
            if (isDraggingBar) {
                isDraggingBar = false;
                slider.style.scrollSnapType = 'x mandatory'; // Re-enable snapping when mouse is released
            }
        });
    }

    // --- 3. Nav Buttons ---
    const prevBtn = document.getElementById('featuredTripsPrev');
    const nextBtn = document.getElementById('featuredTripsNext');

    if (prevBtn && nextBtn) {
        const scrollAmount = 340; // Approx 1 card + gap

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }


}

/* ==========================================
   TESTIMONIALS SLIDER (Auto-scroll & Drag)
========================================== */

const testimonialsSlider = document.querySelector('.testimonials__slider');
const testimonialsProgressBar = document.querySelector('.testimonials__progress-bar');
const testimonialsProgressContainer = document.querySelector('.testimonials__progress-container');

if (testimonialsSlider && testimonialsProgressBar) {
    
    let isHovering = false;
    let isDraggingCard = false;
    let isDraggingTestimonialsBar = false;
    let startX, scrollLeftPos;

    // --- 1. Sync Progress Bar with Scroll ---
    const updateTestimonialsProgress = () => {
        const scrollWidth = testimonialsSlider.scrollWidth;
        const clientWidth = testimonialsSlider.clientWidth;
        const scrollLeft = testimonialsSlider.scrollLeft;

        // Calculate thumb width and position
        const thumbWidthPercentage = (clientWidth / scrollWidth) * 100;
        const thumbLeftPercentage = (scrollLeft / scrollWidth) * 100;

        testimonialsProgressBar.style.width = `${thumbWidthPercentage}%`;
        testimonialsProgressBar.style.left = `${thumbLeftPercentage}%`;
    };

    // Initialize scroll position in the middle set for bi-directional looping
    testimonialsSlider.scrollLeft = 1440;

    testimonialsSlider.addEventListener('scroll', updateTestimonialsProgress);
    addGlobalListener(window, 'load', updateTestimonialsProgress);
    addGlobalListener(window, 'resize', updateTestimonialsProgress);
    updateTestimonialsProgress();

    // --- 2. Auto Scroll Logic ---
    let autoScrollRafId;
    const startAutoScroll = () => {
        if (!testimonialsSlider || !document.body.contains(testimonialsSlider)) {
            return;
        }
        if (!isHovering && !isDraggingTestimonialsBar && !isDraggingCard) {
            testimonialsSlider.scrollLeft += 1; // scroll speed
            
            // 1440px is exactly the width of the 3 original cards + gaps
            if (testimonialsSlider.scrollLeft >= 1440) {
                testimonialsSlider.scrollLeft = 0;
            }
        }
        autoScrollRafId = requestAnimationFrame(startAutoScroll);
    };
    
    autoScrollRafId = requestAnimationFrame(startAutoScroll);
    cleanups.push(() => {
        if (autoScrollRafId) {
            cancelAnimationFrame(autoScrollRafId);
        }
    });

    // Pause on hover
    testimonialsSlider.addEventListener('mouseenter', () => isHovering = true);
    testimonialsSlider.addEventListener('mouseleave', () => isHovering = false);

    // --- 3. Card Dragging Logic & Infinite Loop ---
    testimonialsSlider.addEventListener('mousedown', (e) => {
        isDraggingCard = true;
        startX = e.pageX - testimonialsSlider.offsetLeft;
        scrollLeftPos = testimonialsSlider.scrollLeft;
    });

    addGlobalListener(window, 'mousemove', (e) => {
        if (!isDraggingCard) return;
        e.preventDefault();
        const x = e.pageX - testimonialsSlider.offsetLeft;
        const walk = (x - startX) * 1.5; // Drag speed multiplier
        
        let newScrollLeft = scrollLeftPos - walk;
        
        // Infinite drag wrapping
        if (newScrollLeft <= 0) {
            newScrollLeft += 1440;
            scrollLeftPos += 1440;
        } else if (newScrollLeft >= 1440) {
            newScrollLeft -= 1440;
            scrollLeftPos -= 1440;
        }
        
        testimonialsSlider.scrollLeft = newScrollLeft;
    });

    addGlobalListener(window, 'mouseup', () => {
        isDraggingCard = false;
    });
    
    // Safety catch if mouse leaves slider while dragging
    testimonialsSlider.addEventListener('mouseleave', () => {
        isHovering = false;
        if(isDraggingCard) {
             isDraggingCard = false;
        }
    });

    // Native scroll wrap for trackpads
    testimonialsSlider.addEventListener('scroll', () => {
        if (!isDraggingCard && !isDraggingTestimonialsBar) {
            if (testimonialsSlider.scrollLeft <= 0) {
                testimonialsSlider.scrollLeft = 1440;
            } else if (testimonialsSlider.scrollLeft >= 1440) {
                testimonialsSlider.scrollLeft -= 1440;
            }
        }
        updateTestimonialsProgress();
    });

    // --- 4. Progress Container Draggable / Clickable ---
    if (testimonialsProgressContainer) {
        
        const scrollToPercentage = (e) => {
            const rect = testimonialsProgressContainer.getBoundingClientRect();
            let clickX = e.clientX - rect.left;
            
            if (clickX < 0) clickX = 0;
            if (clickX > rect.width) clickX = rect.width;

            const percentage = clickX / rect.width;
            
            const scrollWidth = testimonialsSlider.scrollWidth;
            const clientWidth = testimonialsSlider.clientWidth;
            const maxScroll = scrollWidth - clientWidth;
            
            testimonialsSlider.scrollTo({
                left: percentage * maxScroll,
                behavior: isDraggingTestimonialsBar ? 'auto' : 'smooth'
            });
        };

        testimonialsProgressContainer.addEventListener('mousedown', (e) => {
            isDraggingTestimonialsBar = true;
            scrollToPercentage(e);
        });

        addGlobalListener(window, 'mousemove', (e) => {
            if (!isDraggingTestimonialsBar) return;
            e.preventDefault();
            scrollToPercentage(e);
        });

        addGlobalListener(window, 'mouseup', () => {
            isDraggingTestimonialsBar = false;
        });
    }
}

/* ==========================================
   FAQ ACCORDION LOGIC
========================================== */
const faqHeaders = document.querySelectorAll('.faq-accordion__header');

faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');
        const body = item.querySelector('.faq-accordion__body');
        const icon = header.querySelector('.faq-icon');

        // Close all other items
        document.querySelectorAll('.faq-accordion__item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-accordion__body').style.display = 'none';
                otherItem.querySelector('.faq-icon').classList.remove('ri-subtract-line');
                otherItem.querySelector('.faq-icon').classList.add('ri-add-line');
            }
        });

        // Toggle current item
        if (isActive) {
            item.classList.remove('active');
            body.style.display = 'none';
            icon.classList.remove('ri-subtract-line');
            icon.classList.add('ri-add-line');
        } else {
            item.classList.add('active');
            body.style.display = 'block';
            icon.classList.remove('ri-add-line');
            icon.classList.add('ri-subtract-line');
        }
    });
});
};

// Initial run on script load
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(() => window.initMainJS && window.initMainJS(), 100);
} else {
  document.addEventListener('DOMContentLoaded', () => {
    window.initMainJS && window.initMainJS();
  });
}
