import { useEffect } from 'react';

export default function Blog() {
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
      <header className="header" id="main-header">
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
                <a href="#" className="navbar__social"><i className="ri-instagram-line"></i></a>
                <a href="#" className="navbar__social"><i className="ri-facebook-fill"></i></a>
                <a href="/contact" className="navbar__cta">Book a Trip</a>
                <button className="navbar__hamburger" id="blog-hamburger">
                    <i className="ri-menu-line"></i>
                </button>
            </div>
        </nav>

        
        <div className="mobile-menu" id="blog-mobile-menu">
            <div className="mobile-menu__header">
                <div className="navbar__logo">
                    <a href="/">BROAD PEAK</a>
                </div>
                <button className="mobile-menu__close" id="blog-menu-close">
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

    
    <section className="blog-hero" id="blog-hero">
        <div className="blog-hero__bg" id="blog-hero-bg"></div>
        <div className="blog-hero__overlay"></div>
        <div className="blog-hero__container blog-container">
            <span className="blog-hero__tagline">STORIES FROM THE KARAKORAM</span>
            <h1 className="blog-hero__title">EXPLORE THE MOUNTAINS<br />THROUGH STORIES</h1>
            <p className="blog-hero__desc">Travel guides, expedition journals, cultural insights, and practical advice from Northern Pakistan.</p>
        </div>
    </section>

    
    <section className="blog-featured">
        <div className="blog-container">
            <div className="blog-featured__inner">
                <div className="blog-featured__image">
                    <img src="/assets/images/article_k2_guide_1783186031585.png" alt="K2 Base camp mountains view" loading="lazy" />
                </div>
                <div className="blog-featured__content">
                    <div className="blog-featured__meta">
                        <span className="blog-featured__cat">Expedition Planning</span>
                        <span className="blog-featured__separator">•</span>
                        <span className="blog-featured__reading-time"><i className="ri-time-line"></i> 12 min read</span>
                    </div>
                    <h2 className="blog-featured__title">K2 Base Camp Trek 2026: Complete Planning Guide</h2>
                    <p className="blog-featured__desc">Prepare for the adventure of a lifetime. Our comprehensive guide covers the route, acclimatization schedules, physical fitness training, packing lists, and local safety protocols for the ultimate Karakoram expedition.</p>
                    <a href="/blog-post" className="blog-btn-primary">READ ARTICLE <i className="ri-arrow-right-line"></i></a>
                </div>
            </div>
        </div>
    </section>

    
    <section className="blog-grid-section">
        <div className="blog-container">
            <div className="blog-grid-section__header">
                <span className="blog-section-tag">LATEST POSTS</span>
                <h2 className="blog-section-title">RECENT ARTICLES</h2>
            </div>

            <div className="blog-grid">

                
                <article className="blog-card">
                    <div className="blog-card__image">
                        <a href="#"><img src="/assets/images/article_visa_logistics_1783186040279.png" alt="Pakistan Visa & Permit Requirements" loading="lazy" /></a>
                    </div>
                    <div className="blog-card__body">
                        <div className="blog-card__meta">
                            <span className="blog-card__cat">Travel Logistics</span>
                            <span className="blog-card__date">10 July 2026</span>
                            <span className="blog-card__time"><i className="ri-time-line"></i> 5 min read</span>
                        </div>
                        <h3 className="blog-card__title"><a href="#">Pakistan Visa &amp; Permit Requirements</a></h3>
                        <p className="blog-card__desc">A complete guide to navigating the E-Visa system and obtaining trekking permits for your upcoming journey.</p>
                        <a href="#" className="blog-card__btn">Read Article <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="blog-card">
                    <div className="blog-card__image">
                        <a href="#"><img src="/assets/images/article_snow_lake_1783186049575.png" alt="Snow Lake Trek Preparation Guide" loading="lazy" /></a>
                    </div>
                    <div className="blog-card__body">
                        <div className="blog-card__meta">
                            <span className="blog-card__cat">Expedition Planning</span>
                            <span className="blog-card__date">28 June 2026</span>
                            <span className="blog-card__time"><i className="ri-time-line"></i> 8 min read</span>
                        </div>
                        <h3 className="blog-card__title"><a href="#">Snow Lake Trek Preparation Guide</a></h3>
                        <p className="blog-card__desc">Everything you need to know about navigating the Biafo and Hispar glaciers, one of the longest continuous glacial systems.</p>
                        <a href="#" className="blog-card__btn">Read Article <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="blog-card">
                    <div className="blog-card__image">
                        <a href="#"><img src="/assets/images/destination_hunza_1783185596174.png" alt="Best Time To Visit Hunza Valley" loading="lazy" /></a>
                    </div>
                    <div className="blog-card__body">
                        <div className="blog-card__meta">
                            <span className="blog-card__cat">Destinations</span>
                            <span className="blog-card__date">15 June 2026</span>
                            <span className="blog-card__time"><i className="ri-time-line"></i> 6 min read</span>
                        </div>
                        <h3 className="blog-card__title"><a href="#">Best Time To Visit Hunza Valley</a></h3>
                        <p className="blog-card__desc">From spring cherry blossoms to autumn colors, discover the perfect season for your Hunza Valley itinerary.</p>
                        <a href="#" className="blog-card__btn">Read Article <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="blog-card">
                    <div className="blog-card__image">
                        <a href="#"><img src="/assets/images/destination_deosai_1783185627767.png" alt="Deosai Wildlife & Photography Guide" loading="lazy" /></a>
                    </div>
                    <div className="blog-card__body">
                        <div className="blog-card__meta">
                            <span className="blog-card__cat">Photography</span>
                            <span className="blog-card__date">02 June 2026</span>
                            <span className="blog-card__time"><i className="ri-time-line"></i> 7 min read</span>
                        </div>
                        <h3 className="blog-card__title"><a href="#">Deosai Wildlife &amp; Photography Guide</a></h3>
                        <p className="blog-card__desc">Capture the beauty of the Himalayan brown bear and the vibrant wildflowers of the Deosai Plains.</p>
                        <a href="#" className="blog-card__btn">Read Article <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="blog-card">
                    <div className="blog-card__image">
                        <a href="#"><img src="/assets/images/travel-boots.png" alt="Altitude Sickness Prevention" loading="lazy" /></a>
                    </div>
                    <div className="blog-card__body">
                        <div className="blog-card__meta">
                            <span className="blog-card__cat">Health & Safety</span>
                            <span className="blog-card__date">20 May 2026</span>
                            <span className="blog-card__time"><i className="ri-time-line"></i> 10 min read</span>
                        </div>
                        <h3 className="blog-card__title"><a href="#">Altitude Sickness Prevention</a></h3>
                        <p className="blog-card__desc">Essential tips for recognizing AMS symptoms, acclimatizing properly, and ensuring a safe trek at high altitudes.</p>
                        <a href="#" className="blog-card__btn">Read Article <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="blog-card">
                    <div className="blog-card__image">
                        <a href="#"><img src="/assets/images/activity-culture.png" alt="Local Culture & Traditions of Baltistan" loading="lazy" /></a>
                    </div>
                    <div className="blog-card__body">
                        <div className="blog-card__meta">
                            <span className="blog-card__cat">Culture</span>
                            <span className="blog-card__date">05 May 2026</span>
                            <span className="blog-card__time"><i className="ri-time-line"></i> 7 min read</span>
                        </div>
                        <h3 className="blog-card__title"><a href="#">Local Culture &amp; Traditions of Baltistan</a></h3>
                        <p className="blog-card__desc">Immerse yourself in the rich heritage, culinary traditions, and warm hospitality of the Balti people.</p>
                        <a href="#" className="blog-card__btn">Read Article <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

            </div>
        </div>
    </section>

    
    <section className="blog-newsletter" id="blog-newsletter">
        <div className="blog-container">
            <div className="blog-newsletter__inner">
                <h2 className="blog-newsletter__title">NEVER MISS AN ADVENTURE</h2>
                <p className="blog-newsletter__desc">Sign up to receive our latest expedition journals, travel guides, and exclusive updates directly in your inbox.</p>
                
                <form className="blog-newsletter__form" action="thank-you.html">
                    <input type="email" placeholder="Your email address" required />
                    <button type="submit">SUBSCRIBE</button>
                </form>
            </div>
        </div>
    </section>

    
    <section className="blog-cta">
        <div className="blog-cta__overlay"></div>
        <div className="blog-container">
            <div className="blog-cta__content">
                <div className="blog-cta__text">
                    <span className="blog-cta__tag">THE JOURNEY BEGINS</span>
                    <h2 className="blog-cta__title">READY TO EXPERIENCE THESE STORIES YOURSELF?</h2>
                    <p className="blog-cta__desc">Join our team of local guides and discover the mountains, valleys, and lakes of Gilgit-Baltistan.</p>
                </div>
                <div className="blog-cta__buttons">
                    <a href="/expeditions" className="blog-btn-white">EXPLORE EXPEDITIONS</a>
                    <a href="/contact" className="blog-btn-outline-light">CONTACT OUR TEAM</a>
                </div>
            </div>
        </div>
    </section>

    
    <footer className="footer">
        <div className="blog-container footer__container">

            
            <div className="footer__col footer__col--about">
                <h3 className="footer__logo"><a href="/">BROAD PEAK</a></h3>
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
                    <li><a href="/expedition-detail?id=k2">K2 Base Camp Trek</a></li>
                    <li><a href="/expedition-detail?id=concordia">Concordia Trek</a></li>
                    <li><a href="/expedition-detail?id=fairy-meadows">Fairy Meadows Trek</a></li>
                    <li><a href="/expedition-detail?id=snow-lake">Snow Lake Trek</a></li>
                    <li><a href="/expedition-detail?id=nanga-parbat">Nanga Parbat Base Camp</a></li>
                </ul>
            </div>

            
            <div className="footer__col">
                <h4>SUPPORT</h4>
                <ul>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms &amp; Conditions</a></li>
                    <li><a href="#">Email Us</a></li>
                    <li><a href="#">WhatsApp Inquiry</a></li>
                </ul>
            </div>

        </div>

        <div className="blog-container footer__bottom">
            <p>&copy; 2026 Broad Peak Adventures. All Rights Reserved.</p>
        </div>
    </footer>

    
    <a href="#" className="scroll-to-top">
        <i className="ri-arrow-up-line"></i>
    </a>
    </div>
  );
}
