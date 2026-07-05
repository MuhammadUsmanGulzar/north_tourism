import { useEffect } from 'react';

export default function Contact() {
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
                <button className="navbar__hamburger" id="con-hamburger">
                    <i className="ri-menu-line"></i>
                </button>
            </div>
        </nav>

        
        <div className="mobile-menu" id="con-mobile-menu">
            <div className="mobile-menu__header">
                <div className="navbar__logo">
                    <a href="/">BROAD PEAK</a>
                </div>
                <button className="mobile-menu__close" id="con-menu-close">
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

    
    <section className="con-hero" id="con-hero">
        <div className="con-hero__bg" id="con-hero-bg"></div>
        <div className="con-hero__overlay"></div>
        <div className="con-hero__container con-container">
            <span className="con-hero__tagline">GET IN TOUCH</span>
            <h1 className="con-hero__title">START YOUR<br />KARAKORAM JOURNEY</h1>
            <p className="con-hero__desc">Whether you're planning a K2 expedition, a Hunza cultural experience, or a custom adventure, our local team is ready to help.</p>
        </div>
    </section>

    
    <section className="con-methods">
        <div className="con-container">
            <div className="con-methods__grid">
                
                <div className="con-method-card">
                    <div className="con-method-card__icon"><i className="ri-whatsapp-line"></i></div>
                    <h3 className="con-method-card__title">WhatsApp</h3>
                    <p className="con-method-card__desc">For instant help and real-time trip planning inquiries.</p>
                    <a href="https://wa.me/923001234567" target="_blank" rel="noopener" className="con-method-card__link">+92 300 1234567</a>
                </div>

                <div className="con-method-card">
                    <div className="con-method-card__icon"><i className="ri-mail-open-line"></i></div>
                    <h3 className="con-method-card__title">Email</h3>
                    <p className="con-method-card__desc">Send us your custom routes, details, or group itineraries.</p>
                    <a href="mailto:info@broadpeakadventures.com" className="con-method-card__link">info@broadpeakadventures.com</a>
                </div>

                <div className="con-method-card">
                    <div className="con-method-card__icon"><i className="ri-phone-line"></i></div>
                    <h3 className="con-method-card__title">Phone</h3>
                    <p className="con-method-card__desc">Speak with our Skardu office directly during business hours.</p>
                    <a href="tel:+92511234567" className="con-method-card__link">+92 51 1234567</a>
                </div>

                <div className="con-method-card">
                    <div className="con-method-card__icon"><i className="ri-map-pin-line"></i></div>
                    <h3 className="con-method-card__title">Office Location</h3>
                    <p className="con-method-card__desc">Visit our local operations headquarter in Baltistan.</p>
                    <span className="con-method-card__link">Skardu, Gilgit-Baltistan, Pakistan</span>
                </div>

            </div>
        </div>
    </section>

    
    <section className="con-inquiry-section" id="con-inquiry">
        <div className="con-container">
            <div className="con-inquiry__grid">
                
                <div className="con-inquiry__text-block">
                    <span className="con-section-tag">TELL US ABOUT YOUR TRIP</span>
                    <h2 className="con-section-title">PLAN YOUR ADVENTURE</h2>
                    <p className="con-inquiry__desc">Complete this planning form and our travel coordinators will get back to you with custom itinerary drafts, pricing breakdowns, and logistical options.</p>
                    
                    <div className="con-inquiry__highlights">
                        <div className="con-inquiry__highlight-item">
                            <i className="ri-checkbox-circle-fill"></i>
                            <span>All domestic permits &amp; NOC support included.</span>
                        </div>
                        <div className="con-inquiry__highlight-item">
                            <i className="ri-checkbox-circle-fill"></i>
                            <span>100% locally owned and operated agency.</span>
                        </div>
                    </div>
                </div>

                <div className="con-inquiry__form-wrapper">
                    <form className="con-inquiry__form" action="thank-you.html">
                        
                        <div className="con-inquiry__form-row">
                            <div className="con-inquiry__form-group">
                                <label htmlFor="fullname">Full Name</label>
                                <input type="text" id="fullname" placeholder="Your name" required />
                            </div>
                            <div className="con-inquiry__form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Your email" required />
                            </div>
                        </div>

                        <div className="con-inquiry__form-row">
                            <div className="con-inquiry__form-group">
                                <label htmlFor="country">Country</label>
                                <input type="text" id="country" placeholder="Your country" required />
                            </div>
                            <div className="con-inquiry__form-group">
                                <label htmlFor="interest">Expedition Interest</label>
                                <select id="interest" required defaultValue="">
                                    <option value="" disabled>Select an expedition</option>
                                    <option value="k2">K2 Base Camp Trek</option>
                                    <option value="concordia">Concordia Trek</option>
                                    <option value="snowlake">Snow Lake Trek</option>
                                    <option value="nangaparbat">Nanga Parbat Base Camp</option>
                                    <option value="fairymeadows">Fairy Meadows</option>
                                    <option value="hunza">Hunza Explorer</option>
                                    <option value="attabad">Attabad Lake Adventure</option>
                                    <option value="deosai">Deosai Experience</option>
                                    <option value="custom">Custom Private Journey</option>
                                </select>
                            </div>
                        </div>

                        <div className="con-inquiry__form-row">
                            <div className="con-inquiry__form-group">
                                <label htmlFor="month">Preferred Travel Month</label>
                                <select id="month" required defaultValue="">
                                    <option value="" disabled>Select a month</option>
                                    <option value="jan">January</option>
                                    <option value="feb">February</option>
                                    <option value="mar">March</option>
                                    <option value="apr">April</option>
                                    <option value="may">May</option>
                                    <option value="jun">June</option>
                                    <option value="jul">July</option>
                                    <option value="aug">August</option>
                                    <option value="sep">September</option>
                                    <option value="oct">October</option>
                                    <option value="nov">November</option>
                                    <option value="dec">December</option>
                                </select>
                            </div>
                            <div className="con-inquiry__form-group">
                                <label htmlFor="groupsize">Group Size</label>
                                <select id="groupsize" required>
                                    <option value="1">1 Person</option>
                                    <option value="2">2 People</option>
                                    <option value="3-5">3 - 5 People</option>
                                    <option value="6-10">6 - 10 People</option>
                                    <option value="11+">11+ People</option>
                                </select>
                            </div>
                        </div>

                        <div className="con-inquiry__form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Share any specific dates, preferences, or fitness questions..." required></textarea>
                        </div>

                        <div className="con-inquiry__form-buttons">
                            <button type="submit" className="con-btn-primary">SEND INQUIRY</button>
                            <a href="https://wa.me/923001234567" target="_blank" rel="noopener" className="con-btn-whatsapp"><i className="ri-whatsapp-line"></i> WHATSAPP US</a>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    </section>

    
    <section className="con-why">
        <div className="con-container">
            <div className="con-why__header">
                <span className="con-section-tag">OUR PROMISE</span>
                <h2 className="con-section-title">WHY CONTACT US</h2>
            </div>

            <div className="con-why__grid">
                
                <div className="con-why-card">
                    <div className="con-why-card__icon"><i className="ri-chat-smile-3-line"></i></div>
                    <h3 className="con-why-card__title">Local Experts</h3>
                    <p className="con-why-card__desc">You speak directly to the operations team in Skardu, not an offshore booking portal. You get real mountain facts.</p>
                </div>

                <div className="con-why-card">
                    <div className="con-why-card__icon"><i className="ri-flashlight-line"></i></div>
                    <h3 className="con-why-card__title">Fast Responses</h3>
                    <p className="con-why-card__desc">We aim to answer all email requests within 24 hours, and we provide instant support via our official WhatsApp line.</p>
                </div>

                <div className="con-why-card">
                    <div className="con-why-card__icon"><i className="ri-magic-line"></i></div>
                    <h3 className="con-why-card__title">Custom Itineraries</h3>
                    <p className="con-why-card__desc">We build completely bespoke routes, adjusting altitude climb rates, campsite nights, and support staff to fit your requirements.</p>
                </div>

                <div className="con-why-card">
                    <div className="con-why-card__icon"><i className="ri-heart-pulse-line"></i></div>
                    <h3 className="con-why-card__title">Safety &amp; Logistics</h3>
                    <p className="con-why-card__desc">We coordinate hotel lodgings, reliable 4x4 drivers, local porter associations, and high-altitude emergency safety protocols.</p>
                </div>

            </div>
        </div>
    </section>

    
    <section className="con-faq">
        <div className="con-container">
            <div className="con-faq__header">
                <span className="con-faq__subtitle">FAQ</span>
                <h2 className="con-faq__title">PLAN YOUR VISIT</h2>
                <p className="con-faq__desc">Essential details to help you prepare before reaching out.</p>
            </div>

            <div className="con-faq__accordion" id="con-faq-accordion">

                <div className="con-faq__item active">
                    <button className="con-faq__header-btn">
                        <span>How quickly do you respond?</span>
                        <i className="ri-add-line con-faq__icon"></i>
                    </button>
                    <div className="con-faq__body con-faq__body--open">
                        <p className="con-faq__answer">We typically respond to email inquiries within 12 to 24 hours. For urgent questions or real-time travel planning, you can get in touch with our team instantly via WhatsApp.</p>
                    </div>
                </div>

                <div className="con-faq__item">
                    <button className="con-faq__header-btn">
                        <span>Can I request a private tour?</span>
                        <i className="ri-add-line con-faq__icon"></i>
                    </button>
                    <div className="con-faq__body">
                        <p className="con-faq__answer">Yes, absolutely. We specialize in private departures for solo travelers, families, professional photographers, and private climbing clubs. We can custom tailor the entire itinerary to your interests.</p>
                    </div>
                </div>

                <div className="con-faq__item">
                    <button className="con-faq__header-btn">
                        <span>Do you help with permits?</span>
                        <i className="ri-add-line con-faq__icon"></i>
                    </button>
                    <div className="con-faq__body">
                        <p className="con-faq__answer">Yes. Broad Peak Adventures is a fully registered mountaineering agency. We handle all governmental NOCs, park entry fees, and special border area permissions required for foreign travelers.</p>
                    </div>
                </div>

                <div className="con-faq__item">
                    <button className="con-faq__header-btn">
                        <span>Can beginners join expeditions?</span>
                        <i className="ri-add-line con-faq__icon"></i>
                    </button>
                    <div className="con-faq__body">
                        <p className="con-faq__answer">We offer various journeys suited for different fitness levels. While extreme treks like K2 Base Camp require high fitness and prior high-altitude experience, easy tours like Hunza Explorer and Attabad Lake are highly suitable for beginners.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    
    <section className="con-cta">
        <div className="con-cta__overlay"></div>
        <div className="con-container">
            <div className="con-cta__content">
                <div className="con-cta__text">
                    <span className="con-cta__tag">THE KARAKORAM IS WAITING</span>
                    <h2 className="con-cta__title">READY FOR YOUR NEXT ADVENTURE?</h2>
                    <p className="con-cta__desc">Explore our legendary high-altitude trekking packages or discover the beautiful valleys of Gilgit-Baltistan.</p>
                </div>
                <div className="con-cta__buttons">
                    <a href="/expeditions" className="con-btn-white">EXPLORE EXPEDITIONS</a>
                    <a href="/destinations" className="con-btn-outline-light">DISCOVER DESTINATIONS</a>
                </div>
            </div>
        </div>
    </section>

    
    <footer className="footer">
        <div className="con-container footer__container">

            
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

        <div className="con-container footer__bottom">
            <p>&copy; 2026 Broad Peak Adventures. All Rights Reserved.</p>
        </div>
    </footer>

    
    <a href="#" className="scroll-to-top">
        <i className="ri-arrow-up-line"></i>
    </a>
    </div>
  );
}
