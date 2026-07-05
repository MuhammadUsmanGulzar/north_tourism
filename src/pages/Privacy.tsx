import { useEffect } from 'react';

export default function Privacy() {
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
                <button className="navbar__hamburger" id="privacy-hamburger">
                    <i className="ri-menu-line"></i>
                </button>
            </div>
        </nav>

        
        <div className="mobile-menu" id="privacy-mobile-menu">
            <div className="mobile-menu__header">
                <div className="navbar__logo">
                    <a href="/">BROAD PEAK</a>
                </div>
                <button className="mobile-menu__close" id="privacy-menu-close">
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

    
    <section className="privacy-hero" id="privacy-hero">
        <div className="privacy-hero__bg" id="privacy-hero-bg"></div>
        <div className="privacy-hero__overlay"></div>
        <div className="privacy-hero__container privacy-container">
            <span className="privacy-hero__tagline">YOUR TRUST MATTERS</span>
            <h1 className="privacy-hero__title">PRIVACY POLICY</h1>
            <p className="privacy-hero__desc">Learn how we collect, use, and protect your information while helping you explore Northern Pakistan.</p>
        </div>
    </section>

    
    <div className="privacy-content">
        <div className="privacy-container--narrow">
            
            
            <section className="privacy-section">
                <h2>OUR COMMITMENT TO PRIVACY</h2>
                <span className="privacy-updated">Last Updated: January 2026</span>
                <p>At Broad Peak Adventures, we hold a deep respect for our travelers' information, matching our respect for the magnificent landscapes of the Karakoram. We believe in transparency and responsible data handling.</p>
                <p>This Privacy Policy explains how your personal data is collected, processed, and safeguarded when you interact with our website, inquire about expeditions, or travel with us.</p>
            </section>

            
            <section className="privacy-section">
                <h2>INFORMATION WE COLLECT</h2>
                <p>We only collect the essential information required to plan and execute your expedition safely and effectively.</p>
                
                <div className="privacy-cards">
                    <div className="privacy-card">
                        <div className="privacy-card__icon"><i className="ri-user-line"></i></div>
                        <h3>Contact Information</h3>
                        <p>Name, email address, phone number, and mailing address.</p>
                    </div>
                    <div className="privacy-card">
                        <div className="privacy-card__icon"><i className="ri-map-pin-line"></i></div>
                        <h3>Travel Preferences</h3>
                        <p>Destinations of interest, fitness levels, and dietary requirements.</p>
                    </div>
                    <div className="privacy-card">
                        <div className="privacy-card__icon"><i className="ri-file-text-line"></i></div>
                        <h3>Inquiry Forms</h3>
                        <p>Any details provided voluntarily through our contact and booking forms.</p>
                    </div>
                    <div className="privacy-card">
                        <div className="privacy-card__icon"><i className="ri-mail-send-line"></i></div>
                        <h3>Newsletter Subscriptions</h3>
                        <p>Your email address and preferences if you opt-in to our updates.</p>
                    </div>
                </div>
            </section>

            
            <section className="privacy-section">
                <h2>HOW WE USE YOUR INFORMATION</h2>
                <ul className="privacy-list">
                    <li><i className="ri-check-line"></i> <strong>Respond to inquiries:</strong> To answer your questions and provide personalized travel advice.</li>
                    <li><i className="ri-check-line"></i> <strong>Organize expeditions:</strong> To arrange permits, transportation, and accommodation in Pakistan.</li>
                    <li><i className="ri-check-line"></i> <strong>Improve services:</strong> To analyze trends and enhance the user experience of our website.</li>
                    <li><i className="ri-check-line"></i> <strong>Send updates:</strong> To send you newsletters and promotional offers, only with your explicit consent.</li>
                </ul>
            </section>

            
            <section className="privacy-section">
                <h2>DATA PROTECTION</h2>
                <p>Your trust is paramount. We implement strict security measures to ensure secure handling of all personal data. We operate under a strict "No Selling of Data" policy.</p>
                <p>Access to your information is limited exclusively to authorized Broad Peak staff and guides who require it to perform their duties safely. All data is subject to responsible storage practices in compliance with international privacy standards.</p>
            </section>

            
            <section className="privacy-section">
                <h2>COOKIES &amp; ANALYTICS</h2>
                <p>We use cookies to improve your browsing experience. These include:</p>
                <ul className="privacy-bullet-list">
                    <li><strong>Essential cookies:</strong> Required for the website to function properly.</li>
                    <li><strong>Analytics cookies:</strong> Used to understand how visitors interact with the site, helping us improve our content.</li>
                    <li><strong>User preferences:</strong> Used to remember your settings and provide a customized experience.</li>
                </ul>
            </section>

            
            <section className="privacy-section">
                <h2>THIRD-PARTY SERVICES</h2>
                <p>In order to operate effectively, we utilize trusted third-party services. These may include email providers for newsletters, secure payment partners for transactions, and mapping services for our expedition itineraries. We ensure all our partners adhere to strict data protection standards.</p>
            </section>

            
            <section className="privacy-section">
                <h2>YOUR RIGHTS</h2>
                <p>You maintain full control over your personal information. You have the right to:</p>
                <ul className="privacy-list">
                    <li><i className="ri-check-line"></i> <strong>Request access:</strong> Obtain a copy of the personal data we hold about you.</li>
                    <li><i className="ri-check-line"></i> <strong>Request corrections:</strong> Update or correct any inaccurate information.</li>
                    <li><i className="ri-check-line"></i> <strong>Request deletion:</strong> Ask us to remove your personal data from our systems.</li>
                    <li><i className="ri-check-line"></i> <strong>Unsubscribe:</strong> Opt-out of marketing communications at any time.</li>
                </ul>
            </section>

            
            <section className="privacy-section privacy-contact-block">
                <h2>CONTACT REGARDING PRIVACY</h2>
                <p>If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us:</p>
                <div className="privacy-contact-details">
                    <p><i className="ri-mail-line"></i> privacy@broadpeakadventures.com</p>
                    <p><i className="ri-map-pin-line"></i> Skardu, Gilgit-Baltistan</p>
                </div>
            </section>

        </div>
    </div>

    
    <section className="privacy-cta">
        <div className="privacy-cta__overlay"></div>
        <div className="privacy-container">
            <div className="privacy-cta__content">
                <div className="privacy-cta__text">
                    <h2 className="privacy-cta__title">QUESTIONS ABOUT YOUR DATA?</h2>
                </div>
                <div className="privacy-cta__buttons">
                    <a href="/contact" className="privacy-btn-white">CONTACT OUR TEAM</a>
                    <a href="/" className="privacy-btn-outline-light">RETURN HOME</a>
                </div>
            </div>
        </div>
    </section>

    
    <footer className="footer">
        <div className="privacy-container footer__container">

            
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

        <div className="privacy-container footer__bottom">
            <p>&copy; 2026 Broad Peak Adventures. All Rights Reserved.</p>
        </div>
    </footer>

    
    <a href="#" className="scroll-to-top">
        <i className="ri-arrow-up-line"></i>
    </a>
    </div>
  );
}
