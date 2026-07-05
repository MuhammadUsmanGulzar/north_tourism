import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // --- Navbar scroll behavior ---
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('header--scrolled');
        } else {
          header.classList.remove('header--scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // --- Mobile menu ---
    const hamburger = document.querySelector('#hamburger-menu, .navbar__hamburger');
    const mobileMenu = document.querySelector('#mobile-menu, .mobile-menu');
    const menuClose  = document.querySelector('#mobile-menu-close, .mobile-menu__close');

    const openMenu = () => {
      console.log('Opening mobile menu');
      mobileMenu?.classList.add('active');
    };
    const closeMenu = () => {
      console.log('Closing mobile menu');
      mobileMenu?.classList.remove('active');
    };

    hamburger?.addEventListener('click', openMenu);
    menuClose?.addEventListener('click', closeMenu);

    const links = document.querySelectorAll('.mobile-menu__links a');
    links.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // --- Hero bg load animation ---
    const heroBg = document.querySelector('[class$="hero__bg"]');
    if (heroBg) {
      heroBg.classList.add('abt-hero__bg--loaded');
    }

    // --- General FAQ accordion toggles ---
    const faqButtons = document.querySelectorAll('.faq-accordion__header, [class$="-faq__header-btn"]');
    faqButtons.forEach(btn => {
      const btnHandler = () => {
        const item = btn.closest('.faq-accordion__item, [class$="-faq__item"]');
        if (!item) return;
        const isOpen = item.classList.contains('active');
        const body = item.querySelector('.faq-accordion__body, [class$="-faq__body"]');
        const icon = btn.querySelector('.faq-icon');

        // Close siblings
        const section = btn.closest('section, .faq-preview-section');
        if (section) {
          section.querySelectorAll('.faq-accordion__item, [class$="-faq__item"]').forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
              const otherBody = otherItem.querySelector('.faq-accordion__body, [class$="-faq__body"]');
              if (otherBody) {
                (otherBody as HTMLElement).style.display = 'none';
              }
              const otherIcon = otherItem.querySelector('.faq-icon');
              if (otherIcon) {
                otherIcon.classList.remove('ri-subtract-line');
                otherIcon.classList.add('ri-add-line');
              }
            }
          });
        }

        // Toggle self
        if (isOpen) {
          item.classList.remove('active');
          if (body) (body as HTMLElement).style.display = 'none';
          if (icon) {
            icon.classList.remove('ri-subtract-line');
            icon.classList.add('ri-add-line');
          }
        } else {
          item.classList.add('active');
          if (body) (body as HTMLElement).style.display = 'block';
          if (icon) {
            icon.classList.remove('ri-add-line');
            icon.classList.add('ri-subtract-line');
          }
        }
      };
      btn.addEventListener('click', btnHandler);
      (btn as any)._handler = btnHandler;
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      hamburger?.removeEventListener('click', openMenu);
      menuClose?.removeEventListener('click', closeMenu);
      links.forEach(link => {
        link.removeEventListener('click', closeMenu);
      });
      faqButtons.forEach(btn => {
        if ((btn as any)._handler) {
          btn.removeEventListener('click', (btn as any)._handler);
        }
      });
    };
  
  }, []);

  return (
    <div className="page-wrapper animate-fade-in">
      <header className="header">

        <nav className="navbar">

            <div className="navbar__logo">
                <a href="/">BROAD PEAK</a>
            </div>

            <ul className="navbar__menu">
                <li><a href="/">Home</a></li>
                <li><a href="/expeditions">Expeditions</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="navbar__actions">
                <a href="#" className="navbar__social">
                    <i className="ri-instagram-line"></i>
                </a>
                <a href="#" className="navbar__social">
                    <i className="ri-facebook-fill"></i>
                </a>

                <a href="/contact" className="navbar__cta">Book a Trip</a>

                
                <button className="navbar__hamburger" id="hamburger-menu">
                    <i className="ri-menu-line"></i>
                </button>
            </div>

        </nav>

        
        <div className="mobile-menu" id="mobile-menu">
            <div className="mobile-menu__header">
                <div className="navbar__logo">
                    <a href="/">BROAD PEAK</a>
                </div>
                <button className="mobile-menu__close" id="mobile-menu-close">
                    <i className="ri-close-line"></i>
                </button>
            </div>
            <ul className="mobile-menu__links">
                <li><a href="/">Home</a></li>
                <li><a href="/expeditions">Expeditions</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>

    </header>

    

    <section className="hero" id="home">

        <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
        >
            <source
                src="/assets/videos/k2-cinematic.mp4"
                type="video/mp4"
             />
        </video>

   

        <div className="hero__overlay"></div>

         <button className="hero__sound-toggle">
        <i className="ri-volume-mute-line"></i>
        </button>

        <div className="hero__container">

            <div className="hero__content">

                <span className="hero__tagline">
                    Gateway to Pakistan's Greatest Mountain Adventures
                </span>

                <h1 className="hero__title">
                    EXPLORE <br />
                    THE ROOF <br />
                    OF PAKISTAN
                </h1>

                <p className="hero__description">
                    Discover legendary expeditions, breathtaking landscapes, and authentic cultural experiences across Gilgit-Baltistan, from K2 Base Camp to Hunza and beyond.
                </p>

                <div className="hero__buttons">

                    <a
                        className="hero__btn hero__btn--primary"
                        href="/expeditions">
                        Explore Expeditions
                    </a>

                    <a 
                        className="hero__btn hero__btn--secondary"
                        href="/contact">
                        Plan Your Journey
                    </a>

                </div>

            </div>


            <div className="hero__stats">

                <div className="hero__stat">
                    <h3>5,585m</h3>
                    <p>Highest Trek Point</p>
                </div>

                <div className="hero__stat">
                    <h3>20+</h3>
                    <p>Guided Adventures</p>
                </div>

                <div className="hero__stat">
                    <h3>500+</h3>
                    <p>Happy Travelers</p>
                </div>

            </div>

        </div>

    </section>

    



<section className="featured-trips" id="featured-trips">

    <div className="container">

        

        <div className="featured-trips__header">

            <div className="featured-trips__title-group">

                <span className="section-tag">
                    Handpicked Adventures
                </span>

                <h2 className="section-title">
                    Featured Expeditions
                </h2>

            </div>

            <a href="/expeditions" className="featured-trips__view-all">
                Explore All Expeditions
                <i className="ri-arrow-right-line"></i>
            </a>

        </div>


        

        <div className="featured-trips__slider-wrapper">
            <button className="slider-btn slider-btn--absolute slider-btn--prev" id="featuredTripsPrev"><i className="ri-arrow-left-line"></i></button>
            <button className="slider-btn slider-btn--absolute slider-btn--next" id="featuredTripsNext"><i className="ri-arrow-right-line"></i></button>

            <div className="featured-trips__slider">


            

            <article className="trip-card">

                <div className="trip-card__image">

                    <img
                        src="/assets/images/k2.png"
                        alt="K2 Base Camp Expedition"
                     />

                    <div className="trip-card__altitude">
                        <i className="ri-arrow-up-fill"></i>
                        5,150m
                    </div>

                </div>

                <div className="trip-card__content">

                    <h3 className="trip-card__title">
                        K2 Base Camp Expedition
                    </h3>

                    <div className="trip-card__difficulty">

                        <div className="trip-card__difficulty-label">

                            <span>Difficulty</span>

                            <span>Hard</span>

                        </div>

                        <div className="trip-card__difficulty-bar">

                            <div className="trip-card__difficulty-fill trip-card__difficulty-fill--hard"></div>

                        </div>

                    </div>

                    <div className="trip-card__footer">

                        <div className="trip-card__days">

                            <strong>21</strong>

                            <span>Days</span>

                        </div>

                        <a href="/expedition-detail?id=k2" className="trip-card__button">

                            Book

                            <i className="ri-arrow-right-up-line"></i>

                        </a>

                    </div>

                </div>

            </article>


            

            <article className="trip-card">

                <div className="trip-card__image">

                    <img
                        src="/assets/images/fairy-meadows.png"
                        alt="Fairy Meadows & Nanga Parbat"
                     />

                    <div className="trip-card__altitude">
                        <i className="ri-arrow-up-fill"></i>
                        3,300m
                    </div>

                </div>

                <div className="trip-card__content">

                    <h3 className="trip-card__title">
                        Fairy Meadows & Nanga Parbat
                    </h3>

                    <div className="trip-card__difficulty">

                        <div className="trip-card__difficulty-label">

                            <span>Difficulty</span>

                            <span>Moderate</span>

                        </div>

                        <div className="trip-card__difficulty-bar">

                            <div className="trip-card__difficulty-fill trip-card__difficulty-fill--moderate"></div>

                        </div>

                    </div>

                    <div className="trip-card__footer">

                        <div className="trip-card__days">

                            <strong>9</strong>

                            <span>Days</span>

                        </div>

                        <a href="/expedition-detail?id=fairy-meadows" className="trip-card__button">

                            Book

                            <i className="ri-arrow-right-up-line"></i>

                        </a>

                    </div>

                </div>

            </article>


            

            <article className="trip-card">

                <div className="trip-card__image">

                    <img
                        src="/assets/images/hunza.png"
                        alt="Hunza Valley Explorer"
                     />

                    <div className="trip-card__altitude">
                        <i className="ri-arrow-up-fill"></i>
                        2,500m
                    </div>

                </div>

                <div className="trip-card__content">

                    <h3 className="trip-card__title">
                        Hunza Valley Explorer
                    </h3>

                    <div className="trip-card__difficulty">

                        <div className="trip-card__difficulty-label">

                            <span>Difficulty</span>

                            <span>Easy</span>

                        </div>

                        <div className="trip-card__difficulty-bar">

                            <div className="trip-card__difficulty-fill trip-card__difficulty-fill--easy"></div>

                        </div>

                    </div>

                    <div className="trip-card__footer">

                        <div className="trip-card__days">

                            <strong>7</strong>

                            <span>Days</span>

                        </div>

                        <a href="/expedition-detail?id=hunza" className="trip-card__button">

                            Book

                            <i className="ri-arrow-right-up-line"></i>

                        </a>

                    </div>

                </div>

            </article>


            

            <article className="trip-card">

                <div className="trip-card__image">

                    <img
                        src="/assets/images/attabad-lake.png"
                        alt="Attabad Lake Adventure"
                     />

                    <div className="trip-card__altitude">
                        <i className="ri-arrow-up-fill"></i>
                        2,800m
                    </div>

                </div>

                <div className="trip-card__content">

                    <h3 className="trip-card__title">
                        Attabad Lake Adventure
                    </h3>

                    <div className="trip-card__difficulty">

                        <div className="trip-card__difficulty-label">

                            <span>Difficulty</span>

                            <span>Easy</span>

                        </div>

                        <div className="trip-card__difficulty-bar">

                            <div className="trip-card__difficulty-fill trip-card__difficulty-fill--easy"></div>

                        </div>

                    </div>

                    <div className="trip-card__footer">

                        <div className="trip-card__days">

                            <strong>5</strong>

                            <span>Days</span>

                        </div>

                        <a href="/expedition-detail?id=attabad" className="trip-card__button">

                            Book

                            <i className="ri-arrow-right-up-line"></i>

                        </a>

                    </div>

                </div>

            </article>

            

            <article className="trip-card">

                <div className="trip-card__image">

                    <img
                        src="/assets/images/snow-lake.png"
                        alt="Snow Lake & Hispar La Trek"
                     />

                    <div className="trip-card__altitude">
                        <i className="ri-arrow-up-fill"></i>
                        5,128m
                    </div>

                </div>

                <div className="trip-card__content">

                    <h3 className="trip-card__title">
                        Snow Lake & Hispar La Trek
                    </h3>

                    <div className="trip-card__difficulty">

                        <div className="trip-card__difficulty-label">

                            <span>Difficulty</span>

                            <span>Hard</span>

                        </div>

                        <div className="trip-card__difficulty-bar">

                            <div className="trip-card__difficulty-fill trip-card__difficulty-fill--hard"></div>

                        </div>

                    </div>

                    <div className="trip-card__footer">

                        <div className="trip-card__days">

                            <strong>24</strong>

                            <span>Days</span>

                        </div>

                        <a href="/expedition-detail?id=snow-lake" className="trip-card__button">

                            Book

                            <i className="ri-arrow-right-up-line"></i>

                        </a>

                    </div>

                </div>

            </article>

            

            <article className="trip-card">

                <div className="trip-card__image">

                    <img
                        src="/assets/images/deosai-sunrise.png"
                        alt="Deosai Plains Safari"
                     />

                    <div className="trip-card__altitude">
                        <i className="ri-arrow-up-fill"></i>
                        4,114m
                    </div>

                </div>

                <div className="trip-card__content">

                    <h3 className="trip-card__title">
                        Deosai Plains Safari
                    </h3>

                    <div className="trip-card__difficulty">

                        <div className="trip-card__difficulty-label">

                            <span>Difficulty</span>

                            <span>Easy</span>

                        </div>

                        <div className="trip-card__difficulty-bar">

                            <div className="trip-card__difficulty-fill trip-card__difficulty-fill--easy"></div>

                        </div>

                    </div>

                    <div className="trip-card__footer">

                        <div className="trip-card__days">

                            <strong>4</strong>

                            <span>Days</span>

                        </div>

                        <a href="/expedition-detail?id=deosai" className="trip-card__button">

                            Book

                            <i className="ri-arrow-right-up-line"></i>

                        </a>

                    </div>

                </div>

            </article>

            

            <article className="trip-card">

                <div className="trip-card__image">

                    <img
                        src="/assets/images/passu-cones.png"
                        alt="Passu Cones & Hunza"
                     />

                    <div className="trip-card__altitude">
                        <i className="ri-arrow-up-fill"></i>
                        2,500m
                    </div>

                </div>

                <div className="trip-card__content">

                    <h3 className="trip-card__title">
                        Passu Cones & Hunza
                    </h3>

                    <div className="trip-card__difficulty">

                        <div className="trip-card__difficulty-label">

                            <span>Difficulty</span>

                            <span>Moderate</span>

                        </div>

                        <div className="trip-card__difficulty-bar">

                            <div className="trip-card__difficulty-fill trip-card__difficulty-fill--moderate"></div>

                        </div>

                    </div>

                    <div className="trip-card__footer">

                        <div className="trip-card__days">

                            <strong>8</strong>

                            <span>Days</span>

                        </div>

                        <a href="/expedition-detail?id=hunza" className="trip-card__button">

                            Book

                            <i className="ri-arrow-right-up-line"></i>

                        </a>

                    </div>

                </div>

            </article>

        </div>
        </div>


        

        <div className="featured-trips__progress-container">
            <div className="featured-trips__progress-bar"></div>
        </div>

        <div className="featured-trips__pagination">
            
        </div>

    </div>

</section>




<section className="who-we-are" id="who-we-are">
    <div className="container who-we-are__container">
        
        
        <div className="who-we-are__images">
            <div className="who-we-are__badge"><span>2021</span><span>EST</span></div>
            <img src="/assets/images/who-we-are-main.png" alt="Hunza Valley Morning" className="who-we-are__img-main" />
            <img src="/assets/images/who-we-are-small.png" alt="Mountain Tea" className="who-we-are__img-small" />
        </div>

        
        <div className="who-we-are__content">
            <span className="section-tag">WHY TRAVEL WITH US</span>
            <h2 className="section-title">LOCAL ROOTS,<br />GLOBAL STANDARDS</h2>
            
            <p className="who-we-are__desc">
                Our team combines local knowledge, experienced guides, and authentic cultural connections to create unforgettable journeys across Northern Pakistan.
            </p>

            <div className="who-we-are__grid">
                
                <div className="who-we-are__feature">
                    <i className="ri-compass-3-line feature-icon"></i>
                    <h4>LOCAL EXPERTISE</h4>
                    <p>Deep roots and unmatched local knowledge across Gilgit-Baltistan.</p>
                </div>

                <div className="who-we-are__feature">
                    <i className="ri-user-star-line feature-icon"></i>
                    <h4>EXPERIENCED GUIDES</h4>
                    <p>Decades of high-altitude mountain and trekking experience.</p>
                </div>

                <div className="who-we-are__feature">
                    <i className="ri-fire-line feature-icon"></i>
                    <h4>AUTHENTIC EXPERIENCES</h4>
                    <p>Genuine cultural immersion and deep local connections.</p>
                </div>

                <div className="who-we-are__feature">
                    <i className="ri-shield-check-line feature-icon"></i>
                    <h4>SAFETY FIRST</h4>
                    <p>Meticulous logistics with full contingency planning and emergency protocols.</p>
                </div>

            </div>

            <a href="/about" className="btn btn--primary" style={{ marginTop: "20px" }}>WHY CHOOSE US</a>
        </div>

    </div>
</section>


<section className="trending-activities" id="trending-activities">
    <div className="container">
        <div className="trending-activities__header">
            <span className="section-subtitle">DISCOVER THE NORTH</span>
            <h2 className="section-title">POPULAR DESTINATIONS</h2>
        </div>
    </div>
    
    <div className="accordion-container">
        
        <div className="accordion-item" style={{ backgroundImage: "url('/assets/images/destination_skardu_1783185586097.png')" }}>
            <div className="accordion-overlay"></div>
            <div className="accordion-content">
                <span className="accordion-badge">MOST POPULAR</span>
                <h3 className="accordion-title">SKARDU</h3>
                <p className="accordion-desc">Experience the world's greatest trails in the Karakoram and Himalayas.</p>
                <a href="/destinations" className="btn btn--primary">EXPLORE</a>
            </div>
            <div className="accordion-label">SKARDU</div>
        </div>

        <div className="accordion-item" style={{ backgroundImage: "url('/assets/images/destination_hunza_1783185596174.png')" }}>
            <div className="accordion-overlay"></div>
            <div className="accordion-content">
                <h3 className="accordion-title">HUNZA VALLEY</h3>
                <p className="accordion-desc">Challenge yourself on some of the highest and most beautiful peaks on Earth.</p>
                <a href="/destinations" className="btn btn--primary">EXPLORE</a>
            </div>
            <div className="accordion-label">HUNZA VALLEY</div>
        </div>

        <div className="accordion-item" style={{ backgroundImage: "url('/assets/images/destination_fairy_meadows_1783185607151.png')" }}>
            <div className="accordion-overlay"></div>
            <div className="accordion-content">
                <h3 className="accordion-title">FAIRY MEADOWS</h3>
                <p className="accordion-desc">Immerse yourself in the rich heritage and traditions of the mountain valleys.</p>
                <a href="/destinations" className="btn btn--primary">EXPLORE</a>
            </div>
            <div className="accordion-label">FAIRY MEADOWS</div>
        </div>

        <div className="accordion-item" style={{ backgroundImage: "url('/assets/images/destination_attabad_lake_1783185617186.png')" }}>
            <div className="accordion-overlay"></div>
            <div className="accordion-content">
                <h3 className="accordion-title">ATTABAD LAKE</h3>
                <p className="accordion-desc">Carve through untouched powder in the ultimate backcountry ski destinations.</p>
                <a href="/destinations" className="btn btn--primary">EXPLORE</a>
            </div>
            <div className="accordion-label">ATTABAD LAKE</div>
        </div>

        <div className="accordion-item" style={{ backgroundImage: "url('/assets/images/destination_deosai_1783185627767.png')" }}>
            <div className="accordion-overlay"></div>
            <div className="accordion-content">
                <h3 className="accordion-title">DEOSAI</h3>
                <p className="accordion-desc">Tailor-made itineraries designed exclusively for your dream adventure.</p>
                <a href="/destinations" className="btn btn--primary">EXPLORE</a>
            </div>
            <div className="accordion-label">DEOSAI</div>
        </div>

    </div>
</section>

<section className="testimonials" id="testimonials">
    
    <div className="container testimonials__header">
        
        <div className="testimonials__title-wrap">
            <span className="section-subtitle">VERIFIED REVIEWS</span>
            <h2 className="section-title">WHAT TREKKERS SAY</h2>
        </div>
        
        <div className="testimonials__rating">
            <div className="testimonials__stars">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
            </div>
            <span>5.0 average • 100+ reviews</span>
        </div>

    </div>

    <div className="testimonials__slider-container">
        <div className="testimonials__slider" id="testimonialsSlider">
            
            
            <div className="testimonial-card">
                <div className="testimonial-card__bg-quote">"</div>
                <div className="testimonial-card__header">
                    <span className="testimonial-card__trek">K2 BASE CAMP TREK</span>
                </div>
                <p className="testimonial-card__text">
                    "My K2 Base Camp Trek with Broad Peak Adventures was phenomenal, largely thanks to our guide Basharat. His deep knowledge of the Karakoram Range and infectious enthusiasm made every step unforgettable."
                </p>
                <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">L</div>
                    <div className="testimonial-card__author-info">
                        <strong>Liu</strong>
                        <span>China</span>
                    </div>
                </div>
            </div>

            
            <div className="testimonial-card">
                <div className="testimonial-card__bg-quote">"</div>
                <div className="testimonial-card__header">
                    <span className="testimonial-card__trek">GONDOGORO LA & K2 TREK</span>
                </div>
                <p className="testimonial-card__text">
                    "The challenging trail took us through jaw-dropping landscapes, from glacier crossings to Concordia's stunning views. Our local guide's expertise made the journey safe and unforgettable."
                </p>
                <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">S</div>
                    <div className="testimonial-card__author-info">
                        <strong>Sophie</strong>
                        <span>France</span>
                    </div>
                </div>
            </div>

            
            <div className="testimonial-card">
                <div className="testimonial-card__bg-quote">"</div>
                <div className="testimonial-card__header">
                    <span className="testimonial-card__trek">SKARDU & HUNZA TOUR</span>
                </div>
                <p className="testimonial-card__text">
                    "Thoroughly impressed with the level of customer service. From the initial consultation to ongoing support, the team has been nothing but professional and responsive throughout."
                </p>
                <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">L</div>
                    <div className="testimonial-card__author-info">
                        <strong>Lena</strong>
                        <span>Germany</span>
                    </div>
                </div>
            </div>

            
            <div className="testimonial-card">
                <div className="testimonial-card__bg-quote">"</div>
                <div className="testimonial-card__header">
                    <span className="testimonial-card__trek">K2 BASE CAMP TREK</span>
                </div>
                <p className="testimonial-card__text">
                    "My K2 Base Camp Trek with Broad Peak Adventures was phenomenal, largely thanks to our guide Basharat. His deep knowledge of the Karakoram Range and infectious enthusiasm made every step unforgettable."
                </p>
                <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">L</div>
                    <div className="testimonial-card__author-info">
                        <strong>Liu</strong>
                        <span>China</span>
                    </div>
                </div>
            </div>

            
            <div className="testimonial-card">
                <div className="testimonial-card__bg-quote">"</div>
                <div className="testimonial-card__header">
                    <span className="testimonial-card__trek">GONDOGORO LA & K2 TREK</span>
                </div>
                <p className="testimonial-card__text">
                    "The challenging trail took us through jaw-dropping landscapes, from glacier crossings to Concordia's stunning views. Our local guide's expertise made the journey safe and unforgettable."
                </p>
                <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">S</div>
                    <div className="testimonial-card__author-info">
                        <strong>Sophie</strong>
                        <span>France</span>
                    </div>
                </div>
            </div>

            
            <div className="testimonial-card">
                <div className="testimonial-card__bg-quote">"</div>
                <div className="testimonial-card__header">
                    <span className="testimonial-card__trek">SKARDU & HUNZA TOUR</span>
                </div>
                <p className="testimonial-card__text">
                    "Thoroughly impressed with the level of customer service. From the initial consultation to ongoing support, the team has been nothing but professional and responsive throughout."
                </p>
                <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">L</div>
                    <div className="testimonial-card__author-info">
                        <strong>Lena</strong>
                        <span>Germany</span>
                    </div>
                </div>
            </div>

            
            <div className="testimonial-card">
                <div className="testimonial-card__bg-quote">"</div>
                <div className="testimonial-card__header">
                    <span className="testimonial-card__trek">K2 BASE CAMP TREK</span>
                </div>
                <p className="testimonial-card__text">
                    "My K2 Base Camp Trek with Broad Peak Adventures was phenomenal, largely thanks to our guide Basharat. His deep knowledge of the Karakoram Range and infectious enthusiasm made every step unforgettable."
                </p>
                <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">L</div>
                    <div className="testimonial-card__author-info">
                        <strong>Liu</strong>
                        <span>China</span>
                    </div>
                </div>
            </div>

            
            <div className="testimonial-card">
                <div className="testimonial-card__bg-quote">"</div>
                <div className="testimonial-card__header">
                    <span className="testimonial-card__trek">GONDOGORO LA & K2 TREK</span>
                </div>
                <p className="testimonial-card__text">
                    "The challenging trail took us through jaw-dropping landscapes, from glacier crossings to Concordia's stunning views. Our local guide's expertise made the journey safe and unforgettable."
                </p>
                <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">S</div>
                    <div className="testimonial-card__author-info">
                        <strong>Sophie</strong>
                        <span>France</span>
                    </div>
                </div>
            </div>

            
            <div className="testimonial-card">
                <div className="testimonial-card__bg-quote">"</div>
                <div className="testimonial-card__header">
                    <span className="testimonial-card__trek">SKARDU & HUNZA TOUR</span>
                </div>
                <p className="testimonial-card__text">
                    "Thoroughly impressed with the level of customer service. From the initial consultation to ongoing support, the team has been nothing but professional and responsive throughout."
                </p>
                <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">L</div>
                    <div className="testimonial-card__author-info">
                        <strong>Lena</strong>
                        <span>Germany</span>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div className="container">
        <div className="testimonials__progress-container" id="testimonialsProgressContainer">
            <div className="testimonials__progress-bar" id="testimonialsProgressBar"></div>
        </div>
    </div>

</section>


<section className="travel-insights" id="travel-insights">
    <div className="container">
        
        <div className="travel-insights__header">
            <div className="travel-insights__title-wrap">
                <span className="section-subtitle">TRAVEL GUIDES</span>
                <h2 className="section-title">PLAN YOUR ADVENTURE</h2>
            </div>
            <a href="/travel-guides" className="btn btn--outline">EXPLORE GUIDES <i className="ri-arrow-right-line"></i></a>
        </div>

        <div className="travel-insights__grid">
            
            
            <a href="/travel-guides" className="insight-card insight-card--large">
                <img src="/assets/images/article_k2_guide_1783186031585.png" alt="K2 Base Camp Guide" className="insight-card__image" />
                <div className="insight-card__overlay"></div>
                <div className="insight-card__content">
                    <span className="insight-card__category">TRAVEL GUIDE</span>
                    <h3 className="insight-card__title">K2 Base Camp Trek 2026: Essential Planning Guide for First-Time Visitors</h3>
                    <span className="insight-card__date">17 January 2026</span>
                </div>
                <div className="insight-card__hover-element">
                    <span>READ STORY</span>
                    <i className="ri-arrow-right-line"></i>
                </div>
            </a>

            
            <div className="travel-insights__stack">
                
                <a href="#" className="insight-card insight-card--small">
                    <img src="/assets/images/article_visa_logistics_1783186040279.png" alt="Visa Logistics" className="insight-card__image" />
                    <div className="insight-card__overlay"></div>
                    <div className="insight-card__content">
                        <span className="insight-card__category">TRAVEL LOGISTICS</span>
                        <h3 className="insight-card__title">Pakistan Visa, Permits & Travel Requirements for International Travelers</h3>
                        <span className="insight-card__date">15 January 2026</span>
                    </div>
                    <div className="insight-card__hover-element">
                        <span>READ STORY</span>
                        <i className="ri-arrow-right-line"></i>
                    </div>
                </a>

                <a href="#" className="insight-card insight-card--small">
                    <img src="/assets/images/article_snow_lake_1783186049575.png" alt="Snow Lake Trek" className="insight-card__image" />
                    <div className="insight-card__overlay"></div>
                    <div className="insight-card__content">
                        <span className="insight-card__category">TREKKING & EXPEDITIONS</span>
                        <h3 className="insight-card__title">Snow Lake Trek: Everything You Need to Know Before You Go</h3>
                        <span className="insight-card__date">11 January 2026</span>
                    </div>
                    <div className="insight-card__hover-element">
                        <span>READ STORY</span>
                        <i className="ri-arrow-right-line"></i>
                    </div>
                </a>

            </div>

        </div>
    </div>
</section>


<section className="faq-preview-section" id="faq-preview" style={{ padding: "100px 0", backgroundColor: "#faf9f7" }}>
    <div className="container">
        
        <div className="faq-preview__header" style={{ textAlign: "center" }}>
            <span className="section-subtitle">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title">PLAN WITH CONFIDENCE</h2>
            <p className="section-desc" style={{ maxWidth: "600px", margin: "0 auto 40px auto", color: "#555", fontFamily: "'Lora', serif", lineHeight: "1.6", fontSize: "1.05rem" }}>
                Everything you need to know before exploring Northern Pakistan.
            </p>
        </div>

        <div className="faq-accordion" style={{ maxWidth: "800px", margin: "0 auto" }}>
            
            <div className="faq-accordion__item active">
                <button className="faq-accordion__header">
                    <span>What is the best time to visit Northern Pakistan?</span>
                    <i className="ri-subtract-line faq-icon"></i>
                </button>
                <div className="faq-accordion__body" style={{ display: "block" }}>
                    <div className="faq-accordion__content">
                        The ideal season is from May to October. Spring offers blooming valleys, summer provides comfortable trekking conditions, and autumn brings spectacular colors across Hunza, Skardu, and surrounding regions.
                    </div>
                </div>
            </div>

            <div className="faq-accordion__item">
                <button className="faq-accordion__header">
                    <span>Do international travelers need special permits?</span>
                    <i className="ri-add-line faq-icon"></i>
                </button>
                <div className="faq-accordion__body" style={{ display: "none" }}>
                    <div className="faq-accordion__content">
                        Most visitors only require a valid Pakistani visa, although certain border regions may need additional permits. Our team assists guests with all necessary travel requirements before arrival.
                    </div>
                </div>
            </div>

            <div className="faq-accordion__item">
                <button className="faq-accordion__header">
                    <span>Are your tours suitable for beginners?</span>
                    <i className="ri-add-line faq-icon"></i>
                </button>
                <div className="faq-accordion__body" style={{ display: "none" }}>
                    <div className="faq-accordion__content">
                        Yes. We offer everything from easy cultural tours to challenging high-altitude expeditions, with clear difficulty levels and guidance for every experience level.
                    </div>
                </div>
            </div>

            <div className="faq-accordion__item">
                <button className="faq-accordion__header">
                    <span>What is included in expedition packages?</span>
                    <i className="ri-add-line faq-icon"></i>
                </button>
                <div className="faq-accordion__body" style={{ display: "none" }}>
                    <div className="faq-accordion__content">
                        Packages typically include accommodation, transportation, local guides, permits, meals during treks, camping equipment, and logistical support. Specific inclusions vary by itinerary.
                    </div>
                </div>
            </div>

            <div className="faq-accordion__item">
                <button className="faq-accordion__header">
                    <span>Is it safe to travel in Gilgit-Baltistan?</span>
                    <i className="ri-add-line faq-icon"></i>
                </button>
                <div className="faq-accordion__body" style={{ display: "none" }}>
                    <div className="faq-accordion__content">
                        Yes. Gilgit-Baltistan is considered one of Pakistan's safest tourism regions. We work with experienced local teams and maintain strict safety protocols for all journeys.
                    </div>
                </div>
            </div>

            <div className="faq-accordion__item">
                <button className="faq-accordion__header">
                    <span>Can I customize my itinerary?</span>
                    <i className="ri-add-line faq-icon"></i>
                </button>
                <div className="faq-accordion__body" style={{ display: "none" }}>
                    <div className="faq-accordion__content">
                        Absolutely. We provide tailored experiences for families, photographers, adventure travelers, and private groups based on individual interests and schedules.
                    </div>
                </div>
            </div>

        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a href="/faq" className="faq-preview__link" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", color: "var(--primary-color)", letterSpacing: "1px", display: "inline-block", textDecoration: "none", transition: "color 0.3s ease" }}>VIEW ALL FAQS &rarr;</a>
        </div>

    </div>
</section>



<section className="cta-section" id="contact">
    
    <div className="cta-section__overlay"></div>
    
    <div className="container cta-section__content">
        
        <div className="cta-section__text">
            <span className="section-subtitle section-subtitle--light">THE ULTIMATE KARAKORAM EXPERIENCE</span>
            <h2 className="cta-section__title">READY FOR YOUR NEXT ADVENTURE?</h2>
            <p className="cta-section__desc">From the legendary K2 Base Camp to the hidden valleys of Gilgit-Baltistan, we create unforgettable journeys for travelers seeking adventure, culture, and the world's most spectacular mountain landscapes.</p>
        </div>
        
        <div className="cta-section__buttons">
            <a href="/expeditions" className="btn btn--white">
                EXPLORE EXPEDITIONS <i className="ri-compass-3-line" style={{ marginLeft: "8px" }}></i>
            </a>
            <a href="/contact" className="btn btn--outline-light">
                PLAN YOUR JOURNEY
            </a>
        </div>

    </div>

</section>


<footer className="footer">
    <div className="container footer__container">
        
        
        <div className="footer__col footer__col--about">
            <h3 className="footer__logo">BROAD PEAK</h3>
            <p>Authentic mountain experiences across Gilgit-Baltistan, combining local expertise, cultural immersion, and world-class expedition planning.</p>
            <div className="footer__socials">
                <a href="#"><i className="ri-instagram-line"></i></a>
                <a href="#"><i className="ri-facebook-fill"></i></a>
                <a href="#"><i className="ri-whatsapp-line"></i></a>
            </div>
        </div>

        
        <div className="footer__col">
            <h4>QUICK LINKS</h4>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/expeditions">Expeditions</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="/travel-guides">Travel Guides</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>

        
        <div className="footer__col">
            <h4>POPULAR EXPEDITIONS</h4>
            <ul>
                <li><a href="/expedition-detail">K2 Base Camp Trek</a></li>
                <li><a href="/expedition-detail">Concordia Trek</a></li>
                <li><a href="/expedition-detail">Gondogoro La Pass</a></li>
                <li><a href="/expedition-detail">Snow Lake Trek</a></li>
                <li><a href="/expedition-detail">Nanga Parbat Base Camp</a></li>
            </ul>
        </div>

        
        <div className="footer__col">
            <h4>SUPPORT</h4>
            <ul>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
                <li><a href="#">Email Us</a></li>
                <li><a href="#">WhatsApp Inquiry</a></li>
            </ul>
        </div>

    </div>
    
    <div className="container footer__bottom" style={{ justifyContent: "center", textAlign: "center" }}>
        <p>&copy; 2026 Broad Peak Adventures. All Rights Reserved.</p>
    </div>
</footer>

    
    <a href="#" className="scroll-to-top">
        <i className="ri-arrow-up-line"></i>
    </a>
    </div>
  );
}
