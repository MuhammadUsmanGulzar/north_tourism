import { useEffect } from 'react';

export default function About() {
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
                <button className="navbar__hamburger" id="abt-hamburger">
                    <i className="ri-menu-line"></i>
                </button>
            </div>
        </nav>

        
        <div className="mobile-menu" id="abt-mobile-menu">
            <div className="mobile-menu__header">
                <div className="navbar__logo">
                    <a href="/">BROAD PEAK</a>
                </div>
                <button className="mobile-menu__close" id="abt-menu-close">
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

    
    <section className="abt-hero" id="abt-hero">
        <div className="abt-hero__bg" id="abt-hero-bg"></div>
        <div className="abt-hero__overlay"></div>
        <div className="abt-hero__container abt-container">
            <span className="abt-hero__tagline">OUR STORY</span>
            <h1 className="abt-hero__title">GUIDED BY THE MOUNTAINS</h1>
            <p className="abt-hero__desc">Built by locals and inspired by the landscapes of Northern Pakistan, we create meaningful journeys that connect travelers with culture, adventure, and the spirit of the Karakoram.</p>
        </div>
    </section>

    
    <section className="abt-who">
        <div className="abt-container">
            <div className="abt-who__inner">
                <div className="abt-who__text">
                    <span className="abt-section-tag">WHO WE ARE</span>
                    <h2 className="abt-section-title">MORE THAN A TOUR COMPANY</h2>
                    <p className="abt-who__desc">Broad Peak Adventures was founded by native guides from Gilgit-Baltistan who wished to share the unmatched beauty of their homeland with travelers from all corners of the globe. Growing up in the shadows of Rakaposhi, Broad Peak, and K2, the mountains were not just scenery—they were our mentors, our playground, and our home.</p>
                    <p className="abt-who__desc">We believe that travel has the power to bridge worlds. Our goal is to craft itineraries that go beyond simple sightseeing, offering deep physical, emotional, and cultural engagement with these raw and holy mountain peaks.</p>
                </div>
                <div className="abt-who__media">
                    <img src="/assets/images/who-we-are-main.png" alt="Broad Peak guides team" loading="lazy" />
                </div>
            </div>
        </div>
    </section>

    
    <section className="abt-why">
        <div className="abt-container">
            <div className="abt-why__header">
                <span className="abt-section-tag">THE BROAD PEAK DIFFERENCE</span>
                <h2 className="abt-section-title">WHY TRAVEL WITH US</h2>
            </div>

            <div className="abt-why__grid">
                
                <div className="abt-why-card">
                    <div className="abt-why-card__icon"><i className="ri-map-pin-user-line"></i></div>
                    <h3 className="abt-why-card__title">Local Expertise</h3>
                    <p className="abt-why-card__desc">Born and raised in Gilgit-Baltistan, our guides have walked these high-altitude paths for generations. We know the weather patterns, the best vista points, and the local elders in every village.</p>
                </div>

                <div className="abt-why-card">
                    <div className="abt-why-card__icon"><i className="ri-shield-cross-line"></i></div>
                    <h3 className="abt-why-card__title">Safety First</h3>
                    <p className="abt-why-card__desc">From professional-grade satellite communication and altitude monitors to military helicopter evacuation insurance support, our team ensures the highest safety standards at every point of the journey.</p>
                </div>

                <div className="abt-why-card">
                    <div className="abt-why-card__icon"><i className="ri-shake-hands-line"></i></div>
                    <h3 className="abt-why-card__title">Authentic Experiences</h3>
                    <p className="abt-why-card__desc">We lead you into real, living communities. Dine with local families, learn the history of ancient forts, and sleep in local homesteads rather than generic, foreign-owned resorts.</p>
                </div>

                <div className="abt-why-card">
                    <div className="abt-why-card__icon"><i className="ri-earth-line"></i></div>
                    <h3 className="abt-why-card__title">Sustainable Tourism</h3>
                    <p className="abt-why-card__desc">We practice strict Leave No Trace guidelines, support community education programs, pay above-market fair wages to our porters, and work actively to clean high-altitude campsites.</p>
                </div>

            </div>
        </div>
    </section>

    
    <section className="abt-values">
        <div className="abt-container">
            <div className="abt-values__header">
                <span className="abt-section-tag">GUIDING PRINCIPLES</span>
                <h2 className="abt-section-title">OUR VALUES</h2>
            </div>

            <div className="abt-values__grid">
                
                <div className="abt-value-item">
                    <div className="abt-value-item__number">01</div>
                    <h3 className="abt-value-item__title">Respect</h3>
                    <p className="abt-value-item__desc">Honoring local traditions, religious heritage, community leadership, and the fragile environment of the mountains.</p>
                </div>

                <div className="abt-value-item">
                    <div className="abt-value-item__number">02</div>
                    <h3 className="abt-value-item__title">Adventure</h3>
                    <p className="abt-value-item__desc">Pushing the boundaries of exploration safely, encouraging personal growth and a sense of wonder in the wild.</p>
                </div>

                <div className="abt-value-item">
                    <div className="abt-value-item__number">03</div>
                    <h3 className="abt-value-item__title">Community</h3>
                    <p className="abt-value-item__desc">Ensuring that the economic benefits of tourism directly empower local cooks, porters, and family run lodges.</p>
                </div>

                <div className="abt-value-item">
                    <div className="abt-value-item__number">04</div>
                    <h3 className="abt-value-item__title">Preservation</h3>
                    <p className="abt-value-item__desc">Protecting the natural resources, glaciers, forests, and cultural histories of Northern Pakistan for future generations.</p>
                </div>

            </div>
        </div>
    </section>

    
    <section className="abt-region">
        <div className="abt-region__bg"></div>
        <div className="abt-region__overlay"></div>
        <div className="abt-container">
            <div className="abt-region__content">
                <span className="abt-region__tag">THE ROOF OF THE WORLD</span>
                <h2 className="abt-region__title">WELCOME TO GILGIT-BALTISTAN</h2>
                <p className="abt-region__desc">Gilgit-Baltistan is home to three of the world's most spectacular mountain ranges: the Karakoram, the Himalayas, and the Hindu Kush. Containing five of the world's fourteen 8,000-meter peaks, including K2, it is a land of massive glaciers, emerald lakes, and deep, isolated valleys. When you travel here, you step into a land where nature's scale dwarfs human ambition, offering a perspective found nowhere else on earth.</p>
            </div>
        </div>
    </section>

    
    <section className="abt-safety">
        <div className="abt-container">
            <div className="abt-safety__inner">
                <div className="abt-safety__media">
                    <img src="/assets/images/travel-tent.png" alt="High-altitude camping setup" loading="lazy" />
                </div>
                <div className="abt-safety__text">
                    <span className="abt-section-tag">TRAVEL ETHICS</span>
                    <h2 className="abt-section-title">SAFETY &amp; RESPONSIBILITY</h2>
                    <p className="abt-safety__desc">High-altitude expeditions carry inherent challenges, which is why safety is built into every element of our operations. Our guides undergo regular wilderness medicine training and carry emergency oxygen and pulse oximeters on all treks above 4,000m.</p>
                    <p className="abt-safety__desc">Equally important is our responsibility to the land and its people. We support waste cleanup campaigns, limit our group sizes to minimize environmental impact, and provide proper cold-weather gear and fair compensation to our team of porters.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="abt-cta" id="abt-contact">
        <div className="abt-cta__overlay"></div>
        <div className="abt-container">
            <div className="abt-cta__content">
                <div className="abt-cta__text">
                    <span className="abt-cta__tag">START YOUR JOURNEY</span>
                    <h2 className="abt-cta__title">READY TO EXPLORE WITH US?</h2>
                    <p className="abt-cta__desc">Join our team of local guides and discover the valleys, cultures, and mountains of Northern Pakistan.</p>
                </div>
                <div className="abt-cta__buttons">
                    <a href="/expeditions" className="abt-btn-white">VIEW EXPEDITIONS</a>
                    <a href="/contact" className="abt-btn-outline-light">CONTACT OUR TEAM</a>
                </div>
            </div>
        </div>
    </section>

    
    <footer className="footer">
        <div className="abt-container footer__container">

            
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
                    <li><a href="/terms">Terms &amp; Conditions</a></li>
                    <li><a href="#">Email Us</a></li>
                    <li><a href="#">WhatsApp Inquiry</a></li>
                </ul>
            </div>

        </div>

        <div className="abt-container footer__bottom">
            <p>&copy; 2026 Broad Peak Adventures. All Rights Reserved.</p>
        </div>
    </footer>

    
    <a href="#" className="scroll-to-top">
        <i className="ri-arrow-up-line"></i>
    </a>
    </div>
  );
}
