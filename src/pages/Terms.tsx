import { useEffect } from 'react';

export default function Terms() {
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
                <button className="navbar__hamburger" id="terms-hamburger">
                    <i className="ri-menu-line"></i>
                </button>
            </div>
        </nav>

        
        <div className="mobile-menu" id="terms-mobile-menu">
            <div className="mobile-menu__header">
                <div className="navbar__logo">
                    <a href="/">BROAD PEAK</a>
                </div>
                <button className="mobile-menu__close" id="terms-menu-close">
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

    
    <section className="terms-hero" id="terms-hero">
        <div className="terms-hero__bg" id="terms-hero-bg"></div>
        <div className="terms-hero__overlay"></div>
        <div className="terms-hero__container terms-container">
            <span className="terms-hero__tagline">TRAVEL RESPONSIBLY</span>
            <h1 className="terms-hero__title">TERMS &amp; CONDITIONS</h1>
            <p className="terms-hero__desc">Please review the terms governing expeditions, bookings, cancellations, safety requirements, and use of our services.</p>
        </div>
    </section>

    
    <div className="terms-content">
        <div className="terms-container--narrow">
            
            
            <section className="terms-section">
                <h2>AGREEMENT OF SERVICES</h2>
                <span className="terms-updated">Last Updated: January 2026</span>
                <p>Welcome to Broad Peak Adventures. These terms and conditions outline the rules and regulations for the use of our services and govern all expeditions, travel packages, and bookings managed by our company.</p>
                <p>By accessing this website and booking a trip with us, we assume you accept these terms and conditions in full. Do not continue to use Broad Peak's services if you do not accept all of the terms stated on this page.</p>
            </section>

            
            <section className="terms-section">
                <h2>BOOKINGS &amp; RESERVATIONS</h2>
                <p>We aim to make your booking process as smooth as possible, ensuring all logistics are arranged well before your departure.</p>
                <ul className="terms-bullet-list">
                    <li><strong>Deposits:</strong> A non-refundable deposit of 20% of the total expedition cost is required to secure your reservation and initiate the permit application process.</li>
                    <li><strong>Confirmation Procedures:</strong> Your booking is only confirmed once the deposit has been received and you have been issued a formal booking confirmation receipt.</li>
                    <li><strong>Reservation Policies:</strong> All reservations are subject to availability. Early booking is highly recommended for peak season treks such as K2 Base Camp.</li>
                    <li><strong>Custom Itineraries:</strong> For bespoke expeditions, a tailored agreement will be provided. The deposit required may vary based on specific logistical needs.</li>
                </ul>
            </section>

            
            <section className="terms-section">
                <h2>PAYMENT TERMS</h2>
                <p>Clear financial agreements allow us to seamlessly organize the complex logistics required for high-altitude expeditions.</p>
                <ul className="terms-bullet-list">
                    <li><strong>Payment Schedules:</strong> The remaining 80% balance of your expedition fee must be paid in full at least 60 days prior to the commencement of the trip.</li>
                    <li><strong>Accepted Methods:</strong> We accept payments via bank transfer (SWIFT) and major international credit cards through our secure payment gateway.</li>
                    <li><strong>Currency Handling:</strong> All prices are quoted in USD unless otherwise specified. Payments made in other currencies will be converted based on the exchange rate on the date of transaction.</li>
                    <li><strong>Outstanding Balances:</strong> Failure to pay the outstanding balance by the due date may result in the cancellation of your booking and forfeiture of your deposit.</li>
                </ul>
            </section>

            
            <section className="terms-section">
                <h2>CANCELLATION POLICY</h2>
                <p>We understand that unforeseen circumstances may require you to cancel your trip. Our cancellation policy is structured to cover the non-recoverable costs we incur while organizing your expedition.</p>
                <div className="terms-policy-box">
                    <ul>
                        <li><strong>90+ days prior to departure:</strong> Loss of initial deposit only.</li>
                        <li><strong>60–90 days prior to departure:</strong> 50% of the total expedition cost is forfeited.</li>
                        <li><strong>Under 60 days prior to departure:</strong> 100% of the total expedition cost is forfeited.</li>
                    </ul>
                </div>
                <p>We strongly advise all travelers to purchase comprehensive travel insurance that includes trip cancellation coverage.</p>
            </section>

            
            <section className="terms-section">
                <h2>EXPEDITION RISKS</h2>
                <p>Trekking and climbing in the Karakoram range involve inherent risks that cannot be entirely eliminated.</p>
                <ul className="terms-bullet-list">
                    <li><strong>High Altitude Risks:</strong> Acute Mountain Sickness (AMS), HAPE, and HACE are serious risks. Our guides are trained in wilderness first aid, but travelers must disclose any pre-existing medical conditions.</li>
                    <li><strong>Weather Conditions:</strong> The Karakoram is subject to extreme and unpredictable weather. Itineraries may be altered or delayed for safety reasons at the discretion of the lead guide.</li>
                    <li><strong>Personal Responsibility:</strong> Travelers participate at their own risk and are responsible for their own physical preparation and decision-making on the trail.</li>
                    <li><strong>Required Fitness Levels:</strong> Certain expeditions require a high level of physical fitness. We reserve the right to refuse participation if a traveler is deemed physically unfit for the chosen itinerary.</li>
                </ul>
            </section>

            
            <section className="terms-section">
                <h2>LIABILITY LIMITATIONS</h2>
                <p>Broad Peak Adventures acts only as an agent for the various independent suppliers that provide hotel accommodations, transportation, or other services connected with the itineraries. Therefore, Broad Peak Adventures assumes no liability for any loss, damage, or injury caused by acts or omissions of such suppliers.</p>
                <p>Furthermore, we are not liable for delays or cancellations caused by <em>Force Majeure</em> events, including but not limited to:</p>
                <ul className="terms-bullet-list">
                    <li>Natural disasters, avalanches, or landslides.</li>
                    <li>Government restrictions, border closures, or political instability.</li>
                    <li>Domestic or international flight cancellations.</li>
                    <li>Health emergencies or global pandemics.</li>
                </ul>
            </section>

            
            <section className="terms-section">
                <h2>CODE OF CONDUCT</h2>
                <p>We expect all travelers to uphold the highest standards of respect and responsibility during their journey.</p>
                <ul className="terms-checklist">
                    <li><i className="ri-check-line"></i> <strong>Respect Local Culture:</strong> Dress modestly and respect the customs and traditions of the communities we visit.</li>
                    <li><i className="ri-check-line"></i> <strong>Environmental Responsibility:</strong> Adhere to "Leave No Trace" principles. Do not litter, and minimize your ecological footprint.</li>
                    <li><i className="ri-check-line"></i> <strong>Guide Instructions:</strong> The lead guide's decisions regarding safety and itinerary changes are final and must be followed.</li>
                    <li><i className="ri-check-line"></i> <strong>Group Safety:</strong> Act in a manner that does not endanger yourself or other members of the expedition team.</li>
                </ul>
            </section>

            
            <section className="terms-section">
                <h2>INTELLECTUAL PROPERTY</h2>
                <p>Unless otherwise stated, Broad Peak Adventures owns the intellectual property rights for all material on this website. All intellectual property rights are reserved.</p>
                <p>You may not republish, sell, rent, reproduce, or redistribute content, images, branding, or written materials from Broad Peak Adventures without explicit written permission.</p>
            </section>

            
            <section className="terms-section terms-contact-block">
                <h2>CONTACT INFORMATION</h2>
                <p>If you have any questions or queries regarding our Terms and Conditions, please reach out to our legal department:</p>
                <div className="terms-contact-details">
                    <p><i className="ri-mail-line"></i> legal@broadpeakadventures.com</p>
                    <p><i className="ri-map-pin-line"></i> Skardu, Gilgit-Baltistan</p>
                </div>
            </section>

        </div>
    </div>

    
    <section className="terms-cta">
        <div className="terms-cta__overlay"></div>
        <div className="terms-container">
            <div className="terms-cta__content">
                <div className="terms-cta__text">
                    <h2 className="terms-cta__title">READY TO EXPLORE RESPONSIBLY?</h2>
                </div>
                <div className="terms-cta__buttons">
                    <a href="/expeditions" className="terms-btn-white">VIEW EXPEDITIONS</a>
                    <a href="/contact" className="terms-btn-outline-light">CONTACT OUR TEAM</a>
                </div>
            </div>
        </div>
    </section>

    
    <footer className="footer">
        <div className="terms-container footer__container">

            
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

        <div className="terms-container footer__bottom">
            <p>&copy; 2026 Broad Peak Adventures. All Rights Reserved.</p>
        </div>
    </footer>

    
    <a href="#" className="scroll-to-top">
        <i className="ri-arrow-up-line"></i>
    </a>
    </div>
  );
}
