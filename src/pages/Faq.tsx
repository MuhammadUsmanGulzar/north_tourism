import { useEffect } from 'react';

export default function Faq() {
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
                <button className="navbar__hamburger" id="faq-hamburger">
                    <i className="ri-menu-line"></i>
                </button>
            </div>
        </nav>

        
        <div className="mobile-menu" id="faq-mobile-menu">
            <div className="mobile-menu__header">
                <div className="navbar__logo">
                    <a href="/">BROAD PEAK</a>
                </div>
                <button className="mobile-menu__close" id="faq-menu-close">
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

    
    <section className="faq-hero" id="faq-hero">
        <div className="faq-hero__bg" id="faq-hero-bg"></div>
        <div className="faq-hero__overlay"></div>
        <div className="faq-hero__container faq-container">
            <span className="faq-hero__tagline">TRAVEL WITH CONFIDENCE</span>
            <h1 className="faq-hero__title">FREQUENTLY ASKED<br />QUESTIONS</h1>
            <p className="faq-hero__desc">Everything you need to know before exploring the mountains, valleys, and cultures of Northern Pakistan.</p>
        </div>
    </section>

    
    <section className="faq-section">
        <div className="faq-container">
            
            
            <div className="faq-category">
                <div className="faq-category__header">
                    <span className="faq-category__tag">01</span>
                    <h2 className="faq-category__title">PLANNING YOUR JOURNEY</h2>
                </div>
                <div className="faq-list">
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>What is the best time to visit Northern Pakistan?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>The best time to visit depends on your goals. Spring (April to May) is beautiful for cherry blossoms in Hunza and Skardu. Summer (June to August) is the prime season for high-altitude trekking and expeditions. Autumn (September to October) offers stunning fall colors, while winter (November to March) is ideal for snow leopards and winter sports.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>Do I need a visa to visit Pakistan?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>Yes, most nationalities require a visa to enter Pakistan. The good news is that Pakistan offers an easy online E-Visa system for citizens of over 190 countries. Tourist visas are usually processed within 7-10 working days. We provide a Letter of Invitation (LOI) to our booked clients to support their application.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>How many days should I plan for my trip?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>For cultural tours and sightseeing, we recommend a minimum of 7 to 10 days. For major trekking expeditions like K2 Base Camp, you should plan for at least 20 to 22 days to allow for proper acclimatization and travel logistics.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>Can I customize my itinerary?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>Absolutely. We specialize in tailor-made itineraries. Whether you want to add an extra day for photography, combine a cultural tour with a short trek, or plan a private family holiday, our team will design the perfect trip for you.</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="faq-category">
                <div className="faq-category__header">
                    <span className="faq-category__tag">02</span>
                    <h2 className="faq-category__title">EXPEDITIONS &amp; TREKKING</h2>
                </div>
                <div className="faq-list">
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>How physically demanding are your expeditions?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>Our expeditions range from moderate to extreme. Treks like Fairy Meadows are suitable for beginners with average fitness. High-altitude treks like K2 Base Camp or Snow Lake require excellent physical condition, endurance, and previous trekking experience over rugged terrain.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>Do I need previous trekking experience?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>For high-altitude treks (above 4,000m), previous experience is highly recommended. However, we offer several lower-altitude treks and cultural tours that require no prior experience—just a positive attitude and basic fitness.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>What equipment should I bring?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>Upon booking, we provide a comprehensive packing list tailored to your specific expedition. Generally, you will need a good quality sleeping bag, sturdy trekking boots, layered clothing, a down jacket, and personal medication. We provide all communal camping and cooking gear.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>Are permits included in the packages?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>Yes, all required government permits, National Park fees, and trekking royalties (where applicable) are included in our expedition packages. We handle all the paperwork for you.</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="faq-category">
                <div className="faq-category__header">
                    <span className="faq-category__tag">03</span>
                    <h2 className="faq-category__title">SAFETY FIRST</h2>
                </div>
                <div className="faq-list">
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>How safe is travel in Gilgit-Baltistan?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>Gilgit-Baltistan is renowned as one of the safest regions in Pakistan. The local communities are incredibly hospitable, peaceful, and welcoming to tourists. Crime rates are exceptionally low.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>Do you provide emergency support?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>Yes. Our guides are trained in wilderness first aid. On remote expeditions, we carry satellite phones for emergency communication. We work closely with local authorities and the Askari Aviation helicopter rescue service for emergency evacuations.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>Is travel insurance required?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>Yes. Comprehensive travel insurance that covers high-altitude trekking (up to the maximum altitude of your trek) and emergency helicopter evacuation is mandatory for all our trekking and expedition clients.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>Who leads the expeditions?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>Our expeditions are led by highly experienced, licensed local guides who have spent their lives in these mountains. They possess intimate knowledge of the terrain, weather patterns, and local cultures.</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="faq-category">
                <div className="faq-category__header">
                    <span className="faq-category__tag">04</span>
                    <h2 className="faq-category__title">BOOKING INFORMATION</h2>
                </div>
                <div className="faq-list">
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>How do I reserve a trip?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>You can start by contacting us via our website, email, or WhatsApp. Once we finalize your itinerary, we will send you a booking form and an invoice for a deposit to secure your reservation.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>What payment methods do you accept?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>We accept international bank wire transfers (SWIFT). For some services, we may also accept secure online credit card payments via third-party processors. Details will be provided during booking.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>What is your cancellation policy?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>Cancellations made 60 days prior to departure receive a full refund minus a small administrative fee. Cancellations between 30-59 days incur a 50% charge. No refunds are available for cancellations within 30 days of the trip start date.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>Do you offer group discounts?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>Yes, we offer special rates for university groups, photography clubs, and large friend groups (usually 8 or more people). Please contact us directly for a custom quote.</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="faq-category">
                <div className="faq-category__header">
                    <span className="faq-category__tag">05</span>
                    <h2 className="faq-category__title">CUSTOM EXPERIENCES</h2>
                </div>
                <div className="faq-list">
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>Can families book private tours?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>Absolutely. We organize many family-friendly tours that focus on culture, light walks, and comfortable accommodations, ensuring a safe and memorable experience for all ages.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>Do you organize photography expeditions?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>Yes, we design specialized itineraries that prioritize golden hour lighting, unique vantage points, and slower pacing to allow photographers ample time to capture the stunning landscapes and cultures.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>Can luxury itineraries be arranged?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>Yes. While Northern Pakistan is rugged, several areas like Hunza and Skardu now offer premium boutique hotels. We can arrange luxury transport, premium accommodations, and private chefs for a high-end experience.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-item__question">
                            <h3>Are cultural experiences available?</h3>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        <div className="faq-item__answer">
                            <p>Cultural immersion is a core part of what we do. We can arrange visits to ancient forts, traditional music performances, local family dinners, and artisan workshops to connect you deeply with the region's heritage.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    
    <section className="faq-cta">
        <div className="faq-cta__overlay"></div>
        <div className="faq-container">
            <div className="faq-cta__content">
                <div className="faq-cta__text">
                    <span className="faq-cta__tag">WE'RE HERE TO HELP</span>
                    <h2 className="faq-cta__title">CAN'T FIND YOUR ANSWER?</h2>
                    <p className="faq-cta__desc">Our local team is happy to help you plan the perfect Karakoram experience.</p>
                </div>
                <div className="faq-cta__buttons">
                    <a href="/contact" className="faq-btn-white">CONTACT OUR TEAM</a>
                    <a href="/expeditions" className="faq-btn-outline">EXPLORE EXPEDITIONS</a>
                </div>
            </div>
        </div>
    </section>

    
    <footer className="footer">
        <div className="faq-container footer__container">

            
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

        <div className="faq-container footer__bottom">
            <p>&copy; 2026 Broad Peak Adventures. All Rights Reserved.</p>
        </div>
    </footer>

    
    <a href="#" className="scroll-to-top">
        <i className="ri-arrow-up-line"></i>
    </a>
    </div>
  );
}
