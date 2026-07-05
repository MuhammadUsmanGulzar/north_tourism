import { useEffect } from 'react';

export default function ThankYou() {
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
                <button className="navbar__hamburger" id="ty-hamburger">
                    <i className="ri-menu-line"></i>
                </button>
            </div>
        </nav>

        
        <div className="mobile-menu" id="ty-mobile-menu">
            <div className="mobile-menu__header">
                <div className="navbar__logo">
                    <a href="/">BROAD PEAK</a>
                </div>
                <button className="mobile-menu__close" id="ty-menu-close">
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

    
    <section className="ty-hero" id="ty-hero">
        <div className="ty-hero__bg" id="ty-hero-bg"></div>
        <div className="ty-hero__overlay"></div>
        <div className="ty-hero__container ty-container">
            <span className="ty-hero__tagline">YOUR JOURNEY BEGINS HERE</span>
            <h1 className="ty-hero__title">THANK YOU FOR REACHING OUT</h1>
            <p className="ty-hero__desc">Our expedition team has received your inquiry and will contact you within 24 hours to start planning your adventure across Northern Pakistan.</p>
        </div>
    </section>

    
    <section className="ty-confirmation-section">
        <div className="ty-container">
            <div className="ty-confirmation-card">
                <div className="ty-confirmation-icon">
                    <i className="ri-mail-check-line"></i>
                </div>
                <h2>INQUIRY SUCCESSFULLY RECEIVED</h2>
                <p>Thank you for choosing Broad Peak Adventures. We're excited to help you explore the spectacular landscapes of the Karakoram. Here is what you can expect next:</p>
                
                <ul className="ty-confirmation-list">
                    <li><i className="ri-checkbox-circle-fill"></i> Inquiry Received</li>
                    <li><i className="ri-checkbox-circle-fill"></i> Response within 24 hours</li>
                    <li><i className="ri-checkbox-circle-fill"></i> Local experts assigned</li>
                    <li><i className="ri-checkbox-circle-fill"></i> Personalized itinerary support</li>
                </ul>
            </div>
        </div>
    </section>

    
    <section className="ty-next-section">
        <div className="ty-container">
            <h3 className="ty-section-subtitle">THE PROCESS</h3>
            <h2 className="ty-section-title">WHAT HAPPENS NEXT</h2>

            <div className="ty-next-grid">
                
                <div className="ty-next-card">
                    <div className="ty-next-card__icon"><i className="ri-file-search-line"></i></div>
                    <div className="ty-next-card__number">01</div>
                    <h4>We Review Your Requirements</h4>
                    <p>Our team carefully analyzes your dates, group size, and specific adventure interests.</p>
                </div>
                
                <div className="ty-next-card">
                    <div className="ty-next-card__icon"><i className="ri-customer-service-2-line"></i></div>
                    <div className="ty-next-card__number">02</div>
                    <h4>Our Local Team Contacts You</h4>
                    <p>A dedicated expedition specialist based in Gilgit-Baltistan will reach out to you.</p>
                </div>
                
                <div className="ty-next-card">
                    <div className="ty-next-card__icon"><i className="ri-map-2-line"></i></div>
                    <div className="ty-next-card__number">03</div>
                    <h4>Your Custom Journey Begins</h4>
                    <p>We'll refine your itinerary, organize permits, and prepare for your arrival.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="ty-actions-section">
        <div className="ty-container ty-actions-inner">
            <a href="/expeditions" className="ty-btn-primary">
                EXPLORE EXPEDITIONS <i className="ri-arrow-right-line"></i>
            </a>
            <a href="/" className="ty-btn-outline">
                <i className="ri-home-4-line"></i> RETURN HOME
            </a>
        </div>
    </section>

    
    <section className="ty-newsletter-section">
        <div className="ty-container">
            <div className="ty-newsletter-box">
                <div className="ty-newsletter-content">
                    <h2>STAY INSPIRED</h2>
                    <p>Receive travel stories, expedition updates, and seasonal recommendations from the Karakoram.</p>
                </div>
                <div className="ty-newsletter-form">
                    <input type="email" placeholder="Your email address" readonly />
                    <button type="button">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </section>

    
    <section className="ty-cta">
        <div className="ty-cta__overlay"></div>
        <div className="ty-container">
            <div className="ty-cta__content">
                <div className="ty-cta__text">
                    <h2 className="ty-cta__title">THE MOUNTAINS ARE WAITING</h2>
                    <p className="ty-cta__desc">Until we speak, continue exploring the breathtaking landscapes, cultures, and adventures of Northern Pakistan.</p>
                </div>
                <div className="ty-cta__buttons">
                    <a href="/destinations" className="ty-btn-white">DISCOVER DESTINATIONS</a>
                </div>
            </div>
        </div>
    </section>

    
    <footer className="footer">
        <div className="ty-container footer__container">

            
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

        <div className="ty-container footer__bottom">
            <p>&copy; 2026 Broad Peak Adventures. All Rights Reserved.</p>
        </div>
    </footer>

    
    <a href="#" className="scroll-to-top">
        <i className="ri-arrow-up-line"></i>
    </a>
    </div>
  );
}
