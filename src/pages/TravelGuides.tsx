import { useEffect } from 'react';

export default function TravelGuides() {
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
                <button className="navbar__hamburger" id="tg-hamburger">
                    <i className="ri-menu-line"></i>
                </button>
            </div>
        </nav>

        
        <div className="mobile-menu" id="tg-mobile-menu">
            <div className="mobile-menu__header">
                <div className="navbar__logo">
                    <a href="/">BROAD PEAK</a>
                </div>
                <button className="mobile-menu__close" id="tg-menu-close">
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

    
    <section className="tg-hero" id="tg-hero">
        <div className="tg-hero__bg" id="tg-hero-bg"></div>
        <div className="tg-hero__overlay"></div>
        <div className="tg-hero__container tg-container">
            <span className="tg-hero__tagline">TRAVEL GUIDES &amp; INSIGHTS</span>
            <h1 className="tg-hero__title">EXPLORE WITH<br />CONFIDENCE</h1>
            <p className="tg-hero__desc">Expert advice, local knowledge, trekking tips, cultural insights, and practical information for discovering Northern Pakistan.</p>
        </div>
    </section>

    
    <section className="tg-featured">
        <div className="tg-container">
            <div className="tg-featured__inner">
                <div className="tg-featured__image">
                    <img src="/assets/images/article_k2_guide_1783186031585.png" alt="K2 Base camp mountains view" loading="lazy" />
                </div>
                <div className="tg-featured__content">
                    <div className="tg-featured__meta">
                        <span className="tg-featured__date">17 January 2026</span>
                        <span className="tg-featured__separator">•</span>
                        <span className="tg-featured__cat">Travel Guide</span>
                    </div>
                    <h2 className="tg-featured__title">K2 BASE CAMP TREK 2026: THE COMPLETE PLANNING GUIDE</h2>
                    <p className="tg-featured__desc">Prepare for the adventure of a lifetime. Our comprehensive guide covers the route, acclimatization schedules, physical fitness training, packing lists, and local safety protocols for the ultimate Karakoram expedition.</p>
                    <a href="#" className="tg-btn-primary">READ GUIDE <i className="ri-arrow-right-line"></i></a>
                </div>
            </div>
        </div>
    </section>

    
    <section className="tg-grid-section">
        <div className="tg-container">
            <div className="tg-grid-section__header">
                <span className="tg-section-tag">LATEST INSIGHTS</span>
                <h2 className="tg-section-title">ESSENTIAL GUIDES</h2>
            </div>

            <div className="tg-grid">

                
                <article className="tg-card">
                    <div className="tg-card__image">
                        <img src="/assets/images/article_k2_guide_1783186031585.png" alt="K2 Base Camp Trek Guide" loading="lazy" />
                    </div>
                    <div className="tg-card__body">
                        <div className="tg-card__meta">
                            <span className="tg-card__date">15 January 2026</span>
                            <span className="tg-card__cat">Travel Guide</span>
                        </div>
                        <h3 className="tg-card__title">K2 Base Camp Trek: Essential Planning Guide</h3>
                        <a href="/blog-post" className="tg-card__btn">Read More <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="tg-card">
                    <div className="tg-card__image">
                        <img src="/assets/images/article_visa_logistics_1783186040279.png" alt="Pakistan Visa & Permits Guide" loading="lazy" />
                    </div>
                    <div className="tg-card__body">
                        <div className="tg-card__meta">
                            <span className="tg-card__date">08 January 2026</span>
                            <span className="tg-card__cat">Travel Logistics</span>
                        </div>
                        <h3 className="tg-card__title">Pakistan Visa, Permits &amp; Requirements For International Travelers</h3>
                        <a href="#" className="tg-card__btn">Read More <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="tg-card">
                    <div className="tg-card__image">
                        <img src="/assets/images/destination_hunza_1783185596174.png" alt="Best Time to Visit Hunza Valley" loading="lazy" />
                    </div>
                    <div className="tg-card__body">
                        <div className="tg-card__meta">
                            <span className="tg-card__date">28 December 2025</span>
                            <span className="tg-card__cat">Seasonal Guide</span>
                        </div>
                        <h3 className="tg-card__title">Best Time To Visit Hunza Valley</h3>
                        <a href="#" className="tg-card__btn">Read More <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="tg-card">
                    <div className="tg-card__image">
                        <img src="/assets/images/article_snow_lake_1783186049575.png" alt="Snow Lake Trek Guide" loading="lazy" />
                    </div>
                    <div className="tg-card__body">
                        <div className="tg-card__meta">
                            <span className="tg-card__date">14 December 2025</span>
                            <span className="tg-card__cat">Trekking &amp; Expeditions</span>
                        </div>
                        <h3 className="tg-card__title">Snow Lake Trek: Everything You Need To Know Before You Go</h3>
                        <a href="#" className="tg-card__btn">Read More <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="tg-card">
                    <div className="tg-card__image">
                        <img src="/assets/images/travel-boots.png" alt="High Altitude Packing List" loading="lazy" />
                    </div>
                    <div className="tg-card__body">
                        <div className="tg-card__meta">
                            <span className="tg-card__date">03 December 2025</span>
                            <span className="tg-card__cat">Equipment &amp; Safety</span>
                        </div>
                        <h3 className="tg-card__title">High Altitude Packing List For Northern Pakistan</h3>
                        <a href="#" className="tg-card__btn">Read More <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="tg-card">
                    <div className="tg-card__image">
                        <img src="/assets/images/travel-iceaxe.png" alt="Beginner guide to trekking in Karakoram" loading="lazy" />
                    </div>
                    <div className="tg-card__body">
                        <div className="tg-card__meta">
                            <span className="tg-card__date">18 November 2025</span>
                            <span className="tg-card__cat">Adventure Basics</span>
                        </div>
                        <h3 className="tg-card__title">A Beginner's Guide To Trekking In The Karakoram</h3>
                        <a href="#" className="tg-card__btn">Read More <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

            </div>
        </div>
    </section>

    
    <section className="tg-cats">
        <div className="tg-container">
            <div className="tg-cats__header">
                <span className="tg-section-tag">GUIDE DIRECTORY</span>
                <h2 className="tg-section-title">BROWSE BY CATEGORY</h2>
            </div>

            <div className="tg-cats__grid">
                
                <div className="tg-cat-card">
                    <div className="tg-cat-card__icon"><i className="ri-compass-3-line"></i></div>
                    <h3 className="tg-cat-card__title">Trekking</h3>
                    <p className="tg-cat-card__desc">Detailed route maps, elevation coordinates, and altitude preparation tips.</p>
                </div>

                <div className="tg-cat-card">
                    <div className="tg-cat-card__icon"><i className="ri-palette-line"></i></div>
                    <h3 className="tg-cat-card__title">Culture</h3>
                    <p className="tg-cat-card__desc">Local language lists, historical castle tours, and village custom guidelines.</p>
                </div>

                <div className="tg-cat-card">
                    <div className="tg-cat-card__icon"><i className="ri-camera-lens-line"></i></div>
                    <h3 className="tg-cat-card__title">Photography</h3>
                    <p className="tg-cat-card__desc">Best scenic spots, camera gear recommendations, and winter battery management.</p>
                </div>

                <div className="tg-cat-card">
                    <div className="tg-cat-card__icon"><i className="ri-plane-line"></i></div>
                    <h3 className="tg-cat-card__title">Logistics</h3>
                    <p className="tg-cat-card__desc">Visa processing timelines, government NOC regulations, and internal flight schedules.</p>
                </div>

                <div className="tg-cat-card">
                    <div className="tg-cat-card__icon"><i className="ri-heart-pulse-line"></i></div>
                    <h3 className="tg-cat-card__title">Safety</h3>
                    <p className="tg-cat-card__desc">AMS symptoms checklist, water purification rules, and high-altitude emergency plans.</p>
                </div>

                <div className="tg-cat-card">
                    <div className="tg-cat-card__icon"><i className="ri-calendar-event-line"></i></div>
                    <h3 className="tg-cat-card__title">Seasonal Travel</h3>
                    <p className="tg-cat-card__desc">Timing your visit for blossom spring blooms, summer peaks, or fiery autumn colors.</p>
                </div>

            </div>
        </div>
    </section>

    
    <section className="tg-insights">
        <div className="tg-container">
            <div className="tg-insights__inner">
                <div className="tg-insights__text">
                    <span className="tg-section-tag">MOUNTAIN WISDOM</span>
                    <h2 className="tg-section-title">KNOWLEDGE FROM THE MOUNTAINS</h2>
                    <p className="tg-insights__desc">At Broad Peak Adventures, we believe that the best guides are those who have lived in the valleys for their entire life. High-altitude environments can change within minutes, and local intuition is often the most valuable safety asset during an expedition.</p>
                    <p className="tg-insights__desc">We are committed to sharing this local wisdom. Through our editorial team of guides, cooks, and porters, we catalog ancestral weather tracking styles, historical routes, balti culinary choices, and local traditions to prepare you mentally and physically for the Karakoram.</p>
                </div>
                <div className="tg-insights__media">
                    <img src="/assets/images/who-we-are-small.png" alt="Balti guide standing in mountains" loading="lazy" />
                </div>
            </div>
        </div>
    </section>

    
    <section className="tg-newsletter" id="tg-newsletter">
        <div className="tg-container">
            <div className="tg-newsletter__inner">
                <h2 className="tg-newsletter__title">GET EXPEDITION INSIGHTS</h2>
                <p className="tg-newsletter__desc">Receive trekking guides, seasonal advice, route updates, and travel inspiration.</p>
                
                <form className="tg-newsletter__form" onsubmit="event.preventDefault(); alert('Successfully subscribed to insights!');">
                    <input type="email" placeholder="Your email address" required />
                    <button type="submit">SUBSCRIBE</button>
                </form>
            </div>
        </div>
    </section>

    
    <section className="tg-cta">
        <div className="tg-cta__overlay"></div>
        <div className="tg-container">
            <div className="tg-cta__content">
                <div className="tg-cta__text">
                    <span className="tg-cta__tag">THE KARAKORAM IS CALLING</span>
                    <h2 className="tg-cta__title">READY TO EXPERIENCE THE KARAKORAM?</h2>
                    <p className="tg-cta__desc">Join our team of local guides and discover the mountains, valleys, and lakes of Gilgit-Baltistan.</p>
                </div>
                <div className="tg-cta__buttons">
                    <a href="/expeditions" className="tg-btn-white">VIEW EXPEDITIONS</a>
                    <a href="/contact" className="tg-btn-outline-light">CONTACT OUR TEAM</a>
                </div>
            </div>
        </div>
    </section>

    
    <footer className="footer">
        <div className="tg-container footer__container">

            
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

        <div className="tg-container footer__bottom">
            <p>&copy; 2026 Broad Peak Adventures. All Rights Reserved.</p>
        </div>
    </footer>

    
    <a href="#" className="scroll-to-top">
        <i className="ri-arrow-up-line"></i>
    </a>
    </div>
  );
}
